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

function removeTask(input){
    if(input < 1 || input > tasks.length){
        console.log("Invalid task number");
    } else {
        tasks.splice((input - 1), 1);
    }
}

function completeTaskByNumber(input){
    if(input < 1 || input > tasks.length){
        console.log("Invalid task number");
    } else {
        tasks[input - 1].completed = true;
    }
}

removeTask(1);
displayTasks();
