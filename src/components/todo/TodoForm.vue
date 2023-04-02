<template>
    <form class="todo-form hidden" @submit.prevent="">
        <div class="title-form">
            <label for="title">Name</label>
            <input type="text" name="title" id="title" v-model="newTodo.title" required>
        </div>
        <!-- <div class="date-form">
            <label for="date">Due Date</label>
            <input type="date" name="dueDate" id="date" required>
        </div>
        <div class="prio-form-form">
            <label for="priority">Priority:</label>
            <div class="range-value">medium</div>
            <input type="range" max="2" name="priority" id="priority">
        </div> -->
        <div class="desc-form">
            <label for="description">Description</label>
            <input type="text" name="description" id="description" v-model="newTodo.description">
        </div>
        <button class="todo-form-submit" @click="addTodo()">Add</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            newTodo: {
                title: '',
                description: '',
                completed: false,
            }
        }
    },
    methods: {
        addTodo() {
            if (this.newTodo.title && this.newTodo.description) {
                this.$store.commit('ADD_TODO', this.newTodo);
                this.newTodo = {
                    title: '',
                    description: '',
                    completed: false,
                }
            }
        }
    }
}
</script>

<style scoped></style>