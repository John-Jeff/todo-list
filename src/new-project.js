export function toggleNewProjectButton() {
    const newProjectButton = document.querySelector('#new-project-button');
    const newProjectForm = document.querySelector(".new-project-form");

    newProjectButton.addEventListener('click', (e) => {
        newProjectForm.classList.toggle('hidden');
    });
}