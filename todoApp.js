const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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

function showMenu() {
    console.log("----------")
    console.log("1. View Tasks");
    console.log("2. Add Task");
    console.log("3. Complete Task");
    console.log("4. Remove Task");
    console.log("5. Exit");
    rl.question("Choose an option: ", function(choice) {
        let answer = Number(choice);
        if(answer < 1 || answer > 5){
            console.log("Incorrect Input");
            showMenu();
        } else if (answer === 1){
            displayTasks();
            showMenu();
        } else if (answer === 2){
            rl.question("Name of Task: ", function(task) {
                addTask(task);
                showMenu();
            })
        } else if (answer === 3){
            rl.question("Number of Task to be Completed: ", function(input) {
                let num = Number(input);
                completeTaskByNumber(num);
                showMenu();
            })
        } else if(answer === 4){
            rl.question("Number of Task to be Removed: ", function(input) {
                let num = Number(input);
                removeTask(num);
                showMenu();
            })
        } else {
            rl.close();
        }

    });

}

showMenu();
