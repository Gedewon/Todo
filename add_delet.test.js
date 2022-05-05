const TodoList = require("./modules/TodoList");
const todoList = new TodoList();
test("test add ", () => {
  //    arrange
  let task = {
    description: "Read you don't know js",
    index: 1,
  };

  todoList.addTask(...task);

  expect(todoList.getTasks()).toEqual({
    description: "Read you don't know js",
    index: 1,
    completed: false,
  });
});
