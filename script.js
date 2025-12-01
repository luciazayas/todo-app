const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');
const colorPicker = document.getElementById('colorPicker');
const title = document.querySelector('h1');
const root = document.documentElement;
const datePicker = document.getElementById('datePicker');
const modal = document.getElementById('calendarModal');
const calendarButton = document.getElementById('calendarButton');

let currentDate = getToday(); 

function getToday() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`; 
}

function formatDateForHuman(isoDate) {
  const d = new Date(isoDate);
  return d.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}


function getAllTodosObject() {
  const data = localStorage.getItem('todosByDate');
  return data ? JSON.parse(data) : {};
}

function setAllTodosObject(obj) {
  localStorage.setItem('todosByDate', JSON.stringify(obj));
}

function loadTodosByDate(date) {
  const all = getAllTodosObject();
  return all[date] || [];
}

function saveTodosByDate(date, todosArray) {
  const all = getAllTodosObject();
  all[date] = todosArray;
  setAllTodosObject(all);
}

function renderTodos(todos) {
  todosUL.innerHTML = ''; 

  todos.forEach(todo => {
    const li = document.createElement('li');
    li.textContent = todo.text;

    if (todo.completed) li.classList.add('completed');

    li.addEventListener('click', () => {
      li.classList.toggle('completed');
      updateLS();
    });

    li.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      li.remove();
      updateLS();
    });

    todosUL.appendChild(li);
  });
}


function updateLS() {
  const liElements = todosUL.querySelectorAll('li');
  const todosArray = [];

  liElements.forEach(li => {
    todosArray.push({
      text: li.innerText,
      completed: li.classList.contains('completed')
    });
  });

  saveTodosByDate(currentDate, todosArray);
}


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (text === '') return;

  const newTodo = { text, completed: false };
  const todos = loadTodosByDate(currentDate);
  todos.push(newTodo);
  saveTodosByDate(currentDate, todos);

  renderTodos(todos);
  input.value = '';
});


colorPicker.addEventListener('input', (e) => {
  const selectedColor = e.target.value;
  root.style.setProperty('--main-color', selectedColor);
  title.style.color = selectedColor;
});


calendarButton.addEventListener('click', () => {
  modal.style.display = 'flex';
  datePicker.value = currentDate; // preselecciona la fecha actual
});

window.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});

datePicker.addEventListener('change', (e) => {
  const selectedDate = e.target.value;
  currentDate = selectedDate;

  const todosOfThatDay = loadTodosByDate(selectedDate);
  renderTodos(todosOfThatDay);

  calendarButton.textContent = formatDateForHuman(selectedDate);

  modal.style.display = 'none';
});


window.addEventListener('DOMContentLoaded', () => {
  const todosToday = loadTodosByDate(currentDate);
  renderTodos(todosToday);
});
