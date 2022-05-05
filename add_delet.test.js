import TodoList from "./modules/TodoList.js";
const todoList = new TodoList();

describe("add method should store in class field", () => {
  test("test add ", () => {
    let task = [
      {
        description: "Read you don't know js",
        index: 1,
      },
    ];

    todoList.addTask(task[0].description, task[0].index);

    expect(todoList.getTasks()).toEqual([
      {
        description: "Read you don't know js",
        index: 1,
        completed: false,
      },
    ]);
  });
  test("add method should store to localstorage ", () => {
    expect(localStorage.length).not.toBe(0);
  });
});
