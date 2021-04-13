console.log("index.js loaded");

const todoInput = document.getElementById("add-todo");
const list = document.getElementById("todo-list");

let todos = ["hi", "hello", "me"];

function renderTodos() {
  let child = "";
  todos.forEach((todo, i) => {
    child += `<div class="single-todo" draggable="true" tabindex="${i}">${todo}</div>`;
  });
  list.innerHTML = child;
}

renderTodos();

function addTodo() {
  const value = todoInput.value.trim();
  if (value.length == 0) return;
  todos = [value, ...todos];
  todoInput.value = "";
  renderTodos(todos);
}

document.addEventListener("keydown", (event) => {
  console.log("down", event);
});
document.addEventListener("keypress", (event) => {
  console.log("press", event);
});

document.addEventListener("keyup", (event) => {
  console.log("up", event);
  switch (event.key) {
    case "Escape":
      window.focus();
      if (document.activeElement) {
        document.activeElement.blur();
      }
      break;
    case "/":
      todoInput.focus();
      break;
    case "f":
      todoInput.focus();
      break;
    case "t":
      if (list.firstChild) {
        list.firstChild.focus();
        return;
      }
      list.focus();
      break;
    case "j":
      if (document.activeElement) {
        const elem = document.activeElement;
        if (elem.nextSibling) {
          elem.nextSibling.focus();
          // const now = elem.innerHTML;
          // const next = elem.nextSibling.innerHTML;
          // elem.innerHTML = next;
          // elem.nextSibling.innerHTML = now;
        }
      }
      break;
    case "k":
      if (document.activeElement) {
        const elem = document.activeElement;
        if (elem.previousSibling) {
          elem.previousSibling.focus();
          // const now = elem.innerHTML;
          // const next = elem.nextSibling.innerHTML;
          // elem.innerHTML = next;
          // elem.nextSibling.innerHTML = now;
        }
      }
      break;
    case "J":
      if (document.activeElement) {
        const elem = document.activeElement;
        if (elem.nextSibling) {
          const now = elem.innerHTML;
          const next = elem.nextSibling.innerHTML;
          elem.innerHTML = next;
          elem.nextSibling.innerHTML = now;
          elem.nextSibling.focus();
        }
      }
      break;
    case "K":
      if (document.activeElement) {
        const elem = document.activeElement;
        if (elem.previousSibling) {
          const now = elem.innerHTML;
          const next = elem.previousSibling.innerHTML;
          elem.innerHTML = next;
          elem.previousSibling.innerHTML = now;
          elem.previousSibling.focus();
        }
      }
      break;
    case "Enter":
      addTodo();
  }
});
