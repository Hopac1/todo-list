const todoContainer = document.querySelector(".todos-container");


function createElement(elementName, className) {
    const element = document.createElement(elementName);
    element.classList = className;
    return element;
};

function changeTextContent(element, string) {
    element.textContent = string;
};

function createTodo(todoText) {
    const todo = createElement("div", "todo");
    const todoPanelLeft = createElement("div", "todo-panel-left");
    const todoPanelRight = createElement("div", "todo-panel-right");

    // circle image
    const circle = createElement("i", "far fa-circle");
    todoPanelLeft.appendChild(circle);
    
    // to-do text
    const pTag = createElement("p", "todo-text");
    pTag.textContent = todoText;
    todoPanelLeft.appendChild(pTag);

    // time to-do was submitted
    const todoDate = createElement("input", "todo-date");
    todoDate.type = "date";
    // todoDate = "date";

    todoPanelRight.appendChild(todoDate);

    // bin image
    const bin = createElement("i", "fas fa-trash");
    todoPanelRight.appendChild(bin);
    

    todo.appendChild(todoPanelLeft);
    todo.appendChild(todoPanelRight);
    todoContainer.appendChild(todo);
};

function submitProject() {
    const projectsContainer = document.querySelector(".projects-container");
    const projectNameValue = document.getElementById("project-name-popup").value;
    
    const projectDiv = createElement("div", "project");
    projectDiv.textContent = projectNameValue;
    
    const bin = createElement("i", "fas fa-trash-alt");
    projectDiv.appendChild(bin);
    projectsContainer.appendChild(projectDiv);
    
    const addProjectBtn = document.querySelector(".add-project");
    const addProjectPopup = document.querySelector(".add-project-popup");
    setElementToActive(addProjectBtn);
    setElementToActive(addProjectPopup);
};

function setElementToActive(element) {
    return element.classList.toggle("active");
};

function loadProject(project) {
    const projectInfo = document.querySelector(".project-info");

    // Project description
    const projectDescriptionContainer = createElement("div", "project-info-description");

    const descriptionText = createElement("p", "description-text");
    descriptionText.textContent = project.projectDescription;
    projectDescriptionContainer.appendChild(descriptionText);

    // Prepend to project-info
    projectInfo.prepend(projectDescriptionContainer);

    // Project title
    const projectTitleContainer = createElement("div", "project-info-title");
    const projectTitle = createElement("h2", "title-text");
    projectTitle.textContent = project.projectName;
    projectTitleContainer.appendChild(projectTitle);

    // Prepend to project-info
    projectInfo.prepend(projectTitleContainer);


    if (project.projectTodos) {
        project.projectTodos.forEach(todo => {
            console.log(todo);
            createTodo(todo);
        })
        ;
    } else {return};
};

function clearPage() {
   let projectTitleContainer = document.querySelector(".project-info-title");
   let projectDescriptionContainer = document.querySelector(".project-info-description");

   if (projectTitleContainer && projectDescriptionContainer) {
       projectTitleContainer.remove();
       projectDescriptionContainer.remove();
       todoContainer.textContent = "";
   } else {return};
};
export {createElement, changeTextContent, createTodo, setElementToActive, submitProject, loadProject, clearPage};