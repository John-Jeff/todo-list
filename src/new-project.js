import { createTodo } from './todo';

const projectList = {};

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

function addProject(name) {
    projectList[name] = {};
}

function createNewProject(name) {
    const project = document.createElement('div');
    project.classList.add('project');

    const projectName = document.createElement('div');
    projectName.textContent = name;
    projectName.classList.add('project-title');
    project.append(projectName);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '&#x2715;';
    deleteButton.classList.add('delete-project');
    project.append(deleteButton);

    return project;
};

export function appendNewProject() {
    const newProjectInput = document.querySelector('#new-project-input');
    const createButton = document.querySelector('#create-project');
    const projectListDOM = document.querySelector('#project-list');

    createButton.addEventListener('click', (e) => {
        // newProjectInput.focus();
        if (newProjectInput.validity.valueMissing) {
            alert('Project must have a name.');
        } else {
            // Remove elements on project list
            while (projectListDOM.firstChild) {
                projectListDOM.removeChild(projectListDOM.firstChild);
            };

            // Add new project to project list
            addProject(newProjectInput.value);
            // Appendelements back to project list with new project
            for (let project in projectList) {
                projectListDOM.append(createNewProject(project));
            };
            
            // Clear input field on new project input
            newProjectInput.value = '';
            console.log(projectList);
        };
    });
};

export function deleteProject() {
    const projectListDOM = document.querySelector('#project-list');
    const project = document.querySelectorAll('.project');
    const deleteButton = document.querySelectorAll('.delete-project');

    deleteButton.forEach(button => {
        button.addEventListener('click', (e) => {
            projectListDOM.remove(button.parentElement);
            // console.log(button.parentElement);

        });
    });

    // for (let i = 0; i < deleteButton.length; i++) {
    //     deleteButton[i].addEventListener('click', (e) => {
    //         projectList.remove(deleteButton[i].parentElement);
    //     })
    // }
}