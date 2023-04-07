<template>
    <ul id="todo-list">
        <li class="todo" @click="toggleCompleted(todo)" v-for="todo in project.todos" v-bind:key="todo.id">
            <span class="status" :class="{ completed: todo.completed }"></span>
            <h2 class="todo-title">{{ todo.title }}</h2>
            <p class="todo-desc">{{ todo.description }}</p>
            <a class="todo-edit" @click.stop="editTodo()"><img src="../../assets/edit_icon.png" alt=""></a>
            <a class="todo-delete" @click="deleteTodo(todo.id)"><img src="../../assets/delete_icon.png" alt=""></a>
        </li>
    </ul>
</template>

<script>
export default {
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
        toggleCompleted(todo) {
            this.$store.commit("TOGGLE_COMPLETED", todo);
        },
        editTodo() {
            // create method logic
        },
        deleteTodo(todoID) {
            this.$store.commit("DELETE_TODO", todoID);
        }
    }
}
</script>

<style scoped>
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
    display: flex;
    justify-content: center;
    align-items: center;
}

.todo-edit {
    grid-area: edit;
}

.todo-delete {
    background: #c95454;
    color: #f3f3f3;
    line-height: 28px;
    grid-area: delete;
    align-self: flex-end;
}

.todo-edit img {
    width: 70%;
}

.todo-delete img {
    width: 50%;
}

.completed {
    background: #30d683;
}
</style>