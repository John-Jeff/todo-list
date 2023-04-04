<template>
  <div id="main-view">
    <ProjectPane id="project-pane" />

    <TodoPane id="todo-pane" />
  </div>
</template>

<script>
import ProjectPane from './components/project/ProjectPane.vue';
import TodoPane from './components/todo/TodoPane.vue';

export default {
  components: {
    ProjectPane,
    TodoPane
  }
}

</script>

<style scoped>
#main-view {
  display: grid;
  gap: 1rem;
  grid-template-columns: minmax(250px, 1fr) 5fr;
  height: 100%;
}

#project-pane,
#todo-pane {
  box-sizing: border-box;
  width: 100%;
  padding: 1.5rem;
  border: 1px solid #5f6479;
  border-radius: 1rem;
}

#project-pane {
  box-sizing: border-box;
}
</style>
