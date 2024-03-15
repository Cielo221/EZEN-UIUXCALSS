const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("form");
const todoList = document.querySelector("#todo-list");

const getLocal = () => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach((todo) => {
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;

    const completeButton = document.createElement("button");
    completeButton.innerText = "완료";

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "삭제";

    newTodo.append(completeButton, deleteButton);
    todoList.appendChild(newTodo);
  });
};

document.addEventListener("DOMContentLoaded", getLocal);

const saveToLocal = (todo) => {
  let todos = [];
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};

const addTodo = (e) => {
  e.preventDefault();
  if (todoInput.value !== "") {
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;

    const completeButton = document.createElement("button");
    completeButton.innerText = "완료";

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "삭제";

    newTodo.append(completeButton, deleteButton);
    todoList.appendChild(newTodo);

    saveToLocal(todoInput.value);
    todoInput.value = "";
  }
};

addButton.addEventListener("submit", addTodo);
