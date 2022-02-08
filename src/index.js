import { createElement, createTodo, setElementToActive, submitProject, loadProject, clearPage} from "./modules/dom-handler";

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
    submitProject();
});

document.addEventListener("click", function (event) {
    // If user clicks on project 
    if (event.target.classList.contains("project")) {
        removeActiveFromAllProjects();
        setProjectToActive(event.target);
        clearPage();
        loadCorrectProject(event.target);

    // If user clicks submit to-do
    } else if (event.target.classList.contains("submit-todo")) {
        let todoText = document.querySelector(".todo-name").value;
        // add to project that has active class
        let activeProject = document.querySelector(".active");
        console.log(activeProject);
        projects.forEach(project => {
            if (project.projectName == activeProject.textContent) {
                project.projectTodos.push(todoText);
            };
        });
        createTodo(todoText);
        setElementToActive(addTodoBtn);
        setElementToActive(addTodoPopup);
        console.log(projects[0].projectTodos);

    // If user wants to remove a todo
    } else if (event.target.classList.contains("fa-trash")) {
        // loop through active project's todos until project name matches active project textcontent
        let activeProject = document.querySelector(".active");
        projects.forEach(project => {
            if (project.projectName == activeProject.textContent) {
                project.projectTodos.forEach(todo => {
                    if (todo == event.target.parentNode.parentNode.querySelector("p").textContent) {
                        let index = project.projectTodos.indexOf(todo);
                        if (index > -1) {
                            project.projectTodos.splice(index, 1);
                        }
                        event.target.parentNode.parentNode.remove()
                    }
                })
            }
        })
        console.log(event.target.parentNode.parentNode.querySelector("p").textContent)
    }
});

function loadCorrectProject(eventTarget) {
    projects.forEach(project => {
        if (project.projectName == eventTarget.textContent) {
            loadProject(project);
        };
    });
}

function setProjectToActive(projectEventTarget) {
    if (projectEventTarget.classList.contains("active")) {
        return;
    } else {
        projectEventTarget.classList.toggle("active");
    };
};

function removeActiveFromAllProjects() {
    const projectsDivs = document.querySelectorAll(".project");
    for (let i = 0; i < projectsDivs.length; i++) {
        projectsDivs[i].classList.remove("active");
    };
};

function createProject() {
    return {
        projectName: "",
        projectDescription: "",
        projectTodos: [],
    };
};