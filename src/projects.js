import { projectList } from ".";
import { createTodoElement, refreshTodoList, toggleStatus } from "./todo";

export function displayProject(title, project) {
    const projectTitle = document.querySelector('.main-project-title');
    projectTitle.textContent = title;

    const todoList = document.querySelector('.todo-list');

    Object.entries(project).forEach(obj => {
        todoList.append(createTodoElement(obj[1]));
    });
};

export function selectProject() {
    const projectListDOM = document.querySelector('#project-list');

    projectListDOM.addEventListener('click', (e) => {
        if (e.target != this) {
            if (!e.target.classList.contains('delete-project')) {
                console.log('meow');
                refreshTodoList();
                displayProject(e.target.children[0].innerText, projectList['Project One']);
            };
        };
    });
};