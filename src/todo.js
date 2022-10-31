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