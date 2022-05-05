import TodoList from "./modules/TodoList.js";
const todoList = new TodoList();

// beforeEach(() => {
//   // to fully reset the state between tests, clear the storage
//   localStorage.clear();
//   // and reset all mocks
//   jest.clearAllMocks();

//   // clearAllMocks will impact your other mocks too, so you can optionally reset individual mocks instead:
//   localStorage.setItem.mockClear();
// });

describe("Add task method", () => {
  test("add method should store in class field", () => {
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

describe("Delete task method", () => {
  test("Delete method should remove from  class field", () => {
    todoList.remove(1);

    expect(todoList.getTasks().length).toBe(0);
  });
  test("Delete method should remove from localStorage ", () => {
    // console.log(localStorage);
    expect(localStorage).toEqual({ List: "[]" });
  });
});
