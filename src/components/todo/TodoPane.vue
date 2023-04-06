<template>
    <div id="main">
        <header id="main-header">
            <h1 id="project-title">{{ project.title }}</h1>
            <a id="add-todo-btn" @click="toggleTodoForm()">{{$store.state.todoFormActive ? 'Cancel' : 'Add Todo'}}</a>
        </header>
        <TodoForm v-if="$store.state.todoFormActive" />
        <ul id="todo-list">
            <li class="todo" @click="toggleCompleted(todo)" v-for="todo in project.todos" v-bind:key="todo.id">
                <span class="status" :class="{ completed: todo.completed }"></span>
                <h2 class="todo-title">{{ todo.title }}</h2>
                <p class="todo-desc">{{ todo.description }}</p>
                <a class="todo-edit" @click.stop="editTodo()">e</a>
                <a class="todo-delete" @click="deleteTodo(todo.id)">X</a>
            </li>
        </ul>
    </div>
</template>

<script>
import TodoForm from './TodoForm.vue';

export default {
    components: { TodoForm },
    data() {
        return {}
    },
    computed: {
        project() {
            if (!this.$store.state.selectedProject) {
                return {
                    title: "Select A Project To Load",
                    todos: []
                };
            }
            return this.$store.getters.project;
        }
    },
    methods: {
        toggleTodoForm() {
            this.$store.commit('TOGGLE_TODO_FORM');
        },
        toggleCompleted(todo) {
            this.$store.commit("TOGGLE_COMPLETED", todo);
        },
        editTodo() {
            // create method logic
        },
        deleteTodo(todoID) {
            this.$store.commit("DELETE_TODO", todoID);
        }
    },
}
</script>

<style scoped>
#main-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

#project-title {
    font-size: 26px;
    font-weight: 500;
    box-sizing: border-box;
    display: inline-block;
    background: #5f6479;
    margin-top: 0;
    padding: .4em 1em;
    border-radius: 1em;
}

#add-todo-btn {
    background: #c9547b;
    color: #f3f3f3;
    font-family: inherit;
    font-size: 20px;
    padding: .4em 1em;
    border-radius: 1em;
    cursor: pointer;
}

#todo-list {
    padding: 0;
}

.todo {
    background: #5f6479;
    display: grid;
    gap: .5rem 1rem;
    grid-template-columns: min-content auto min-content;
    grid-template-areas:
        "status title edit"
        "status desc delete";
    list-style: none;
    margin-bottom: 1rem;
    padding: 1em;
    border-radius: 1em;
}

.status {
    width: 16px;
    height: 100%;
    border: 1px solid #9093a1;
    border-radius: 1rem;
    grid-area: status;
}

.todo-title {
    margin: 0;
    font-weight: 500;
    grid-area: title;
}

.todo-desc {
    margin: 0;
    font-weight: 300;
    align-self: center;
    grid-area: desc;
}

.todo-edit,
.todo-delete {
    aspect-ratio: 1 / 1;
    width: 28px;
    border-radius: 50%;
    cursor: pointer;
}

.todo-edit {
    background: #5487c9;
    grid-area: edit;
}

.todo-delete {
    background: #c95454;
    color: #f3f3f3;
    text-align: center;
    line-height: 28px;
    grid-area: delete;
    align-self: flex-end;
}

.completed {
    background: #30d683;
}
</style>