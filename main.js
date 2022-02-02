"use strict"

import * as THREE from "three";

import Stats from "https://threejs.org/examples/jsm/libs/stats.module.js";

import { Curves } from "https://threejs.org/examples/jsm/curves/CurveExtras.js";
import { ParametricGeometry } from "https://threejs.org/examples/jsm/geometries/ParametricGeometry.js";
import { ParametricGeometries } from "https://threejs.org/examples/jsm/geometries/ParametricGeometries.js";


let camera, scene, renderer, stats, geometry, object;

init();
animate();

function kleinBottle2(u, v, p) {
    u = u * Math.PI * 2;
    v = v * Math.PI * 2;

    var a = 3;

    var x =
        (a +
            Math.cos(u / 2) * Math.sin(v) -
            Math.sin(u / 2) * Math.sin(2 * v)) *
        Math.cos(u);
    var y =
        (a +
            Math.cos(u / 2) * Math.sin(v) -
            Math.sin(u / 2) * Math.sin(2 * v)) *
        Math.sin(u);
    var z =
        Math.sin(u / 2) * Math.sin(v) + Math.cos(u / 2) * Math.sin(2 * v);

    const scale = 1;

    p.x = x * scale;
    p.y = y * scale;
    p.z = z * scale;
}



function init() {
    const container = document.getElementById("container");

    camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        2000
    );
    camera.position.y = 400;

    scene = new THREE.Scene();

    //

    const ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.8);
    camera.add(pointLight);
    scene.add(camera);

    //

    const map = new THREE.TextureLoader().load(
        "https://threejs.org/examples/textures/uv_grid_opengl.jpg"
    );
    map.wrapS = map.wrapT = THREE.RepeatWrapping;
    map.anisotropy = 16;

    const material = new THREE.MeshPhongMaterial({
        map: map,
        side: THREE.DoubleSide,
    });

    //




    geometry = new ParametricGeometry(kleinBottle2, 20, 20);
    object = new THREE.Mesh(geometry, material);
    object.position.set(0, 0, 200);
    object.scale.multiplyScalar(30);
    scene.add(object);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    stats = new Stats();
    container.appendChild(stats.dom);

    window.addEventListener("resize", onWindowResize);
    window.addEventListener("deviceorientation", onDeviceOrientation, true);
}


function onDeviceOrientation(event) {

    var m2 = getRotationMatrix(event.alpha, event.beta, event.gamma);

    var threejs_matrix4 = new THREE.Matrix4();
    threejs_matrix4.set(
        m2[0], m2[1], m2[2], 0,
        m2[3], m2[4], m2[5], 0,
        m2[6], m2[7], m2[8], 0,
        0, 0, 0, 1
    );
    object.rotation.setFromRotationMatrix(threejs_matrix4);

    renderer.render(scene, camera);
}


function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    render();
    stats.update();
}

function render() {
    const timer = Date.now() * 0.0001;

    camera.position.x = 0;
    camera.position.z = 0;
    camera.position.y = 1500;

    camera.lookAt(scene.position);

    // scene.traverse(function(object) {
    //     if (object.isMesh === true) {
    //         object.rotation.x = timer * 5;
    //         object.rotation.y = timer * 2.5;
    //     }
    // });

    // object.rotation.x = Math.random() * 100;

    renderer.render(scene, camera);
}

function getRotationMatrix(alpha, beta, gamma) {
    var degtorad = Math.PI / 180; // Degree-to-Radian conversion
    var _x = beta ? beta * degtorad : 0; // beta value
    var _y = gamma ? gamma * degtorad : 0; // gamma value
    var _z = alpha ? alpha * degtorad : 0; // alpha value

    var cX = Math.cos(_x);
    var cY = Math.cos(_y);
    var cZ = Math.cos(_z);
    var sX = Math.sin(_x);
    var sY = Math.sin(_y);
    var sZ = Math.sin(_z);

    // ZXY rotation matrix construction.

    var m11 = cZ * cY - sZ * sX * sY;
    var m12 = -cX * sZ;
    var m13 = cY * sZ * sX + cZ * sY;

    var m21 = cY * sZ + cZ * sX * sY;
    var m22 = cZ * cX;
    var m23 = sZ * sY - cZ * cY * sX;

    var m31 = -cX * sY;
    var m32 = sX;
    var m33 = cX * cY;

    return [m11, m12, m13, m21, m22, m23, m31, m32, m33];
}


function requestDeviceOrientation() {

    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {

        DeviceOrientationEvent.requestPermission()
            .then(response => {

                if (response === 'granted') {

                    window.addEventListener('deviceorientation', e => {}, true);
                }
            }).catch((err => {
                console.log('Err', err);
            }));
    } else {
        console.log('not iOS');
    }
}


const btn = document.getElementById("request");
btn.addEventListener("click", requestDeviceOrientation);