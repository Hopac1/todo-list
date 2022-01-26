import { createElement, createTodo, setElementToActive, submitProject} from "./modules/dom-handler";

console.log("henlo world");
//store all projects in a global list/object
let projects = [];

const defaultProject = createProject();
defaultProject.projectName = "Default Project";
defaultProject.projectDescription = "This is a description for a project";
defaultProject.projectTodos += createTodo("do laundry");
projects += defaultProject;

defaultProject.projectTodos += createTodo("watch tv");

defaultProject.projectTodos += createTodo("finish homework");

// createTodo("do laundry");

// createTodo("watch tv");

// createTodo("watch tv");
const addProjectBtn = document.querySelector(".add-project");
const addProjectPopup = document.querySelector(".add-project-popup");
const submitProjectBtn = document.querySelector(".submit-project");

const cancelProjectPopup = document.querySelector(".cancel-project");
const projectsDivs = document.querySelectorAll(".project");
const addTodoBtn = document.querySelector(".add-todo");
const addTodoPopup = document.querySelector(".add-todo-popup");
const cancelTodoPopup = document.querySelector(".cancel-todo");

// Show to-do popup when user clicks on add to-do button
addTodoBtn.addEventListener("click", () => {
    // toggleAddTodoPopup();
    setElementToActive(addTodoBtn);
    setElementToActive(addTodoPopup);
});

addProjectBtn.addEventListener("click", () => {
    setElementToActive(addProjectBtn);
    setElementToActive(addProjectPopup);
});

cancelTodoPopup.addEventListener("click", () => {
    setElementToActive(addTodoBtn);
    setElementToActive(addTodoPopup);
});

cancelProjectPopup.addEventListener("click", () => {
    setElementToActive(addProjectPopup);
    setElementToActive(addProjectBtn);
});

// Add project to DOM under Projects header
submitProjectBtn.addEventListener("click", () => {
    let project = createProject();
    project.projectName = document.getElementById("project-name-popup").value;
    project.projectDescription = document.getElementById("project-description-popup").value;
    let noSpaces = project.projectName.replace(/\s+/g, '');
    console.log(noSpaces);
    // store project name without spaces in a variable and add to projects global list
    
    
    // storeInfo(project);
    // STORE SUBMITTED INFO, display on page when project is clicked
    submitProject();
});

// projectsDivs.forEach(project => project.addEventListener("click", () => {
//     clearPage();
//     loadProject(this);
// }));

// function clearPage() {
//     const projectInfoDiv = document.querySelector(".todos-container");
//     while (projectInfoDiv.firstChild) {
//         projectInfoDiv.removeChild(projectInfoDiv.lastChild);
//     }
// };

function createProject() {
    return {
        projectName: "",
        projectDescription: "",
        projectTodos: [],
    };
};

// function loadProject(projectClicked) {
//     const projectName = projectClicked.textContent;
//     const projectInfo = document.querySelector(".project-info");
//     projectInfo.textContent = `<div class="project-info-title">
//     <h2>Example Project</h2></div>

//     <div class="project-info-description">
//     <p>${projectClicked}</p></div><div class="todos-container"><hr></div>
//     `
// };

// Change new project popup to require project description. Add title and desc to an object's keys. 
// When user clicks on project in side bar, generate said project's info from an object. 
// Maybe create new module called projects.js for viewing the selected project.