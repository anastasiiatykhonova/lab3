"use strict";

// // BOM - browser object model
// console.log(window);
// console.log(navigator);
// console.log(location);

// DOM - document object model
// console.log(document);
// console.log(document.body);
// console.log(document.body.childNodes);

// document.body.childNodes.forEach((el) => {
//     console.log(el);
// });

// const children = [...document.body.childNodes].filter(
//     (el) => el.nodeName !== "#text" && el.nodeName !== "#comment"
// );
// console.log(children);

// console.log(document.body.childNodes);
// console.log(document.body.children);
// console.log(document.body.children[0]);
// console.log(document.body.children.list);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);

// const list = document.getElementById("list");
// console.log(list);

// const listItems = list.getElementsByClassName("list-item");
// console.log(listItems);

// const listItems2 = document.getElementsByClassName("list-item");
// console.log(listItems2);

// const list2 = document.getElementsByTagName("ul");
// console.log(list2);

// const div = document.getElementsByTagName("div");
// console.log(div);

// const list = document.querySelector(".list1");
// console.log(list);

// const listItem = document.querySelector(".list1 > li");
// console.log(listItem);

// const listItems = [...document.querySelectorAll(".list1 > li")];
// console.log(listItems);

// document.write(`${listItem}`);

// console.log(listItem.innerHTML);
// console.log(listItem.innerText);
// console.log(listItem.textContent);

// listItem.innerHTML = "<strong>That</strong>";
// console.log(listItem.innerText);
// listItem.innerText += "<b>Text</b>";
// listItem.innerHTML += "<strong>That</strong>";
// listItem.textContent = "new Text";

// console.log(list.textContent);

// console.log(list.outerHTML);
// console.log(list.innerHTML);

// list.outerHTML = "";

// console.log(list.style);
// list.style.color = "green";
// list.style.cssText = "color: green; font-size: 30px";
// list.id = "list-1";

// console.log(list.style);
// console.log(window.getComputedStyle(list));

// TASK 1

// const listById = document.getElementById("list");
// console.log(listById);

// const listByClass = document.getElementsByClassName("list-item");
// console.log(listByClass);

// const listByTag = document.getElementsByTagName("li");
// console.log(listByTag);

// const listBySelector = document.querySelector("li:nth-child(3)");
// console.log(listBySelector);

// const listBySelectorAll = document.querySelectorAll("li");
// console.log(listBySelectorAll);

// TASK 2
// const list = document.querySelector(".list");
// console.log(list);

// console.log(list.classList);
// console.log(list.className);

// list.classList.add("super");
// console.log(list.classList);
// console.log(list.className);

// list.className += " puper";
// console.log(list.classList);
// console.log(list.className);
// const getElClassRem = document.querySelector(".list-item.remove");
// console.log(getElClassRem);
// getElClassRem.remove();

// const getElClassBig = document.querySelector(".list-item.bigger");
// console.log(getElClassBig);
// getElClassBig.classList.remove("bigger");
// getElClassBig.classList.add("active");
// second var
// getElClassBig.className = getElClassBig.className.replace("bigger", "active");

// const finishItems = [...document.querySelectorAll("li")];
// const finishItems = [...document.getElementsByTagName("li")];

// for (let i = 0; i < finishItems.length; i++) {
//     checkItem(finishItems[i]);
// }

// finishItems.forEach((item) => {
//     checkItem(item);
// });
// function checkItem(item) {
//     if (+item.textContent.split(":")[1] === 0) {
//         // item.textContent = item.textContent.split(":")[0] + " «закончился»";
//         item.textContent = item.textContent.replace("0", "«закончился»");
//         item.style.cssText = "color: red; font-weigth: 600";
//     }
// }
