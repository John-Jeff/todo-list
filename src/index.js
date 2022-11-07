require('./style.css');
import { toggleNewProjectButton, appendNewProject, deleteProject } from './new-project';
import { toggleStatus, toggleNewTodoButton, displayPriorityRange, createTodo } from './todo';
import { selectProject, displayProjectList } from './projects';

console.log('valid');

export const projectList = {
    // 'Project One': {
    //     Uno: {
    //         name: 'Uno',
    //         description: 'meowmeowmeow',
    //         dueDate: 'Dec 12, 2022',
    //         priority: 1
    //     },
    //     Duo: {
    //         name: 'Duo',
    //         description: 'woofwoofwoof',
    //         dueDate: 'Dec 20, 2022',
    //         priority: 2
    //     },
    // },
    // 'Project Two': {
    //     Game: {
    //         name: 'Game',
    //         description: 'eyoeyoeyo',
    //         dueDate: 'Dec 1, 2022',
    //         priority: 0
    //     },
    // },
};

displayProjectList(projectList);

toggleNewProjectButton();
appendNewProject();
deleteProject();

toggleNewTodoButton();
displayPriorityRange();
createTodo();

selectProject();
toggleStatus();