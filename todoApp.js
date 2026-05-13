let tasks = [
    { text: "Task1", completed: false },
    { text: "Task2", completed: false },
    { text: "Task3", completed: true }
];

function displayTasks(){
    tasks.forEach(function(task, index) {
    let status = "uncompleted";
    
    if(task.completed === true){
        status = "completed";
    }

    console.log(index + 1 + ". " + task.text + " - " + status);
    });
}

function addTask(text){
    tasks.push({text: text, completed: false});
}

function completeTask(index){
    tasks[index].completed = true;
}

completeTask(0);
displayTasks();
