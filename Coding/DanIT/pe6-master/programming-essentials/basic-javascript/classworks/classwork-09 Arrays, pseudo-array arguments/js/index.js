"use strict";

const arr = [1, 2, 3, "as", function () {}, { a: 3 }, null, undefined, NaN];

// console.log(arr);

// console.log(typeof arr);
// console.log(arr instanceof Array);
// console.log(arr instanceof Object);
// console.log(Array.isArray(arr));
// console.log(Array.isArray({}));

// console.log(arr[3]);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (const value of arr) {
//     console.log(value);
// }

// console.log(arr.push(34));
// console.log(arr);
// console.log(arr.pop(34));
// console.log(arr);

// console.log(arr.unshift(34));
// console.log(arr);
// console.log(arr.shift(34));
// console.log(arr);

// console.log(arr.length);
// arr.length = 12;
// arr[12] = 12;
// console.log(arr);

// arr.forEach((el) => {
//     console.log(el);
// });

// console.log(arr.slice(3, 6));
// console.log(arr);

// console.log(arr.splice(3, 0, "W", "o", "W"));
// console.log(arr);

// console.log(arr.join("-"));

// console.log("03.12.2021".split(".").reverse().join("."));

// arr.reverse();
// console.log(arr);
// arr.push(1);
// console.log(arr);

// console.log(arr.includes(1));
// console.log(arr.indexOf(1));
// console.log(arr.lastIndexOf(1));

// const foreachCB = (value) => {
//     // console.log(value);
//     value++;
// };
// arr.forEach(foreachCB);
// console.log(arr);

// arr.forEach((value, index, array) => {
//     array[index]++;
// });

// const users = [
//     { name: "Uasya", applesCount: 3 },
//     { name: "Olga", applesCount: 1 },
//     { name: "Svitlana", applesCount: 4 },
// ];

// const usersNames = users.map((el) => el.name);
// console.log(usersNames);

// const users2 = usersNames.map((el) => ({ name: el }));
// console.log(users2);

// const users = [
//     { name: "Uasya", applesCount: 3 },
//     { name: "Olga", applesCount: 1 },
//     { name: "Svitlana", applesCount: 4 },
// ];

// const reduceCb = (summ, currentEl) => summ + currentEl.applesCount;

// console.log(users.reduce(reduceCb, 0));

// console.log(users.reduceRight((res, curr) => res + curr.name + "-", ""));
// "" + "Svitlana" + "-"
// "" + "Svitlana" + "-" + "Olga" + "-"
// "" + "Svitlana" + "-" + "Olga" + "-" + "Uasya" + "-"

// const arr3 = [1, 4, 6, 2, 7, 8, 0, 12, 33, 45, 11, 67, 31];

// arr3.sort((a, b) => a - b);
// console.log(arr3);

// const users = [
//     { name: "Uasya", applesCount: 3 },
//     { name: "Olga", applesCount: 1 },
//     { name: "Svitlana", applesCount: 4 },
// ];

// users.sort((a, b) => a.name > b.name);
// console.log(users);
// users.sort((a, b) => a.applesCount - b.applesCount);
// console.log(users);
// const arr3 = [1, 4, 6, 2, 7, 8, 0, 12, 33, 45, 11, 67, 31];
// console.log(arr3);
// console.log(arr3.filter((el) => el > 60));

// console.log(arr3.find((el) => el > 10));
// console.log(arr3.findIndex((el) => el > 10));

// console.log(arr3.every((el) => el > 10));
// console.log(arr3.some((el) => el > 10));

// console.log([1, 2].concat(1, 2, 4, [5, 6, 7]));

// TASK 1
// const days = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday",
// ];

// for (let i = 0; i < days.length; i++) {
//     console.log(days[i]);
// }

// for (const ourDay of days) {
//     console.log(ourDay);
// }

// days.forEach((ourDay) => {
//     console.log(ourDay);
// });

// () => {}

// TASK 2

// function organizer() {
//     const days = {
//         ua: [
//             "Понеділок",
//             "Вівторок",
//             "Середа",
//             "Четвер",
//             "П’ятниця",
//             "Субота",
//             "Неділя",
//         ],
//         ru: [
//             "Понедельник",
//             "Вторник",
//             "Среда",
//             "Четверг",
//             "Пятница",
//             "Суббота",
//             "Воскресенье",
//         ],
//         en: [
//             "Monday",
//             "Tuesday",
//             "Wednesday",
//             "Thursday",
//             "Friday",
//             "Saturday",
//             "Sunday",
//         ],
//     };
//     console.log(Object.keys(days));

//     let lang;
//     do {
//         lang = prompt("Choose lang");
//     } while (!Object.keys(days).includes(lang));

//     return days[lang].join(", ");
// }

// console.log(organizer());

// TASK 3

function mergeArrays(...props) {
    console.log(props);

    // for (let i = 0; i < props.length; i++) {
    //     if (!Array.isArray(props[i])) {
    //         return `Error in ${i + 1} el`;
    //     }
    // }

    let flag = props.findIndex((el) => !Array.isArray(el));
    if (flag !== -1) {
        return `Error in ${flag + 1} el`;
    }

    // const result = [];
    let result = [];

    props.forEach((el) => {
        // result.push(...el);
        result = result.concat(...el);
    });
    return result;
}
console.log(mergeArrays([1, 2], ["a", 3], [false, null]));
