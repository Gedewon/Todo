import Task from './task.js';

export default class TodoList {
  constructor(todoList = []) {
    this.todoList = JSON.parse(localStorage.getItem('List')) || todoList;
  }

  getTasks() {
    return this.todoList;
  }

  addTask(description, index) {
    const newTask = new Task(description, index);
    this.todoList.push(newTask);
    localStorage.setItem('List', JSON.stringify(this.todoList));
  }

  getIndex() {
    return this.todoList.length + 1;
  }

  remove(index) {
    this.todoList.splice(index - 1, 1);
    this.shuffle();
    window.location.reload();
  }

  shuffle() {
    this.todoList.forEach((element, index) => {
      element.index = index + 1;
    });
    localStorage.setItem('List', JSON.stringify(this.todoList));
  }

  edit(value, index) {
    this.todoList[index - 1].description = value;
    localStorage.setItem('List', JSON.stringify(this.todoList));
  }

  markAsDone(index) {
    this.todoList[index - 1].completed = !this.todoList[index - 1].completed;
  }

  clearList() {
    this.todoList = this.todoList.filter((task) => task.completed === false);
    this.shuffle();
    window.location.reload();
  }
}
