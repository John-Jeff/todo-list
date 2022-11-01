class Todos {
    constructor(name, description, dueDate, priority) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    };
};

const projects = {};

export function createTodo(title, name, desc, dueDate, prio) {
    projects[title] = new Todos(name, desc, dueDate, prio);
};

createTodo('Task One', 'Task One', 'This is the first task', '12/1/22', 3);
createTodo('Task Two', 'Task Two', 'This is the second task', '12/3/22', 2);

console.log(projects);

export function toggleStatus() {
    const todos = document.querySelectorAll('.todo');

    todos.forEach(todo => {
        todo.addEventListener('click', (e) => {
            todo.children[0].classList.toggle('completed');
        });
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
    const range = document.querySelector('#priority');
    const rangeValue = document.querySelector('.range-value');

    range.addEventListener('input', (e) => {
        console.log(range.value);
        rangeValue.textContent = levels[range.value].text;
        rangeValue.style.background = levels[range.value].color;
    });
};