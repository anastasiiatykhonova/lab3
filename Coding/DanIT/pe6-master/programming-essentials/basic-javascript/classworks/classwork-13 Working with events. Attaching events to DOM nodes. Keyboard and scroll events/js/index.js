"use strict";

// const p = document.querySelector("p");
// const input = document.querySelector("input");
// const button = document.querySelector("button");

// p.addEventListener("click", function (e) {
//     console.log(e);
// });
// input.addEventListener("input", function (e) {
//     console.log(e);
// });
// button.addEventListener("keypress", function (e) {
//     console.log(e);
// });

// console.log(window.getComputedStyle(p).width);

// console.log("offsetHeight => ", p.offsetHeight);
// console.log("offsetWidth => ", p.offsetWidth);
// console.log("offsetTop => ", p.offsetTop);
// console.log("offsetLeft => ", p.offsetLeft);

// console.log("clientHeight => ", p.clientHeight);
// console.log("clientWidth => ", p.clientWidth);
// console.log("clientTop => ", p.clientTop);
// console.log("clientLeft => ", p.clientLeft);

// console.log("scrollHeight => ", p.scrollHeight);

// console.log("Body scrollHeight => ", document.body.scrollHeight);

// console.log("innerHeight => ", window.innerHeight);
// console.log("innerWidth => ", window.innerWidth);
// console.log("scrollX => ", window.scrollX);
// console.log("scrollY => ", window.scrollY);

// console.log("body clientHeight => ", document.body.clientHeight);
// console.log("body clientWidth => ", document.body.clientWidth);
// console.log("body clientTop => ", document.body.clientTop);
// console.log("body clientLeft => ", document.body.clientLeft);

// console.log(p.getBoundingClientRect());
// console.log(input.getBoundingClientRect());
// console.log(document.body.getBoundingClientRect());

// window.addEventListener("scroll", function (e) {
//     console.log("scroll");
// });

const root = document.querySelector("#root");

// TASK 1
// const h1 = document.createElement("h1");

// h1.textContent = "Нажмите любую клавишу.";

// root.append(h1);

// // function h1Handler(e) {
// //     h1.textContent = `Нажатая клавиша: ${e.key}`;
// // }
// // document.addEventListener("keydown", h1Handler);

// document.addEventListener("keydown", function (e) {
//     h1.textContent = `Нажатая клавиша: ${e.key}`;
// });

// TASK 2

// const input = document.querySelector("input");

// const p = document.createElement("p");

// input.after(p);

// const inputHandler = (e) => {
//     console.log(e);
//     if (e.data) {
//         p.textContent += e.data;
//     }
// };

// input.addEventListener("input", inputHandler);

//task3

const p = document.querySelector("p");
document.addEventListener("scroll", function (e) {
    const pRect = p.getBoundingClientRect();

    console.log(p.getBoundingClientRect().top);
    console.log(p.getBoundingClientRect().bottom);

    // console.log(pRect.top);
    console.log(pRect.bottom);

    if (pRect.bottom <= window.innerHeight && pRect.bottom >= pRect.height) {
        alert("YOu see it");
    }
});
