function createElement(elementName, className) {
    const element = document.createElement(elementName);
    element.classList = className;
    return element;
};

function changeTextContent(element, string) {
    element.textContent = string;
};

function appendElement(parentElement, childElement) {
    return parentElement.appendChild(childElement);
};

function createTodo(todoName) {
    const todo = createElement("div", "todo");
    const todoPanelLeft = createElement("div", "task-panel-left");
    // create:
    // <i class="far fa-circle"></i>
    // <p>First to-do</p>
    // and append elements to their respective parents
};


export {createElement, changeTextContent, appendElement, createTodo};