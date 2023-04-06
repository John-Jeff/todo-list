<template>
    <div id="new-project">
        <form id="new-project-form" @submit.prevent="">
            <label id="input-label" for="new-project-input">Title</label>
            <input id="new-project-input" type="text" name="title" v-model="newProject.title" placeholder="project title"
                required>
            <button id="create-project" @click="addProject()">create</button>
            <button id="cancel-project" @click="toggleProjectForm()">cancel</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newProject: {
                title: '',
                todos: []
            }
        }
    },
    methods: {
        toggleProjectForm() {
            this.$store.commit('TOGGLE_PROJECT_FORM');
        },
        addProject() {
            if (this.newProject.title) {
                this.$store.commit('ADD_PROJECT', this.newProject);
                this.toggleProjectForm();
            }
        }
    }
}
</script>

<style scoped>
#new-project-form {
    display: grid;
    grid-template-areas:
        "label label"
        "input input"
        "create cancel";
    padding: .5rem 1rem;
    border: 1px solid #5f6479;
    border-radius: 1rem;
}

#new-project-input {
    box-sizing: border-box;
    display: block;
    background: #5f6479;
    color: #f3f3f3;
    font-size: 14px;
    width: 100%;
    min-width: 0;
    padding: .5em 1em;
    border: none;
    outline: none;
    border-radius: .5rem;
    justify-self: center;
    grid-area: input;
}

#input-label {
    justify-self: center;
    grid-area: label;
}

#create-project,
#cancel-project {
    display: block;
    background: #c9547b;
    color: #f3f3f3;
    font-family: inherit;
    font-size: 14px;
    min-width: 0;
    margin: .5rem auto 0;
    padding: .4em 1em;
    border: none;
    border-radius: 1em;
    cursor: pointer;
}

#create-project {
    background: #30d683;
    grid-area: create;
}

#cancel-project {
    grid-area: cancel;
}
</style>