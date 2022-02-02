"use strict";
/*
string
number, NaN
boolean
null
undefined

array
function
object
*/

// PART 1

// String
// console.log(`${1 + 3}`);
// console.log("1 + 3");
// console.log((1).toString());
// console.log(1 + "");
// console.log(String(111));

// console.log(null.toString());
// console.log(undefined + "");
// console.log(String(undefined));

// console.log(true.toString());
// console.log(true + "");
// console.log(String(true));

// console.log([55, 13, null, undefined, NaN, [2, 3]].toString());
// console.log([55, 13, null, undefined, NaN, [2, 3]] + "");
// console.log(String([55, 13, null, undefined, NaN, [2, 3]]));

// console.log({ a: 3 }.toString());
// console.log({ a: 3 } + "");
// console.log(String({ a: 3 }));

// console.log({ a: 3, b: 44 });

// console.log(
//     function () {
//         console.log(11);
//         ({ a: 3, b: 44 });
//     }.toString()
// );
// console.log(
//     function () {
//         console.log(11);
//         ({ a: 3, b: 44 });
//     } + ""
// );
// console.log(
//     String(function () {
//         console.log(11);
//         ({ a: 3, b: 44 });
//     })
// );

// Number
// Number(), parseInt(), parseFloat(), +
// console.log(Number("aaa12"));
// console.log(parseFloat("aaa12"));
// console.log(parseInt("aaa12"));
// console.log(+"aaa12");

// console.log(Number(function () {}));
// console.log(parseFloat(function () {}));
// console.log(parseInt(function () {}));
// console.log(+function () {});

// Boolean
// console.log(Boolean(0));
// console.log(Boolean(NaN));

// console.log(!0);
// console.log(!!1);
// console.log(Boolean(1));

// let x, y, z;

// x = true;

// y = 15;

// z = 4;

// console.log((z = --x - y * 5));

// console.log(x);
// console.log(++x);
// console.log(x++);
// console.log(x);

// x = 6;

// y = 15;

// z = 4;

// console.log((y /= x + (5 % z)));

// y /= -> y = y /

// x = 6;

// y = 15;

// z = 4;

// let s = 6;

// console.log((s += y - x++ * z));

// console.log(!!"false" == !!"true");

// console.log(1 === true);

// console.log("true" == true);

// console.log("true" === true);

// console.log(!!NaN === !1);

// console.log(NaN == NaN);

// console.log(NaN === NaN);
// console.log(--Infinity == --Infinity);
// console.log(1 / Infinity);

// console.log(0 == "0");

// console.log(0 === "0");

// const first = false;

// const second = true;

// console.log(first == 0);

// console.log(second === 1);

// console.log(0.1 + 0.2 === 0.3);
// console.log(0.1 + 0.2);
// ==, ===, !=, !==

// PART 2

let number = 3;
let str = "text";
let nullV = null;
let undef = undefined;
let bool = true;
const obj = {};
const arr = ["tt", "aa"];

let res;

// res = "" + number;
// console.log(res);
// console.log(typeof res);

// res = "" + obj;
// console.log(res);
// console.log(typeof res);

// res = "" + arr;
// console.log(res);
// console.log(typeof res);

// -, *, /, % and other Math operations
// res = "" * str;
// console.log(res);
// console.log(typeof res);

// res = 1 * [2, 3];
// console.log(res);
// console.log(typeof res);

// res = 1 * {};
// console.log(res);
// console.log(typeof res);

// res = +[1, 2];
// console.log(res);
// console.log(typeof res);

// res = 1 * "22a";
// console.log(res);
// console.log(typeof res);

let value = "a12";

// console.log(!Number.isNaN(val));
// console.log(!isNaN(val));

// right value  = "14", "0" -> true
// bad value = "a14", "14a", "", null -> false
// value = "null";

// console.log(value !== "" && !isNaN(+value) && !!value);

// console.log(value !== null);
// console.log(!!value);

// value = false;
// console.log(!!value);
// !, &&, ||
// console.log(1 && 0);
// console.log(1 || 0);

// console.log(null);
// console.log(!null);
// console.log(!!null);
// console.log(Boolean(null));

// console.log(null && 10);
// console.log(10 || undefined);

// console.log((10 && null) || undefined);

// console.log(0 || 10 || undefined || (true && "tt"));

console.log((true && "" && 10) || (null && undefined));

let namUser1, namUser2, namUser3;

namUser1 &&
    !isNaN(+namUser1) &&
    typeof +namUser1 === "number" &&
    namUser2 &&
    !isNaN(+namUser2) &&
    typeof +namUser2 === "number" &&
    namUser3 &&
    !isNaN(+namUser3) &&
    typeof +namUser3 === "number";
