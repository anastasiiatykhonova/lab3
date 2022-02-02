"use strict";

// const strO = new String("Hello");
// console.log(strO);
// console.log(typeof strO);

// console.log(strO[0]);
// strO[0] = "d";

// const str = "Hello, world! , "; // "", '', ``,

// console.log(str);
// console.log(typeof str);
// console.log(str[0]);

// console.log(str.length);
// console.log(str["11"]);
// console.log(str[11]);

// const str2 = "Some \n string \u{1F60D}";
// console.log(str2);
// console.log(str2[str2.length - 1]);
// console.log(str2[str2.length - 2]);

// console.log(str2[str2.length - 2] + str2[str2.length - 1]);

// console.log(str2[str2.length - 3]);

// console.log(str);

// console.log(str.slice());
// console.log(str.slice(3));
// console.log("slice: " + str.slice(3, 7));

// console.log("substring: " + str.substring(3, 7));
// console.log("substr: " + str.substr(3, 7));

// console.log(str.includes("lo"));
// console.log(str.startsWith("lo"));
// console.log(str.endsWith("lo"));

// for (const key in str) {
//     console.log(`key: ${key}`);
// }
// for (const value of str) {
//     console.log(`value: ${value}`);
// }

// console.log(str.indexOf("o"));
// console.log(str.lastIndexOf("o"));

// console.log(str.indexOf("oo"));
// console.log(str.lastIndexOf("oo"));

// console.log(str.repeat(2));

// console.log(str.replace("o", "E"));
// console.log(str.replaceAll("o", ""));

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// const str3 = " text ";

// console.log(str3.trim());

// console.log(str3.trimLeft());
// console.log(str3.trimStart());
// console.log(str3.trimEnd());
// console.log(str3.trimRight());

// console.log(str.split());
// console.log(str.split("", 3));
// console.log(str.split(" "));

// console.log("a" > "Z");
// console.log("a".charCodeAt(0));
// console.log("Z".charCodeAt(0));
// console.log("\u{1F60D}".charCodeAt(0));
// console.log("\u{1F60D}".charCodeAt(1));

// String.fromCodePoint(90);

// for (let i = 0; i < 400; i++) {
//     console.log(String.fromCodePoint(i));
// }

// DATE
// const date = new Date(1637691150048);
// const date = new Date("2021");
// const date = new Date("2021-10");

// const date = new Date("2021-10-11");
// const date = new Date("11-10-2021");

// const date = new Date("2021-10-11 04:30");
// const date = new Date(1637691150048);
// console.log(Date.now());
// console.log(date);

// console.log(date.getDate());
// console.log(date.setDate("10"));
// console.log(date);

// console.log(Date.now() - date);

// console.log(3781826649 / (1000 * 60 * 60 * 24));

// TASK 1
// function repeat(goalString, times) {
//     let newGoalString = "";
//     for (let i = 0; i < times; i++) {
//         newGoalString += goalString;
//     }
//     return newGoalString;
// }

// console.log(repeat("My String ", 3));

// TASK 2

// function capitalizeAndDoublify(str) {
//     let result = "";
//     for (const i of str) {
//         result += i.toUpperCase().repeat(2);
//     }
//     return result;
// }

// console.log(capitalizeAndDoublify("Hello"));
// HHEELLLLOO
// "text".indexOf("t").repeat(2);

// TASK 3
// function truncate(str, length) {
//     let res = ``;

//     // if (str.length > length) {
//     //     res += `${str.slice(0, length - 3)}...`;
//     // } else {
//     //     return str;
//     // }

//     return res;
// }

// (condition) ? (value if condition === true) : (value if condition === false)

function truncate(str, length) {
    return str.length > length ? `${str.slice(0, length - 3)}...` : str;
}
console.log(truncate(`Hell`, 4));
