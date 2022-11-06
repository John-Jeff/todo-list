require('./style.css');
import { toggleNewProjectButton, appendNewProject, deleteProject } from './new-project';
import { toggleStatus, toggleNewTodoButton, displayPriorityRange, createTodo } from './todo';
import { selectProject, displayProject } from './projects';

console.log('valid');

export const projectList = {
    'Project One': {
        Todos: {
            name: 'Uno',
            description: 'meowmeowmeow',
            dueDate: 'Dec 12, 2022',
            priority: 1
        },
    },
};

toggleNewProjectButton();
appendNewProject();
deleteProject();

toggleNewTodoButton();
displayPriorityRange();
createTodo();

// displayProject(projectList['Project One']);
selectProject();
toggleStatus();