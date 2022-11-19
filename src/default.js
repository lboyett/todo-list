
function defaultPage () {

    const indexProject = document.getElementById('index-button')
    indexProject.style.backgroundColor = 'rgb(204, 204, 204)';
    const addTaskButton = document.getElementById('add-task-button');
    addTaskButton.addEventListener('click',() => addNewTask());


    function addNewTask () {
        let content = document.querySelector('.content');
        let newCard = document.createElement('div');
        let inputTask = document.createElement('input');
        let enterTask = document.createElement('button');
        let removeButton = document.createElement('button');


        newCard.className = 'card';
        inputTask.className = 'task-input';
        enterTask.textContent = 'Add';
        enterTask.className = 'enter-task-button';
        enterTask.onclick = () => {
            const task = document.createElement('div');
            task.textContent = inputTask.value;
            newCard.insertBefore(task, removeButton);
            inputTask.remove();
            enterTask.remove();
        };
        removeButton.onclick = () => newCard.remove();
        removeButton.textContent = 'X';
        removeButton.className = 'remove-card-button';


        newCard.appendChild(inputTask);
        newCard.appendChild(enterTask);
        newCard.appendChild(removeButton);
        content.insertBefore(newCard, addTaskButton);
}};

export default defaultPage