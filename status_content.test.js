import TodoList from "./modules/TodoList.js";

const todoList = new TodoList([
  {
    description: "go shopping ",
    index: 1,
    completed: false,
  },
]);

describe("Status and task Change", () => {
  test("change item completed status ", () => {
    todoList.markAsDone(todoList.todoList[0].index);
    expect(todoList.getTasks()[0].completed).toBe(true);
  });

  test("should edit task description ", () => {
    todoList.edit("read book", 1);
    expect(localStorage.setItem).toHaveBeenLastCalledWith(
      "List",
      JSON.stringify([
        {
          description: "read book",
          index: 1,
          completed: true,
        },
      ])
    );
  });
});
