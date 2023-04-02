import { createApp } from "vue";
import { createStore } from "vuex";

export default createStore({
    state: {
        selectedProject: 1,
        todoList: [
            {
                id: 1,
                title: 'Homework',
                todos: [
                    {
                        id: 1,
                        title: 'Math 370',
                        description: 'Finish questions 1 - 20',
                        completed: false
                    },
                    {
                        id: 2,
                        title: 'EENG 300',
                        description: 'Study for exam, units 1 - 7',
                        completed: true
                    }
                ]
            },
            {
                id: 2,
                title: 'Test 2',
                todos: [
                    {
                        id: 1,
                        title: 'Test 2 Todo 1',
                        description: 'This is test 2 todo 1',
                        completed: false
                    },
                    {
                        id: 2,
                        title: 'Test 2 Todo 2',
                        description: 'This is test 2 todo 2',
                        completed: false
                    },
                    {
                        id: 3,
                        title: 'Test 2 Todo 3',
                        description: 'This is test 2 todo 3',
                        completed: true
                    }
                ]
            }
        ]
    },
    getters: {
        project(state) {
            return state.todoList.find(project => project.id == state.selectedProject);
        }
    },
    mutations: {
        SET_SELECTED_PROJECT(state, projectID) {
            state.selectedProject = projectID;
        },
        ADD_PROJECT(state, newProject) {
            state.todoList.push(newProject);
        },
        ADD_TODO(state, newTodo) {
            const project = state.todoList.find(project => project.id == state.selectedProject);
            project.todos.push(newTodo);
        },
        DELETE_TODO(state, todoID) {
            const project = state.todoList.find(project => project.id == state.selectedProject);
            project.todos = project.todos.filter(todo => todo.id != todoID);
        }
    }
})