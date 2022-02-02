"use strict";

// const timer = setTimeout(() => {
//     console.log("Done");
//     clearTimeout(timer);
// }, 1000);

// console.log("after timer");

// const start = new Date();
// const interval = setInterval(() => {
//     console.log("interval");
//     console.log(new Date() - start);
//     clearInterval(interval);
// }, 1000);

// sessionStorage;
// localStorage;

// const num = 33;
// const arr = [1, 2, 3, 4, 5];
// const user = {
//     name: "Uasya",
//     showName() {
//         console.log(this.name);
//     },
// };

// // JSON
// // console.log(JSON);

// localStorage.setItem("user", JSON.stringify(user));
// console.log(JSON.parse(localStorage.getItem("user")));

// console.log(JSON.stringify("dfghjk"));
// console.log(JSON.parse(JSON.stringify("dfghjk")));
// localStorage.length;
// localStorage.removeItem("user");
// localStorage.clear();

// TASK 1

// const button = document.querySelector("#button");
// const form = document.querySelector("#form");
// const reminder = document.querySelector("#reminder");
// const seconds = document.querySelector("#seconds");

// reminder.focus();

// form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     if (!reminder.value) {
//         alert("Ведите текст напоминания.");
//     } else if (seconds.value <= 1) {
//         alert("Время задержки должно быть больше одной секунды.");
//     } else {
//         button.disabled = true;
//         reminder.disabled = true;
//         seconds.disabled = true;

//         let timer = setTimeout(function () {
//             alert(reminder.value);
//             clearTimeout(timer);

//             reminder.value = "";
//             seconds.value = "";

//             button.disabled = false;
//             reminder.disabled = false;
//             seconds.disabled = false;
//         }, seconds.value * 1000);
//     }
// });

// TASK 2

// if (localStorage.getItem("userName")) {
//     alert(`Hello, ${JSON.parse(localStorage.getItem("userName"))}`);
// } else {
//     localStorage.setItem("userName", JSON.stringify(prompt(`Ent your name`)));
// }

// TASK 3
// const form = document.createElement("form");
// const inputLogin = document.createElement("input");
// const inputPass = document.createElement("input");
// const button = document.createElement("button");

// form.append(inputLogin, inputPass, button);

// inputPass.type = "password";
// inputLogin.required = true;
// inputPass.required = true;

// document.body.append(form);

// button.textContent = "Save";

// form.addEventListener("submit", function () {
//     // localStorage.setItem("login", JSON.stringify(inputLogin.value));
//     // localStorage.setItem("pass", JSON.stringify(inputPass.value));

//     localStorage.setItem(
//         "user",
//         JSON.stringify({ pass: inputPass.value, login: inputLogin.value })
//     );
// });
