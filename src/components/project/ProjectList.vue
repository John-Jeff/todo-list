<template>
    <ul id="project-list">
        <li class="project" :class="{highlighted: highlightTodo(project)}" v-for="project in $store.state.todoList" v-bind:key="project.id"
            @click="selectTodo(project.id)">
            {{ project.title }}
            <img src="../../assets/delete_icon.png" alt="" @click.stop="deleteProject(project.id)">
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
        },
        deleteProject(id) {
            this.$store.commit('DELETE_PROJECT', id);
            // console.log("meow")
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
    position: relative;
    box-sizing: border-box;
    text-align: center;
    background: #4b5168;
    list-style: none;
    margin: .5rem 0;
    padding: .5em;
    border: 1px solid #4b5168;
    /* border: 1px solid #5f6479; */
    border-radius: 1em;
    cursor: pointer;
    transition: 200ms all;
}

.project img {
    width: 12px;
    position: absolute;
    right: 0;
    padding: 6px;
    margin-right: .5rem;
    border-radius: 50%;
    transition: 200ms all;
}

.project img:hover {
    background-color: #c95454;
}

.highlighted {
    border: 1px solid #f3f3f3;
}
</style>