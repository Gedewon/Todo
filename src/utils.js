export class Task {
  constructor(description, index, completed = false) {
    this.description = description;
    this.index = index;
    this.completed = completed;
  }
}

export class TodoList {
  constructor(todoList = []) {
    this.todoList = todoList;
  }
  getTasks() {
    return this.todoList;
  }
  addTask(description, index) {
    const newTask = new Task(description, index);
    this.todoList.push(newTask);
  }
  getIndex() {
    return this.todoList.length;
  }
}
