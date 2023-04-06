<template>
    <ul id="project-list">
        <li class="project" :class="{highlighted: highlightTodo(project)}" v-for="project in $store.state.todoList" v-bind:key="project.projectid"
            @click="selectTodo(project.id)">
            {{ project.title }}
        </li>
    </ul>
</template>

<script>
export default {
    methods: {
        selectTodo(id) {
            // console.log(this.$store.state.todoList[id - 1]);
            this.$store.commit('SET_SELECTED_PROJECT', id);
        },
        highlightTodo(project) {
            return project.id === this.$store.state.selectedProject;
        }
    }
}
</script>

<style scoped>
#project-list {
    margin: 0;
    padding: 0;
}

.project {
    box-sizing: border-box;
    text-align: center;
    background: #4b5168;
    color: #f3f3f3;
    list-style: none;
    margin: .5rem 0;
    padding: .5em;
    /* border: 1px solid #5f6479; */
    border-radius: 1em;
    cursor: pointer;
}

.highlighted {
    border: 1px solid #f3f3f3;
}
</style>