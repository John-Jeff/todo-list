require('./style.css');
import { toggleNewProjectButton, appendNewProject, selectProject, deleteProject } from './new-project';
import { toggleStatus } from './todo';

console.log('valid');

toggleNewProjectButton();
appendNewProject();
selectProject();
deleteProject();

toggleStatus();