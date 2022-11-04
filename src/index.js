require('./style.css');
import { toggleNewProjectButton, appendNewProject, selectProject, deleteProject } from './new-project';
import { toggleStatus, toggleNewTodoButton, displayPriorityRange, createTodo } from './todo';
import { displayProject } from './projects';

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
selectProject();
deleteProject();

toggleNewTodoButton();
displayPriorityRange();
createTodo();

displayProject(projectList['Project One']);
toggleStatus();



// projectList = {
//     'Project One': {
//         Todos: {
//             name: '',
//             description: '',
//             dueDate: '',
//             priority: '',
//         }
//     },
// }