import { createTodo, setElementToActive } from "./modules/dom-handler";

console.log("henlo world");

createTodo("do laundry");

createTodo("watch tv");

createTodo("watch tv");
const addProjectBtn = document.querySelector(".add-project");
const addProjectPopup = document.querySelector(".add-project-popup");

const cancelProjectPopup = document.querySelector(".cancel-project");

addProjectBtn.addEventListener("click", () => {
    setElementToActive(addProjectBtn);
    setElementToActive(addProjectPopup);

});

cancelProjectPopup.addEventListener("click", () => {
    setElementToActive(addProjectPopup);
    setElementToActive(addProjectBtn);
})