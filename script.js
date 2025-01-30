document.getElementById('add-task').addEventListener('click', function() {
    var newTaskText = document.getElementById('new-task').value;
    if (newTaskText.trim() !== "") {
        var newTask = document.createElement('div');
        newTask.className = 'todo-item';
        newTask.innerHTML = '<span>' + newTaskText + '</span><button class="complete">Complete</button><button>Delete</button>';
        document.getElementById('todo-list').appendChild(newTask);
        document.getElementById('new-task').value = '';

        newTask.querySelector('.complete').addEventListener('click', function() {
            newTask.querySelector('span').classList.toggle('completed');
        });

        newTask.querySelector('button:not(.complete)').addEventListener('click', function() {
            newTask.remove();
        });

        newTask.querySelector('span').addEventListener('click', function() {
            this.classList.toggle('completed');
        });
    }
});
