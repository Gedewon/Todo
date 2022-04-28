const root = document.querySelector('.todos-list');
const clearButton = document.querySelector('button');
const refreshButton = document.querySelector('.refresh');

export function render(todoList) {
  let screenElement = '';
  todoList.getTasks().forEach((list) => {
    screenElement += `<li  id=${list.index}><input type="checkbox" class="check-box" id=${list.index} name="" ><input class="each-list" id=${list.index} type="text" contenteditable="true" value=${list.description}></input><span class="move-delete" id=${list.index}>&#x02297;
      </span></li>`;
  });
  return screenElement;
}

export function init(todoList) {
  root.innerHTML = render(todoList);
  document.querySelectorAll('.move-delete').forEach((el) => {
    el.addEventListener('click', (e) => {
      todoList.remove(e.target.id);
    });
  });
  document.querySelectorAll('.each-list').forEach((el) => {
    el.addEventListener('change', (e) => {
      todoList.edit(e.target.value, e.target.id);
    });
  });
  document.querySelectorAll('.check-box').forEach((el) => {
    el.addEventListener('change', () => {
      const checkboxElement = Array.from(
        document.querySelectorAll('.each-list  '),
      ).filter((inputElement) => inputElement.id === el.id)[0];
      if (el.checked) {
        checkboxElement.classList.add('strik-through');
        todoList.markAsDone(el.id);
      } else {
        checkboxElement.classList.remove('strik-through');
        todoList.markAsDone(el.id);
      }
    });
  });
  clearButton.addEventListener('click', () => {
    todoList.clearList();
  });
  refreshButton.addEventListener('click', () => {
    window.location.reload();
  });
}
