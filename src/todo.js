import format from "date-fns/format";
import { projectList } from ".";

class Todos {
    constructor(obj) {
        this.name = obj.name;
        this.description = obj.description;
        this.dueDate = obj.dueDate;
        this.priority = obj.priority;
        // this.completed = '';
    };
};

const levels = {
    0: {
        text: 'low',
        color: 'var(--green)',
    },
    1: {
        text: 'medium',
        color: 'var(--yellow)',
    },
    2: {
        text: 'high',
        color: 'var(--red)',
    },
};

export function createTodo() {
    const todoValues = {};
    const todoForm = document.querySelector('.todo-form');
    const formSubmit = document.querySelector('.todo-form-submit');

    formSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        const formData = new FormData(todoForm);

        for (const [key, value] of formData) {
            if (value === '') {
                alert('please fill out missing fields');
                return;
            };
        };
        for (let [key, value] of formData.entries()) {
            if (key === 'dueDate') {
                let [y, m, d] = value.split('-');
                value = format(new Date(y, (m - 1), d), 'PP');
            };
            todoValues[key] = value;
        };
        // return new Todos(todoValues);
        const newTodo = new Todos(todoValues);
        addProjectTodo(newTodo.name, newTodo);
        // todoListDOM.append(createTodoElement(newTodo));
    });
};

export function addProjectTodo(todoName, todo) {
    const projHeader = document.querySelector('.project-header');
    const projName = projHeader.children[0].textContent;
    const todoList = document.querySelector('.todo-list');

    projectList[projName][todoName] = todo;

    console.log(projectList)
    console.log(projName)

    refreshTodoList();

    Object.entries(projectList[projName]).forEach(obj => {
        todoList.append(createTodoElement(obj[1]));
    });
};

export function createTodoElement(todos) {
    const todo = document.createElement('li');
    todo.classList.add('todo');

    const div = document.createElement('div');
    div.classList.add('todo-status');

    const h3 = document.createElement('h3');
    h3.textContent = todos.name;
    h3.classList.add('todo-name');

    const h4 = document.createElement('h4');
    h4.textContent = todos.dueDate;
    h4.classList.add('todo-date');

    const p = document.createElement('p');
    p.textContent = todos.description;
    p.classList.add('todo-desc');

    todo.style.borderTopColor = levels[todos.priority].color;

    // const deleteButton = document.createElement('div');
    // deleteButton.classList.add('delete-todo');

    todo.append(div)
    todo.append(h3);
    todo.append(h4);
    todo.append(p);

    return todo;
};

export function refreshTodoList() {
    const todoListDOM = document.querySelector('.todo-list');
    while (todoListDOM.firstChild) {
        todoListDOM.removeChild(todoListDOM.firstChild);
    };
};

export function toggleStatus() {
    const todoList = document.querySelector('.todo-list');

    todoList.addEventListener('click', (e) => {
        if (e.target.classList.contains('todo')) {
            e.target.children[0].classList.toggle('completed');
        };
    });
};

export function toggleNewTodoButton() {
    const addTodoButton = document.querySelector('.add-todo');
    const nameInput = document.querySelector('#name');
    const todoForm = document.querySelector('.todo-form');

    addTodoButton.addEventListener('click', (e) => {
        todoForm.classList.toggle('hidden');

        if (!todoForm.classList.contains('hidden')) {
            addTodoButton.textContent = 'cancel';
            addTodoButton.style.background = 'var(--red)';
            nameInput.focus();
        } else {
            addTodoButton.innerHTML = '&#x2b; add todo';
            addTodoButton.style.background = 'none';
        };
    });
};

export function displayPriorityRange() {

    const range = document.querySelector('#priority');
    const rangeValue = document.querySelector('.range-value');

    range.addEventListener('input', (e) => {
        console.log(range.value);
        rangeValue.textContent = levels[range.value].text;
        rangeValue.style.background = levels[range.value].color;
    });
};