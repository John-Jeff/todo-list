<template>
    <div id="main">
        <header id="main-header">
            <h1 id="project-title">
                <input id="title-input" @blur="editProjectTitle(projectTitle)" v-model="projectTitle" ref="titleInput"
                    v-if="$store.state.projectTitleEdit" type="text" v-focus>
                <span v-else>{{ project.title }}</span>
                <a class="title-edit" @click.stop="toggleProjectTitleEdit()"><img src="../../assets/edit_icon.png"
                        alt=""></a>
            </h1>
            <a id="add-todo-btn" v-if="$store.state.selectedProject !== 0" @click="toggleTodoForm()">{{
                $store.state.todoFormActive ? 'Cancel' : 'Add Todo' }}</a>
        </header>
        <TodoForm id="todo-form" v-if="$store.state.todoFormActive" />
        <TodoList id="todo-list" />
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
        return {
            projectTitle: ''
        }
    },
    computed: {
        project() {
            if (!this.$store.state.selectedProject || this.$store.state.todoList.length === 0) {
                return {
                    title: "Select A Project To Load",
                    todos: []
                };
            }
            const returnedProject = this.$store.getters.project;
            this.projectTitle = returnedProject.title;
            return returnedProject;
        }
    },
    methods: {
        toggleTodoForm() {
            this.$store.commit('TOGGLE_TODO_FORM');
        },
        toggleProjectTitleEdit() {
            this.$store.commit('TOGGLE_PROJECT_EDIT');
            // if (this.$store.state.projectTitleEdit) this.$refs.titleInput[0].focus();

        },
        editProjectTitle(projectTitle) {
            this.$store.commit('EDIT_PROJECT_TITLE', projectTitle);
            // this.$refs.titleInput[0].focus();
        }
    }
}
</script>

<style scoped>
#main-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

#project-title {
    display: flex;
    align-items: center;
    font-size: 26px;
    font-weight: 500;
    box-sizing: border-box;
    /* display: inline-block; */
    background: #5f6479;
    margin-top: 0;
    padding: .4em 1em;
    border-radius: 1em;
}

#title-input {
    background: none;
    color: white;
    font-family: inherit;
    font-size: 16px;
    padding: .5em 1em;
    border: 1px solid white;
    outline: none;
    border-radius: .5rem;
}

.title-edit {
    margin-left: 1rem;
    cursor: pointer;
}

#add-todo-btn {
    background: #c9547b;
    color: #f3f3f3;
    font-family: inherit;
    font-size: 20px;
    padding: .4em 1em;
    border-radius: 1em;
    cursor: pointer;
    transition: 200ms all;
}

#add-todo-btn:hover {
    transform: scale(1.05);
}


#todo-form {
    animation: grow 200ms;
}

#todo-list {
    padding: 0;
    overflow-y: auto;
}

@keyframes grow {
    from {
        transform: scale(.5);
        ;
    }

    to {
        transform: scale(1);
    }
}
</style>