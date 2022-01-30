import { createElement, createTodo, setElementToActive, submitProject} from "./modules/dom-handler";

console.log("henlo world");
//store all projects in a global list/object
let projects = [];

const defaultProject = createProject();
defaultProject.projectName = "Default Project";
defaultProject.projectDescription = "This is a description for a project";
defaultProject.projectTodos += createTodo("do laundry");
projects.push(defaultProject);

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
    let newProject = createProject();
    newProject.projectName = document.getElementById("project-name-popup").value;
    newProject.projectDescription = document.getElementById("project-description-popup").value;
    projects.push(newProject);
    consoleLogProjects();

    let noSpaces = newProject.projectName.replace(/\s+/g, '');
    console.log(noSpaces); 
    
    // storeInfo(project);
    // STORE SUBMITTED INFO, display on page when project is clicked
    submitProject();
});

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("project")) {
        // setElementToActive(event.target);
        event.target.classList.toggle("active");
        // load the project info for whatever div with project class has active
        
            // get textcontent of clicked div
            let divTextContent = event.target.textContent;
            console.log("div text content:" + divTextContent)
        
            // loop through each projectName in projects list until it matches textcontent of clicked div
        
            // load matching element's projectName, Description and Todos to page after clearing page of current todos
    };
});

function clearPage() {
    const projectInfoDiv = document.querySelector(".todos-container");
    while (projectInfoDiv.firstChild) {
        projectInfoDiv.removeChild(projectInfoDiv.lastChild);
    }
};

function consoleLogProjects() {
    projects.forEach(element => console.log(element.projectName));
};

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