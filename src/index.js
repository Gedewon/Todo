import "./style.css";
import TodoList from "./utils.js";

const root = document.querySelector(".todos-list");
const taskInput = document.querySelector("#input-list");

const todoList = new TodoList();

function render() {
  let screenElement = "";
  todoList.getTasks().forEach((list) => {
    screenElement += `<li  id=${list.index}><input type="checkbox" class="check-box" id=${list.index} name="" ><input class="each-list" id=${list.index} type="text" contenteditable="true" value=${list.description}></input><span class="move-delete" id=${list.index}>&#x02297;
    </span></li>`;
  });
  return screenElement;
}

function init() {
  root.innerHTML = render();
  document.querySelectorAll(".move-delete").forEach((el) => {
    el.addEventListener("click", (e) => {
      todoList.remove(e.target.id);
    });
  });
  document.querySelectorAll(".each-list").forEach((el) => {
    el.addEventListener("change", (e) => {
      todoList.edit(e.target.value, e.target.id);
    });
  });
  document.querySelectorAll(".check-box").forEach((el) => {
    el.addEventListener("change", (e) => {
      let checkboxElement = Array.from(
        document.querySelectorAll(`.each-list  `)
      ).filter((inputElement) => inputElement.id == el.id)[0];
      el.checked
        ? checkboxElement.classList.add("strik-through")
        : checkboxElement.classList.remove("strik-through");
    });
  });
}

window.onload = init();

taskInput.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    todoList.addTask(e.target.value, todoList.getIndex());
    init();
  }
});
