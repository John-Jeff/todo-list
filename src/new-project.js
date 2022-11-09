import { projectList } from '.';

export function toggleNewProjectButton() {
    const newProject = document.querySelector('#new-project');
    const newProjectButton = document.querySelector('#new-project-button');
    const newProjectForm = document.querySelector('.new-project-form');
    const cancelButton = document.querySelector('#cancel-project');
    const newProjectInput = document.querySelector('#new-project-input');

    newProject.addEventListener('click', (e) => {
        if (e.target === newProjectButton || e.target === cancelButton) {
            newProjectForm.classList.toggle('hidden');
        }

        if (!newProjectForm.classList.contains('hidden')) {
            newProject.style.background = 'var(--glass)';
            newProjectInput.focus();
        } else {
            newProject.style.background = 'none';
        }
    });
}

function addProject(name) {
    projectList[name] = {};
}

export function createNewProject(name) {
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
}

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
            }

            // Add new project to project list
            addProject(newProjectInput.value);
            // Appendelements back to project list with new project
            for (let project in projectList) {
                projectListDOM.append(createNewProject(project));
            }

            // Clear input field on new project input
            newProjectInput.value = '';
            console.log(projectList);
        }
    });
}

export function deleteProject() {
    const projectListDOM = document.querySelector('#project-list');

    projectListDOM.addEventListener('click', (e) => {
        if (e.target !== this) {
            if (e.target.classList.contains('delete-project')) {
                const valid = confirm('Are you sure you want to delete?');
                if (valid) {
                    projectListDOM.removeChild(e.target.parentElement);
                    delete projectList[e.target.previousElementSibling.textContent];
                    // console.log(e.target.parentElement);
                }
            }
        }
    });
}
