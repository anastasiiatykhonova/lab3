// const body = document.body;
// const list = document.getElementById("list");
// const listItems = [...document.querySelectorAll(".list-item")];

// function itemClickHandler(e) {
//     console.log("element click", e.target);
// }

// listItems.forEach((el) => {
//     el.addEventListener("click", itemClickHandler);
// });

// list.addEventListener("click", function itemClickHandler(e) {
//     if (e.target.classList.contains("list-item")) {
//         console.log("list click", e.target);
//     }
// });

// body.addEventListener("click", function itemClickHandler(e) {
//     console.log("body click", e.target);
// });

// list.addEventListener(
//     "click",
//     function itemClickHandler(e) {
//         if (e.target.classList.contains("list-item")) {
//             console.log("list click", e.target);
//         }
//     },
//     true
// );

// body.addEventListener(
//     "click",
//     function itemClickHandler(e) {
//         // e.stopPropagation();
//         console.log("body click", e.target);
//     },
//     true
// );

// document.querySelector("a").addEventListener("click", function (e) {
//     e.preventDefault();
//     console.log(e.defaultPrevented);
// });

// // create custom events

// const catFound = new CustomEvent("animalfound", {
//     detail: {
//         name: "cat",
//     },
// });
// const dogFound = new CustomEvent("animalfound", {
//     detail: {
//         name: "dog",
//     },
// });

// console.log(catFound);
// console.log(dogFound);

// // add an appropriate event listener
// document.addEventListener("animalfound", (e) => console.log(e.detail.name));

// // dispatch the events
// document.dispatchEvent(catFound);
// document.dispatchEvent(dogFound);

// TASK 1

// const list = document.querySelector("#menu");

// const listClickHandler = (e) => {
//     e.preventDefault();

//     const activeItem = document.querySelector(".active");
//     const item = e.target.parentElement;

//     if (activeItem) {
//         activeItem.classList.remove("active");
//     }

//     item.className = "active";
// };

// list.addEventListener("click", listClickHandler);

// TASK 2

const list = document.querySelector("#messages");

list.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.closest(".close-btn")) {
        e.target.closest(".pane").remove();
    }
});
