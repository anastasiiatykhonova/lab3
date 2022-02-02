"use strict";

// Number.toString();
// (3).toString();

// logger();

// function logger() {
//     for (let i = 0; i < 3; i++) {
//         console.log("Hi");
//     }
// }

// logger();

// logger2();

// const logger2 = function () {
//     for (let i = 0; i < 3; i++) {
//         console.log("Hi");
//     }
// };

// logger2();
// const a = 3;
// const b = 4;

// function summ(c, d, fn) {
//     fn();
//     return c + d;
//     console.log("www");
// }
// console.log(a);
// console.log(summ(a, b, logger2));

// {
//     // let, const
//     let f = 4;
//     {
//         console.log(f);
//     }
// }
// console.log(f);

// TASK 1
// function sum(x, y) {
//     return x + y;
// }
// console.log(sum(4, 7));

// TASK 2

// function fn(word) {
//     console.log(arguments);
//     //     console.log(arguments[5]);
//     console.log(arguments.length);

//     console.log(word);

//     for (let i = 0; i < arguments.length; i++) {
//         console.log(arguments[i]);
//     }
// }
// fn("sf", "df", "dh");
// fn("sf", "df", "dh", "dfg");

//task 3
//Функцию обладает будет двумя параметрами:
// Первый — число, с которого необходимо начать счёт;
// Второй — число, которым необходимо закончить счёт.

// function counter(start, finish) {
//     if (start > finish) {
//         console.log("«⛔️ Ошибка! Счёт невозможен.»");
//         return;
//     }
//     if (start === finish) {
//         console.log("«⛔️ Ошибка! Нечего считать.»");
//         return;
//     }
//     console.log("«🏁 Отсчёт начат.».");
//     for (let i = start; i <= finish; i++) {
//         console.log(i);
//     }
//     console.log("«✅ Отсчёт завершен.».");
// }

// counter(4, 7);

// TASK 4

function isNumber(x) {
    return !(!x || isNaN(+x) || typeof +x !== "number");
}

// function counterAdvanced(start, finish, checker) {
//     if (arguments.length !== 3) {
//         return false;
//     }
//     if (!isNumber(start) || !isNumber(finish) || !isNumber(checker)) {
//         return false;
//     }

//     if (start > finish) {
//         console.log("«⛔️ Ошибка! Счёт невозможен.»");
//         return;
//     }
//     if (start === finish) {
//         console.log("«⛔️ Ошибка! Нечего считать.»");
//         return;
//     }
//     console.log("«🏁 Отсчёт начат.».");
//     for (let i = start; i <= finish; i++) {
//         if (i % checker === 0) {
//             console.log(i);
//         }
//     }
//     console.log("«✅ Отсчёт завершен.».");
// }

// counterAdvanced(4, 15, 3);

// function sum() {
//     if (arguments.length < 2) {
//         return `Error. nOT ENOUGH arguments.`;
//     }

//     for (let index = 0; index < arguments.length; index++) {
//         if (!isNumber(arguments[index])) {
//             return `Error in ${index + 1} argument`;
//         }
//     }

//     let result = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         //   result += arguments[i];
//         result = result + +arguments[i];
//     }

//     return result;
// }

// console.log(sum(2, "4", 5, 6));

// TASK 6

function counter() {
    let i = 0;

    return function () {
        return i++;
    };
}
const c = counter();
const b = counter();

console.log(c());
console.log(c());
console.log(c());
console.log(c());

console.log(b());
