import { projectList } from ".";
import { createNewProject } from "./new-project";
import { createTodoElement, refreshTodoList } from "./todo";

export function displayProjectList(projList) {
    const projectListDOM = document.querySelector('#project-list');

    Object.keys(projList).forEach(projName => {
        projectListDOM.append(createNewProject(projName));
    });
};

export function displayProjectContent(title, project) {
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
                displayProjectContent(e.target.children[0].innerText,
                    projectList[e.target.children[0].innerText]);
            };
        };
    });
};