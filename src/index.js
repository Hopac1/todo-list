import { createElement, createTodo, setElementToActive, submitProject} from "./modules/dom-handler";

console.log("hello world");
//store all projects in a global list/object
let projects = [];

// const defaultProject = createProject();
// defaultProject.projectName = "Default Project";
// defaultProject.projectDescription = "This is a description for a project";
// defaultProject.projectTodos += createTodo("do laundry");
// projects.push(defaultProject);

// defaultProject.projectTodos += createTodo("watch tv");

// defaultProject.projectTodos += createTodo("finish homework");

const addProjectBtn = document.querySelector(".add-project");
const addProjectPopup = document.querySelector(".add-project-popup");
const submitProjectBtn = document.querySelector(".submit-project");

const cancelProjectPopup = document.querySelector(".cancel-project");
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
    projects.forEach(element => console.log(element.projectName));
    
    // storeInfo(project);
    // STORE SUBMITTED INFO, display on page when project is clicked
    submitProject();
});

document.addEventListener("click", function (event) {
    // If user clicks on project 
    if (event.target.classList.contains("project")) {
        setProjectToActive(event.target);
        // if (event.target.classList.contains("active")) {
        //     console.log("return statement here");
        // } else {
        //     event.target.classList.toggle("active");
        //     // load the project info for whatever div with project class has active
            
        //         // get text content of clicked div
        //         let divTextContent = event.target.textContent;
            
        //         // loop through each projectName in projects list until it matches text content of clicked div
        //         projects.forEach(project => {
        //             if (project.projectName == divTextContent) {
        //                 console.log(`${project.projectName} (projects list) is the same as ${divTextContent} (clicked div)`);
        //                 // load matching element's projectName, Description and To-dos to page after clearing page of current to-dos
                        
        //             };
        //         });
        // }
    // If user clicks submit to-do
    } else if (event.target.classList.contains("submit-todo")) {
        let todoText = document.querySelector(".todo-name").value;
        console.log(todoText);
        // add to project that has active class
        createTodo(todoText);
        setElementToActive(addTodoBtn);
        setElementToActive(addTodoPopup);
    }
});

function setProjectToActive(projectEventTarget) {
    if (projectEventTarget.classList.contains("active")) {
        console.log("return statement here");
    } else {
        projectEventTarget.classList.toggle("active");
        // load the project info for whatever div with project class has active
        
            // get text content of clicked div
            let divTextContent = projectEventTarget.textContent;
        
            // loop through each projectName in projects list until it matches text content of clicked div
            projects.forEach(project => {
                if (project.projectName == divTextContent) {
                    console.log(`${project.projectName} (projects list) is the same as ${divTextContent} (clicked div)`);
                    // load matching element's projectName, Description and To-dos to page after clearing page of current to-dos
                    
                };
            });
    }
}

function clearPage() {
    const projectInfoDiv = document.querySelector(".todos-container");
    while (projectInfoDiv.firstChild) {
        projectInfoDiv.removeChild(projectInfoDiv.lastChild);
    };
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