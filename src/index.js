import { createElement, createTodo, setElementToActive } from "./modules/dom-handler";

console.log("henlo world");

createTodo("do laundry");

createTodo("watch tv");

createTodo("watch tv");
const projectsContainer = document.querySelector(".projects-container");
const addProjectBtn = document.querySelector(".add-project");
const addProjectPopup = document.querySelector(".add-project-popup");
const submitProjectBtn = document.querySelector(".submit-project");

const cancelProjectPopup = document.querySelector(".cancel-project");

addProjectBtn.addEventListener("click", () => {
    setElementToActive(addProjectBtn);
    setElementToActive(addProjectPopup);

});

cancelProjectPopup.addEventListener("click", () => {
    setElementToActive(addProjectPopup);
    setElementToActive(addProjectBtn);
});

submitProjectBtn.addEventListener("click", submitProjectName);


function submitProjectName() {
    const projectNameValue = document.getElementById("project-name-popup").value;
    const projectDiv = createElement("div", "project");
    projectDiv.textContent = projectNameValue;

    const bin = createElement("i", "fas fa-trash-alt");
    projectDiv.appendChild(bin);
    projectsContainer.appendChild(projectDiv);

    setElementToActive(addProjectBtn);
    setElementToActive(addProjectPopup);
}