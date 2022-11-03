require('./style.css');
import { toggleNewProjectButton, appendNewProject, selectProject, deleteProject } from './new-project';
import { toggleStatus, toggleNewTodoButton, displayPriorityRange, createTodo } from './todo';

console.log('valid');

toggleNewProjectButton();
appendNewProject();
selectProject();
deleteProject();

toggleNewTodoButton();
displayPriorityRange();
toggleStatus();
createTodo();
