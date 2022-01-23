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
const projects = document.querySelectorAll(".project");

addProjectBtn.addEventListener("click", () => {
    setElementToActive(addProjectBtn);
    setElementToActive(addProjectPopup);
});

cancelProjectPopup.addEventListener("click", () => {
    setElementToActive(addProjectPopup);
    setElementToActive(addProjectBtn);
});

// submitProjectBtn.addEventListener("click", submitProjectName);
submitProjectBtn.addEventListener("click", clearPage);


// projects.forEach(project => project.addEventListener("click", loadProjectTodos))

function submitProjectName() {
    const projectNameValue = document.getElementById("project-name-popup").value;
    const projectDiv = createElement("div", "project");
    projectDiv.textContent = projectNameValue;

    const bin = createElement("i", "fas fa-trash-alt");
    projectDiv.appendChild(bin);
    projectsContainer.appendChild(projectDiv);

    setElementToActive(addProjectBtn);
    setElementToActive(addProjectPopup);
};

function clearPage() {
    const projectInfoDiv = document.querySelector(".project-info");
    projectInfoDiv.children[0].remove();
};

function createProject() {
    return {
        projectName: "",
        projectDescription: "",
        projectTodos: {todo: ""}
    };
};

// Change new project popup to require project description. Add title and desc to an object's keys. 
// When user clicks on project in side bar, generate said project's info from an object. 
// Maybe create new module called projects.js for viewing the selected project.