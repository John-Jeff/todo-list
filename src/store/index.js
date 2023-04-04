import { createApp } from "vue";
import { createStore } from "vuex";

export default createStore({
    state: {
        selectedProject: 1,
        todoFormActive: false,
        projectFormActive: false,
        todoList: [
            {
                id: 1,
                title: 'Homework',
                todos: [
                    {
                        id: 1001,
                        title: 'Math 370',
                        description: 'Finish questions 1 - 20',
                        completed: false
                    },
                    {
                        id: 1002,
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
                        id: 2001,
                        title: 'Test 2 Todo 1',
                        description: 'This is test 2 todo 1',
                        completed: false
                    },
                    {
                        id: 2002,
                        title: 'Test 2 Todo 2',
                        description: 'This is test 2 todo 2',
                        completed: false
                    },
                    {
                        id: 2003,
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
            state.todoFormActive = false;
        },
        ADD_PROJECT(state, newProject) {
            if (state.todoList.length == 0) {
                newProject.id = 1;
            } else {
                newProject.id = state.todoList[state.todoList.length - 1].id + 1;
            }
            state.todoList.push(newProject);
        },
        TOGGLE_TODO_FORM(state) {
            state.todoFormActive = !state.todoFormActive;
        },
        TOGGLE_PROJECT_FORM(state) {
            state.projectFormActive = !state.projectFormActive;
        },
        ADD_TODO(state, newTodo) {
            const project = state.todoList.find(project => project.id == state.selectedProject);
            if (project.todos.length == 0) {
                newTodo.id = state.selectedProject * 1000 + 1;
            } else {
                newTodo.id = project.todos[project.todos.length - 1].id + 1;
            }
            project.todos.push(newTodo);
        },
        TOGGLE_COMPLETED(state, todo) {
            todo.completed = !todo.completed;
        },
        DELETE_TODO(state, todoID) {
            const project = state.todoList.find(project => project.id == state.selectedProject);
            project.todos = project.todos.filter(todo => todo.id != todoID);
        }
    }
})