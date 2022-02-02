// "use strict";

// for(;;){}

// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         //   break;
//         continue;
//     }
//     console.log(i);
// }

// let age = 3;
// console.log(window);
// console.log(window.age);

// do {
//     console.log("do while");
// } while (false);

// while (false) {
//     console.log("while");
// }

// TASK 1
// for (let number = 0; number <= 300; ++number) {
//     if (number % 2 !== 0 && number % 5 !== 0) {
//         console.log(number);
//     }
// }

// TASK 2
// let number1 = prompt("Enter 1st number");
// let number2 = prompt("Enter 2nd number");
// number1 = "44"; // -> true
// while (
//     !number1 ||
//     isNaN(+number1) ||
//     typeof +number1 !== "number" ||
//     !number2 ||
//     isNaN(+number2) ||
//     typeof +number2 !== "number"
// ) {
//     number1 = prompt("Enter 1st number");
//     number2 = prompt("Enter 2nd number");
// }

// console.log(`Поздравляем. Введённые вами числа: ${number1} и ${number2}.`);

// let number = "44a";

// console.log(number);
// console.log(+number);
// // console.log(isNaN(+number));

// TASk 3
// let name;
// let lastName;
// let birth;

// do {
//     name = prompt("enter name");
//     lastName = prompt("enter  your last name");
//     birth = prompt("enter your date of birth");
// } while (name === "" || lastName === "" || +birth < 1910 || +birth > 2021);

// console.log(`Добро пожаловать, родившийся в ${birth}, ${name} ${lastName}.`);

// console.log("" === "");
// console.log("" !== "");
// console.log(!"");

// TASK 4
// let flag = true;
// while (flag) {
//     let studentName;
//     let studentMark;

//     do {
//         studentName = prompt("Enter student name");
//         studentMark = prompt("Enter student mark");
//     } while (
//         !studentMark ||
//         studentMark < 0 ||
//         studentMark > 100 ||
//         !studentName
//     );

//     if (studentMark >= 95) {
//         studentMark = "A";
//     } else if (studentMark >= 90 && studentMark <= 94) {
//         studentMark = "A-";
//     } else if (studentMark >= 85 && studentMark <= 89) {
//         studentMark = "B+";
//     } else if (studentMark >= 80 && studentMark <= 84) {
//         studentMark = "B";
//     } else if (studentMark >= 75 && studentMark <= 79) {
//         studentMark = "B-";
//     } else if (studentMark >= 70 && studentMark <= 74) {
//         studentMark = "C+";
//     } else if (studentMark >= 65 && studentMark <= 69) {
//         studentMark = "C";
//     } else if (studentMark >= 60 && studentMark <= 64) {
//         studentMark = "C-";
//     } else if (studentMark >= 55 && studentMark <= 59) {
//         studentMark = "D+";
//     } else if (studentMark >= 50 && studentMark <= 54) {
//         studentMark = "D";
//     } else if (studentMark >= 25 && studentMark <= 49) {
//         studentMark = "E";
//     } else {
//         studentMark = "F";
//     }
//     console.log(
//         `К студенту ${studentName} прикреплена оценка «${studentMark}»`
//     );
//     if (!confirm("Do you want to continue")) {
//         flag = !flag;
//         console.log("Work is over!");
//     }
// }

// TASK 5
let flag = true;
while (flag) {
    let num1 = prompt("Enter first number");
    let num2 = prompt("Enter second number");
    let operation = prompt("Enter +, -, /, *, **");
    let res;

    if (operation !== "") {
        switch (operation) {
            case "+":
                res = num1 + num2;
                break;
            case "-":
                res = num1 - num2;
                break;
            case "/":
                res = num1 / num2;
                break;
            case "*":
                res = num1 * num2;
                break;
            case "**":
                res = num1 ** num2;
                break;
        }
        console.log(`Над числами ${num1} и ${num2} была произведена операция ${operation}. Результат:
    ${res}.`);
    }
    if (!confirm("Do you want to continue?")) {
        flag = !flag;
    }
}
console.log("Work is over!");
