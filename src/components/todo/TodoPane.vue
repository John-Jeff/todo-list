<template>
    <div id="main">
        <header id="main-header">
            <h1 id="project-title">{{ project.title }}</h1>
            <a id="add-todo-btn" v-if="$store.state.selectedProject !== 0" @click="toggleTodoForm()">{{ $store.state.todoFormActive ? 'Cancel' : 'Add Todo' }}</a>
        </header>
        <TodoForm v-if="$store.state.todoFormActive" />
        <TodoList id="todo-list"/>
    </div>
</template>

<script>
import TodoForm from './TodoForm.vue';
import TodoList from './TodoList.vue';

export default {
    components: {
        TodoForm,
        TodoList
    },
    data() {
        return {}
    },
    computed: {
        project() {
            if (!this.$store.state.selectedProject || this.$store.state.todoList.length === 0) {
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
    overflow-y: auto;
}
</style>