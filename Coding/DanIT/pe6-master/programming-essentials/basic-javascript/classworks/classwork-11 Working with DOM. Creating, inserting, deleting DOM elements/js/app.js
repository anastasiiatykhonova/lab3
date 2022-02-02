"use strict";

const root = document.getElementById("root");

const p = document.createElement("p");
console.log(p);
p.textContent = "lorem ipsum";

// // root.innerHTML += p.outerHTML;
root.append(p);

function fn(n) {
    let x = "";
    if (n !== 0) {
        return x + " " + n + fn(--n);
    } else {
        return " " + n;
    }
}

console.log(fn(10));
// const cloneP = p.cloneNode(true);
// root.append(cloneP);

// root.prepend(p);

// root.after(p);
// root.before(p);
// p.remove();

// root.after("<span>span text</span>");
// root.append("<span>span text</span>");

// root.insertAdjacentElement("afterbegin", p);
// root.insertAdjacentElement("afterbegin", "<strong>new span</strong>");
// root.insertAdjacentHTML("afterend", "<strong>new span</strong>");
// root.insertAdjacentHTML("afterend", p);
// root.insertAdjacentText("beforeend", "<span>new span2</span>");

// const arr = [];

// for (let i = 0; i < 10; i++) {
//     const p = document.createElement("p");
//     // p.textContent = `${i + 1} paragraf`;
//     p.textContent = i + " text";
//     p.id = `par-${i}`;

//     p.setAttribute("class", `par strong`);
//     p.dataset.count = !!Math.round(Math.random());
//     // console.log(p.dataset.count);
//     console.log(p.getAttribute("data-count"));
//     arr.push(p);
// }

// console.log(arr);

// // root.append(...arr);
// const fragment = document.createDocumentFragment();
// console.log(fragment);

// // arr.forEach((el) => {
// //     fragment.append(el);
// // });

// fragment.append(...arr);
// // console.log(fragment);
// root.append(fragment);
// // console.log(fragment);

// TASK 1

// let size = ``;

// do {
//     size = prompt(`Enter size`);
// } while (+size <= 0 || isNaN(+size));

// const rectangle = document.createElement(`div`);
// rectangle.style.cssText = `width: ${size}px; height: ${size}px; background-color: red;`;

// document.body.innerHTML = rectangle.outerHTML;

// TASK 2

// const maxSquares = 10;
// const createSquares = function (count, maxSquares) {
//     if (count > maxSquares) {
//         console.log("невозможностb такой операции");
//         return false;
//     }
//     for (let i = 0; i < count; i++) {
//         let size;
//         do {
//             size = prompt("Введите размер квадрата");
//             if (size === null) {
//                 console.log("«Операция прервана пользователем.»");
//                 return false;
//             }
//         } while (+size <= 0 || isNaN(+size));
//         let color;
//         do {
//             color = prompt("Введите цвет квадрата в формате R,G,B");
//             if (color === null) {
//                 console.log("«Операция прервана пользователем.»");
//                 return false;
//             }
//         } while (!color);

//         const rectangle = document.createElement(`div`);
//         rectangle.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgb(${color});`;

//         document.body.append(rectangle);
//     }
// };

// let count;
// do {
//     count = prompt("sqr count");
// } while (+count <= 0 || isNaN(+count));
// createSquares(count, maxSquares);
