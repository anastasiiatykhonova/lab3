"use strict";

// const btn = document.querySelector("button");
// console.log(btn);

// btn.onclick = function () {
//     alert("Hi");
// };
// btn.onclick = function () {
//     alert("Hi all");
// };

// btn.addEventListener("click", function () {
//     alert("Hi all");
// });

// btn.addEventListener("click", () => {
//     console.log(this);
// });

// btn.addEventListener("click", btnClickHandler);

// function btnClickHandler(e) {
//     console.log(e.target === this);
//     console.log(e);

//     if (e.ctrlKey) {
//         btn.removeEventListener("click", btnClickHandler);
//     }
// }

// function onBtnClick(event) {
//     console.log(event.target === this);
// }

const root = document.querySelector("#root");

// TASK 1

// const buttonCreator = function () {
//     const button = document.createElement("button");
//     button.textContent = "Войти";
//     button.addEventListener("click", () => {
//         alert("Добро пожаловать!");
//     });
//     root.append(button);
// };

// buttonCreator();

// TASK 2

// const buttonCreator = function () {
//     const button = document.createElement("button");
//     button.textContent = "Войти";

//     root.append(button);

//     button.addEventListener("click", () => {
//         alert("Добро пожаловать!");
//     });

//     function buttonMouseEnter() {
//         alert("При клике по кнопке вы войдёте в систему.");
//         button.removeEventListener("mouseover", buttonMouseEnter);
//     }

//     button.addEventListener("mouseover", buttonMouseEnter);
// };

// buttonCreator();

// TASK 3

const PHRASE = "Добро пожаловать!";

function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}

function createDubleTag() {
    const header1 = document.createElement("h1");
    header1.textContent = "Добро пожаловать!";
    root.append(header1);

    const button = document.createElement("button");
    button.textContent = "«Раскрасить»";
    header1.after(button);

    const chanColor = function () {
        const chars = header1.textContent.split("");

        // const array = arrStr.map((element) => {
        //     return `<span style="color: ${getRandomColor()}">${element}</span>`;
        // });
        const spans = chars.map((element) => {
            const span = document.createElement("span");
            span.textContent = element;
            span.style.color = getRandomColor();
            return span;
        });

        // header1.innerHTML = array.join("");
        const fragment = document.createDocumentFragment();
        fragment.append(...spans);
        header1.innerHTML = "";
        header1.append(fragment);
    };
    button.addEventListener("click", chanColor);
}

createDubleTag();
