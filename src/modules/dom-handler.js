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
    const timeSubmitted = createElement("p", "time-submitted");
    timeSubmitted.textContent = "5 mins ago";  // Generate actual date/time to-do was submitted
    todoPanelRight.appendChild(timeSubmitted);

    // bin image
    const bin = createElement("i", "fas fa-trash-alt");
    todoPanelRight.appendChild(bin);
    

    todo.appendChild(todoPanelLeft);
    todo.appendChild(todoPanelRight);
    todoContainer.appendChild(todo);
};

function removeTodo() {
    // remove to-do
};

function submitProject() {
    const projectsContainer = document.querySelector(".projects-container");
    const projectNameValue = document.getElementById("project-name-popup").value;
    const projectDiv = createElement("div", "project");
    projectDiv.textContent = projectNameValue;

    const bin = createElement("i", "fas fa-trash-alt");
    projectDiv.appendChild(bin);
    projectsContainer.appendChild(projectDiv);

    setElementToActive(addProjectBtn);
    setElementToActive(addProjectPopup);
};

function toggleAddTodoPopup() {
    const addTodoBtn = document.querySelector(".add-todo");

};

function setElementToActive(element) {
    return element.classList.toggle("active");
}
export {createElement, changeTextContent, createTodo, setElementToActive, submitProject};