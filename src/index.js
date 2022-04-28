import './style.css';
import TodoList from '../modules/TodoList.js';
import { init } from '../modules/util.js';

const taskInput = document.querySelector('#input-list');

const todoList = new TodoList();

window.onload = init(todoList);

taskInput.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    todoList.addTask(e.target.value, todoList.getIndex());
    init(todoList);
  }
});
