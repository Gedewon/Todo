import TodoList from "./modules/TodoList.js";

const todoList = new TodoList([
  {
    description: "go shopping ",
    index: 1,
    completed: false,
  },
]);

describe("Status and task Change", () => {
  test("change status of task", () => {
    todoList.markAsDone(todoList.todoList[0].index);
    expect(todoList.getTasks()[0].completed).toBe(true);
  });
});
