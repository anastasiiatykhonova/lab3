"use strict";

// &&, ||, !

// console.log(0 && 1);
// console.log(1 && 0);
// console.log(1 || 0);
// console.log(0 || 0);
// console.log(!0);

// if (condition) {
// to do
// }

// const age = 27;

// if (age === 18) {
//     console.log("Hi");
// } else if (age < 18) {
//     console.log("Bye");
// } else {
//     console.log("Hmm...");
// }

// if (age === 18) {
//     console.log("Hi");
// }
// if (age < 18) {
//     console.log("Bye");
// } else {
//     if (true) {
//         console.log("If inside else");
//     }
// }

// if (age > 18) {
//     console.log("Hmm...");

//     if (true) {
//         console.log("If inside");
//     }
// }

// const variant = "F";

// switch (variant) {
//     case "A":
//         console.log(`Your choise is ${variant} (A)`);
//         break;

//     case "B":
//         console.log(`Your choise is ${variant} (B)`);
//         break;

//     case "C":
//         console.log(`Your choise is ${variant} (C)`);
//         break;

//     case "D":
//         console.log(`Your choise is ${variant} (D)`);
//         break;

//     default:
//         console.log(`Variant not find`);
// }

// const a = 1;

// switch (true) {
//     case a < 10:
//         console.log(a);
//         break;

//     case false:
//         console.log("b");
//         break;
// }

// if (a) {
//     console.log(a);
// } else {
//     console.log("b");
// }

// const name = "Taras";
// let age;

// if (name === "Uasya") {
//     age = 18;
// } else {
//     age = 0;
// }

// const age = name === "Uasya" ? 18 : name === "Taras" ? 22 : 0;
// const age = name === "Uasya" ? 18 : 0;

// console.log(age);

// TASK 1

// let number = prompt("Please enter a number");

// if (number && !isNaN(+number) && typeof +number === "number") {
//     if (number % 2 === 0) {
//         console.log("Ваше число чётное.");
//     } else {
//         console.log("Ваше число не чётное.");
//     }
// } else {
//     number = prompt("Please enter a number");
//     if (number && !isNaN(+number) && typeof +number === "number") {
//         if (number % 2 === 0) {
//             console.log("Ваше число чётное.");
//         } else {
//             console.log("Ваше число не чётное.");
//         }
//     } else {
//         console.log("⛔️Ошибка! Вы ввели не число.");
//     }
// }

// TASK 2
// const name = prompt("Please enter your name");
// switch (name) {
//     case "Mike":
//         console.log("Hello," + name + "-CEO");
//         break;
//     case "Jane":
//         console.log("Hello," + name + "-CTO");
//         break;
//     case "Walter":
//         console.log("Hello," + name + "-программист");
//         break;
//     case "Oliver":
//         console.log("Hello," + name + "-менеджер");
//         break;
//     case "John":
//         console.log("Hello," + name + "- уборщик");
//         break;
//     default:
//         console.log("Пользователь не найден");
// }

// if (name === "Mike") {
//     console.log("Hello," + name + "-CEO");
// } else if (name === "Jane") {
//     console.log("Hello," + name + "-CTO");
// } else if (name === "Walter") {
//     console.log("Hello," + name + "-программист");
// } else if (name === "Oliver") {
//     console.log("Hello," + name + "-менеджер");
// } else if (name === "John") {
//     console.log("Hello," + name + "- уборщик");
// } else {
//     console.log("Пользователь не найден");
// }

// TASK 3

/*let num1 = prompt("Please enter a 1st number");
let num2 = prompt("Please enter a 2nd number");
let num3 = prompt("Please enter a 3rd number");

if (
    num1 &&
    !isNaN(+num1) &&
    typeof +num1 === "number" &&
    num2 &&
    !isNaN(+num2) &&
    typeof +num2 === "number" &&
    num3 &&
    !isNaN(+num3) &&
    typeof +num3 === "number"
) {
    if (+num1 > +num2 && +num1 > +num3) {
        console.log(num1);
    } else if (+num2 > +num1 && +num2 > +num3) {
        console.log(num2);
    } else {
        console.log(num3);
    }
} else {
    console.log("⛔️Ошибка! Одно из введённых чисел не является числом");
}
*/

//TASK 4
// let coins = prompt("Enter coins amount");
// let product = prompt("Enter product");

// -  -  Кофе за 25 монет;
// -  -  Капучино за 50 монет;
// -  -  Чай за 10 монет.
// DRY - dont repeat yourself
// var 2
// const COFFE_COST = 25;
// const CAPPUCHINO_COST = 50;
// const TEA_COST = 10;
// let rest;

// switch (product) {
//     case "coffe":
//         rest = +coins - COFFE_COST;
//         break;
//     case "cappucino":
//         rest = +coins - CAPPUCHINO_COST;
//         break;
//     case "tea":
//         rest = +coins - TEA_COST;
//         break;
// }

// if (rest === 0) {
//     console.log("Ваш " + product + " готов. Спасибо за сумму без сдачи! :)");
// } else if (rest < 0) {
//     console.log("Not enough money");
// } else {
//     console.log("Ваш " + product + " готов. Возьмите сдачу: " + rest);
// }

// var 1
// switch (product) {
//     case "coffe":
//         if (+coins === 25) {
//             console.log(
//                 "Ваш " + product + " готов. Спасибо за сумму без сдачи! :)"
//             );
//         } else {
//             rest = +coins - 25;
//             console.log("Ваш " + product + " готов. Возьмите сдачу: " + rest);
//         }
//         break;
//     case "cappucino":
//         if (+coins === 50) {
//             console.log(
//                 "Ваш " + product + " готов. Спасибо за сумму без сдачи! :)"
//             );
//         } else {
//             rest = +coins - 50;
//             console.log("Ваш " + product + " готов. Возьмите сдачу: " + rest);
//         }
//         break;
//     case "tea":
//         if (+coins === 10) {
//             console.log(
//                 "Ваш " + product + " готов. Спасибо за сумму без сдачи! :)"
//             );
//         } else {
//             rest = +coins - 10;
//             console.log("Ваш " + product + " готов. Возьмите сдачу: " + rest);
//         }
//         break;
// }

// TASK 5
// let adminStatus = false;
// const userName = prompt("Enter your name");
// const adminName:"Uasya", "Petro", "Max", "Olha";

// if (
//     userName === "Uasya" ||
//     userName === "Petro" ||
//     userName === "Max" ||
//     userName === "Olha"
// ) {
//     adminStatus = !adminStatus;
// }

// switch (userName) {
//     case "Uasya":
//         adminStatus = true;
//         break;
//     case "Petro":
//         adminStatus = true;
//         break;
//     case "Max":
//         adminStatus = true;
//         break;
//     case "Olha":
//         adminStatus = true;
//         break;

//     default:
//         break;
// }
