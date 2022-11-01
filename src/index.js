require('./style.css');
import { toggleNewProjectButton, appendNewProject, selectProject, deleteProject } from './new-project';
import { toggleStatus, toggleNewTodoButton, displayPriorityRange } from './todo';

console.log('valid');

toggleNewProjectButton();
appendNewProject();
selectProject();
deleteProject();

toggleNewTodoButton();
displayPriorityRange();
toggleStatus();
