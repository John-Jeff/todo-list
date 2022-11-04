import { createTodoElement } from "./todo";

export function displayProject(project) {
    const projectTitle = document.querySelector('.main-project-title');
    projectTitle.textContent = project.Todos.name;

    const todoList = document.querySelector('.todo-list');

    Object.entries(project).forEach(obj => {
        todoList.append(createTodoElement(obj[1]));
    });
};