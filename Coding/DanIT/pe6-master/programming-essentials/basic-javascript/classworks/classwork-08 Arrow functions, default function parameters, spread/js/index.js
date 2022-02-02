"use strict";

// function fn(a = 0) {
//     return ++a;
// }

// console.log(fn(4));

// const user = {
//     name: "Uasya",
//     age: 33,
//     getName: function () {
//         return this.name;
//     },
//     getAge: function () {
//         return (() => this.age)();
//     },

//     fam: {
//         age: 18,
//         getAge: function () {
//             return (() => this.age)();
//         },
//     },
// };
// .bind, .call(), .apply()

// console.log(user.getName());
// console.log(user.fam.getAge());
// console.log(user.getAge());

// const sum = (a, b) => a + b;

// const sum = (a, b) => {
//     return a + b;
// };

// const fn = (a, b, ...params) => {
//     console.log(params);
//     console.log(...params);
// };

// fn(1, 2, 3, 4, 5);

// const a = {
//     a: 3,
//     b: 4,
// };

// Object.assign()
// const b = { c: "Ce", b: 5, ...a };

// console.log(b);

// console.log([1, 2, ...["a", "b", "C"], 3]);

// function fn() {
//     console.log(arguments);
//     console.log(typeof arguments);

//     console.log([...arguments]);
//     console.log(typeof [...arguments]);
// }

// fn(1, 2, 3);

//task1
// const sum = (a, b) => a + b;
// console.log(sum(4, 5));

// const summ = (a, b) => {
//     return a + b;
// };
// console.log(summ(4, 5));

//task2

// const sum = (...numbers) => {
//     if (numbers.length < 2) {
//         return "error";
//     }
//     for (const key in numbers) {
//         if (typeof numbers[key] !== "number" || isNaN(numbers[key])) {
//             console.log(typeof key);
//             return `Error in ${+key + 1} element`;
//         }
//     }

//     let result = 0;
//     for (const value of numbers) {
//         result += value;
//     }
//     return result;
// };
// console.log(sum(3, 4, "5", 6));

// TASK 3
// const max = (...numbers) => {
//     if (numbers.length < 2) {
//         return "error";
//     }
//     for (const key in numbers) {
//         if (typeof numbers[key] !== "number" || isNaN(numbers[key])) {
//             return `Error in ${+key + 1} element`;
//         }
//     }

//     return Math.max(...numbers);
// };
// console.log(max(-33, -4, -9, 6));

// TASK 4

// const log = (message = "Внимание! Сообщение не указано.", times = 1) => {
//     for (let i = 0; i < times; i++) {
//         console.log(message);
//     }
// };

// log();
// log("Hi!", 5);

// TASK 5
// const cb = () => {
//     console.log("CallBack run");
// };

// const fn = (callBack) => {
//     callBack();
// };

// fn(cb);

// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// const multiply = (a, b) => a * b;
// const divide = (a, b) => a / b;

// const calculate = (a, b, callback) => callback(a, b);

// console.log(calculate(5, 6, multiply));

// console.log(calculate(5, 6, (a, b) => a % b));

// console.log(
//     calculate(5, 6, function (a, b) {
//         return a ** b;
//     })
// );

// const a = function () {};
// const b = () => {};

// a();
// b();

// IIFE
(() => {
    console.log("Hi");
})();

(function () {
    console.log("Hi 2");
})();
