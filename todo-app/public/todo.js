"use strict";
/***** Todo List App using TypeScript *****/
let ulElement = document.getElementById("list");
let userInput = document.getElementById("todo-input");
let addButton = document.getElementById("add-btn");
let updateButton = document.getElementById("update-btn");
let cancelButton = document.getElementById("cancel-btn");
let hiddenSection = document.getElementById("hidden-section");
let todoData = [];
let isEdit = false;
let editItemKey = null;
hiddenSection.style.display = "none";
// Note: Function to delete todo item...!
const deleteTodoItem = (key) => {
    console.log("Key: ", key);
    let todoClone = [...todoData];
    todoClone.splice(key, 1);
    todoData = todoClone;
    renderTodoItems();
};
// Note: Function to update todo item...!
const updateTodoItem = () => {
    const newValue = userInput.value.trim();
    let todoClone = [...todoData];
    todoClone.splice(Number(editItemKey), 1, newValue);
    todoData = todoClone;
    userInput.value = "";
    renderTodoItems();
    hiddenSection.style.display = "none";
    addButton.style.display = "block";
};
// Note: Function to edit todo item...!
const editTodoItem = (key) => {
    console.log("Key: ", key);
    let todoClone = [...todoData];
    userInput.value = todoClone[key];
    editItemKey = key;
    addButton.style.display = "none";
    hiddenSection.style.display = "block";
};
// Note: Function to render todo items...!
const renderTodoItems = () => {
    ulElement.innerHTML = ""; // Clear the list before rendering new items...!
    todoData === null || todoData === void 0 ? void 0 : todoData.forEach((item, index) => {
        // console.log("Array item: ", item);
        const liElement = document.createElement("li");
        liElement.innerHTML = item;
        liElement.setAttribute("id", index === null || index === void 0 ? void 0 : index.toString());
        // Note: Creating a delete button...!
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.setAttribute("onclick", `deleteTodoItem(${index})`);
        // Note: Creating an edit button...!
        const editButton = document.createElement("button");
        editButton.innerHTML = "Edit";
        editButton.setAttribute("onclick", `editTodoItem(${index})`);
        liElement.appendChild(deleteButton);
        liElement.appendChild(editButton);
        ulElement.appendChild(liElement);
    });
};
// Note: Function to add todo item...!
const addTodoItem = () => {
    const todoValue = userInput.value.trim();
    // Note: Validator...!
    if (todoValue.trim().length < 1) {
        alert('Todo input is required!');
        return;
    }
    ;
    // Note: Handle duplication...!
    if (todoData.includes(todoValue)) {
        alert(todoValue + " already exists in the list");
        return;
    }
    ;
    let todoClone = [...todoData];
    todoClone.push(todoValue);
    todoData = todoClone;
    console.log('Todo List: ', todoData);
    userInput.value = "";
    // Note: Calling the render list function to update the UI...!
    renderTodoItems();
};
// Note: Function to cancel update item...!
const cancelUpdateItem = () => {
    userInput.value = "";
    hiddenSection.style.display = "none";
    addButton.style.display = "block";
};
// Note: Add item click listener...!
addButton.addEventListener("click", addTodoItem);
updateButton.addEventListener("click", updateTodoItem);
cancelButton.addEventListener("click", cancelUpdateItem);
