<template>
    <form id="todo-form" @submit.prevent="">
        <div class="title-form">
            <label for="title">Title</label>
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
            <textarea type="text" name="description" id="description" v-model="newTodo.description" rows="3" cols="40"></textarea>
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
                this.toggleForm();
                this.newTodo = {
                    title: '',
                    description: '',
                    completed: false,
                }
            }
        },
        toggleForm() {
            this.$store.commit('TOGGLE_FORM');
        }
    }
}
</script>

<style scoped>
#todo-form {
    padding: 1rem 2rem;
    border: 1px solid #5f6479;
    border-radius: 1rem;
}

label {
    color: #f3f3f3;
    font-size: 20px;
}

#title {
    width: 20rem;
}

#title,
#description {
    display: block;
    background: #5f6479;
    color: #f3f3f3;
    font-size: 16px;
    padding: .5em 1em;
    margin: .4rem 0 1rem;
    border: none;
    outline: none;
    border-radius: .5rem;
}

#title:focus,
#description:focus,
.todo-form-submit:focus {
    outline: 1px solid #f3f3f3;
}

.todo-form-submit {
    background: #30d683;
    color: #f3f3f3;
    font-size: 20px;
    padding: .4em 1em;
    border: none;
    outline: none;
    border-radius: 1em;
}
</style>