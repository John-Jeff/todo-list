<template>
    <div id="new-project">
        <div id="new-project-form">
            <input id="new-project-input" type="text" placeholder="project name" required>
            <button id="create-project">create</button>
            <button id="cancel-project">cancel</button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#new-project-form {
    display: grid;
    grid-template-areas:
        "input input"
        "create cancel";
}

#new-project-input {
    grid-area: input;
}

#create-project {
    grid-area: create;
}

#cancel-project {
    grid-area: cancel;
}
</style>