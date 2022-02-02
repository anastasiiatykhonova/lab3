"use strict";

// (3).toString();

// Object(), Object.create()
const myAge = 0;
const myAgeTitle = "my age";

// console.log(this);

const obj = {
    name: "Uasya",
    "birth year": 1990,
    [myAgeTitle]: myAge,
    a: 6,

    family: {
        name: "My greate family",
        count: 3,
        sumAge: 99,
        ages: [22, 33, 44],
        "birth year": 1990,
        getCount() {
            return this.count;
        },
        getName() {
            return this.name;
        },
    },
    getAge: function () {
        return this["my age"];
    },
    getName() {
        return this.name;
    },
};

// obj.name = "";

// console.log(obj.family.getName.call(obj, 1, 2));
// console.log(obj.family.getName.apply(obj, [1, 2]));

// console.log(obj.getName());
// console.log(obj.getName.call(obj.family));

// console.log(obj.getName.apply(obj.family));

// console.log(obj.getName.bind(obj.family)());

// console.log([22, 33, 44] instanceof Array);
// console.log(obj["birth year"] instanceof Object);
// console.log(obj["family"].ages instanceof Object);
// const obj2 = obj;

const obj2 = {};

for (const key in obj) {
    // console.log(key);
    obj2[key] = obj[key];
}

obj2.lastName = "Galya";
// console.log(obj);
obj2["my age"] = 33;
// console.log(`${obj2.getAge}`);
// console.log(obj2.getAge());

const obj3 = Object.assign([22, 33, 44], [11, 12, 55]);
// console.log(obj3);

// console.log(typeof null);
// console.log(typeof { a: 6 });

// console.log({ a: 6 } instanceof Object);
// console.log(null instanceof Object);

// console.log([22, 33, 44] instanceof Object);

// console.log(Array instanceof Object);

// console.log(obj["name"]);

// console.log(obj["birth year"]);
// console.log(obj["my age"]);

// console.log(obj.getAge());
// console.log(obj.getName());

// const obj4 = {
//     _name: "Anonim",
//     set name(value) {
//         if (this._checkProp(value)) {
//             this._name = value;
//         }
//     },
//     get name() {
//         return this._name;
//     },
//     getName() {
//         return this.name; // return return this._name;
//     },
//     _checkProp(value) {},
//     age: 0,
// };

// Object.defineProperties()
// Object.defineProperty(obj4, "age", {
//     get: function () {
//         return this._age;
//     },
//     set: function (value) {
//         this._age = value;
//     },
//     enumerable: false,
// });

// console.log(obj4);
// obj4.age = 33;
// console.log(obj4.age);

// Чтобы избежать конфликта, запрещено одновременно указывать значение value и функции get/set. Либо значение, либо функции для его чтения-записи, одно из двух. Также запрещено и не имеет смысла указывать writable при наличии get/set-функций.

const obj5 = {
    a: 4,
    b: "strinh",
    c: undefined,
};

// console.log("a" in obj5);
// console.log("b" in obj5);
// console.log("c" in obj5);
// console.log("cc" in obj5);
// console.log();
// console.log(obj5.hasOwnProperty("a"));
// console.log(obj5.hasOwnProperty("b"));
// console.log(obj5.hasOwnProperty("c"));
// console.log(obj5.hasOwnProperty("cc"));
// console.log();
// console.log(Object.hasOwn(obj5, "a"));
// console.log(Object.hasOwn(obj5, "b"));
// console.log(Object.hasOwn(obj5, "c"));
// console.log(Object.hasOwn(obj5, "cc"));

// console.log(Object.keys(obj5));
// console.log(Object.values(obj5));

// Task 1

// const user = {
//     name: "Ivan",
//     surname: "Petrenko",
//     job: "cleaner",

//     sayHi: function () {
//         console.log("Hello!");
//     },
// };
// user.sayHi();
// console.log(user.name);

// TASK 2

const user = {
    name: "Ivan",
    surname: "Petrenko",
    job: "cleaner",

    sayHi: function () {
        console.log(`Hello! I am ${user.name} ${user.surname}`);
    },
    changeProperty: function (propertyName, propertyValue) {
        if (Object.hasOwn(this, propertyName)) {
            this[propertyName] = propertyValue;
        } else {
            console.log("Error");
        }
    },
};
user.sayHi();
user.changeProperty("hobby", "Vasya");
console.log(user.name);
console.log(user);
