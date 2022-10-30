import { createTodo } from './todo';

export function toggleNewProjectButton() {
    const newProject = document.querySelector('#new-project');
    const newProjectButton = document.querySelector('#new-project-button');
    const newProjectForm = document.querySelector('.new-project-form');
    const cancelButton = document.querySelector('#cancel-project');

    newProject.addEventListener('click', (e) => {
        if (e.target === newProjectButton || e.target === cancelButton) {
            newProjectForm.classList.toggle('hidden');
        };
    });
};

function createNewProject(name) {
    const project = document.createElement('div');
    project.textContent = name;
    project.classList.add('project');

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '&#x2715;';
    deleteButton.classList.add('delete-project');
    project.append(deleteButton);

    return project;
}

export function appendNewProject() {
    const newProjectInput = document.querySelector('#new-project-input');
    const createButton = document.querySelector('#create-project');
    const projectList = document.querySelector('#project-list');

    createButton.addEventListener('click', (e) => {
        // newProjectInput.focus();
        if (newProjectInput.validity.valueMissing) {
            alert('Project must have a name.');
        } else {
            projectList.append(createNewProject(newProjectInput.value));
            newProjectInput.value = '';
        };

    });
}