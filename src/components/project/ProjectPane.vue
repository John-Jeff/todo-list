<template>
    <div id="main">
        <h1 id="main-title">Cool Todo</h1>
        <ProjectList />
    </div>
</template>

<script>
import ProjectList from './ProjectList.vue';
export default {
    components: {
        ProjectList
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
</style>