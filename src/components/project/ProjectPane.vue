<template>
    <div id="main">
        <h1 id="main-title">Cool Todo</h1>
        <button id="new-project-btn" @click="toggleProjectForm()">&#x2b; New Project</button>
        <ProjectForm v-if="$store.state.projectFormActive"/>
        <ProjectList />
    </div>
</template>

<script>
import ProjectForm from './ProjectForm.vue';
import ProjectList from './ProjectList.vue';
export default {
    components: {
        ProjectList,
        ProjectForm
    },
    methods: {
        toggleProjectForm() {
            this.$store.commit('TOGGLE_PROJECT_FORM');
        }
    }
}
</script>

<style scoped>
#main-title {
    font-weight: lighter;
    color: white;
    text-align: center;
    margin-top: 0;
}

#new-project-btn {
    display: block;
    margin: 0 auto;
}
</style>