// User can run the app.
// User can view their todo list.
// User can add a new todo.
// User can edit an existing todo item.
// User can toggle a todo completed status.
// User can delete a todo.
// User can quit the app.

// PSEUDOCODE
// Start while loop, isAppRunning  == true
// Check user input
// If 1
    // If todoList = 0
        // console.log You have 0 tasks to do
    // else 
        // loop through all available items and display console.log(`#1 - Learn HTML ${X}`)
// If 2
    // let inputTask = prompt("Enter your task: ")
    // push the new item into todoList array
// If 3
    // get user id choice
    // let updateDetails = prompt("Change the todo item to:")
    // replace that particular index position element in the array with new todolist (default status is incomplete)
// If 4
    // let toggleId = prompt(`Enter the todo id you want to toggle complete:`)
    // get the todoList element in array and toggle the X to O or O to X
// If 5
    // let deleteId = prompt(`Enter the todo id you want to delete:`)
    // remove the specified element from todoList array
// If 6
    // isAppRunning == false
// If others
    // console.log Command is not recognized, please try again

const prompt = require('prompt-sync')()
// ['Complete HTML',crossSymbol],[`Complete DOM`,tickSymbol],['Complete CSS',crossSymbol]

class todoListApp {
    constructor(){
        this.todoList = [],
        this.crossSymbol = '\u274C', 
        this.tickSymbol = '\u2705',
        this.isAppRunning = true
    }
    
    displayOptions(){
        // unicode for changing the color of the node.js display
        console.log("\x1b[34m")
        console.log(`
            --------- TODO APP -----------
            What would you like to do?
            1   View my todo list
            2   Add new todo
            3   Edit a todo item
            4   Toggle complete a todo
            5   Delete a todo
            6   Quit app
            `)
    }

    view(){
        console.log(`\x1b[32m`)
        this.todoList.length == 0?
            // Either console log that there's no task or loop through all the tasks inside and display
            console.log(`You have 0 tasks to do`):(this.todoList.forEach((element,index)=>{console.log(`#${index+1} - ${element[0]} ${element[1]}`)}))
        return this
    }

    add(){
        console.log("\x1b[34m")
        let inputTask = prompt("Enter your task: ")
        this.todoList.push([inputTask,this.crossSymbol])
    }

    edit(){
        // Display list once so that easier for the user to see what items to edit
        this.view()
        console.log("\x1b[33m")
        let todoIndex = this.checkForInvalidInputs(`Enter the todo id you want to edit: `)
        let updatedDetails = prompt("Change the todo item to: ")
        this.todoList[todoIndex-1][0] = updatedDetails

        // Reset the todo status to incomplete as this may potentially be new item
        this.todoList[todoIndex-1][1] = this.crossSymbol
    }

    toggle(){
        // Display list once so that easier for the user to see what items to toggle
        this.view()
        console.log("\x1b[35m")
        let todoIndex = this.checkForInvalidInputs(`Enter the todo id you want to toggle complete: `)
        let toggledResult = this.todoList[todoIndex-1][1] === this.crossSymbol? this.tickSymbol:this.crossSymbol
        this.todoList[todoIndex-1][1] = toggledResult
    }

    delete(){
        // Display list once so that easier for the user to see what items to delete
        this.view()
        console.log("\x1b[31m")
        let deleteIndex = this.checkForInvalidInputs(`Enter the todo id you want to delete: `)
        this.todoList.splice(deleteIndex-1,1)
    }

    exit(){
        console.log("\x1b[31m")
        console.log('Program has ended')
        console.log('\x1b[0m')
        this.isAppRunning = false
    }

    error(){
        console.log("\x1b[31m")
        console.log("Input is not recognized, please try again")
    }
    
    checkForInvalidInputs(inputString){
        let todoIndex,isChecking = true
        while(isChecking){
            todoIndex = prompt(inputString)
            todoIndex<=this.todoList.length? 
            isChecking = false : (isChecking = true, console.log(`There is only a max of ${this.todoList.length} items on the list. Please try again
            `))
        }
        return todoIndex
    }

    start(){

        while(this.isAppRunning){
            this.displayOptions()
            let userChoice = prompt("Enter (1/2/3/4/5/6): ")
            
            if (userChoice === "1"){this.view()}
            else if (userChoice === "2"){this.add()}
            else if (userChoice === "3"){this.edit()}
            else if (userChoice === "4"){this.toggle()}
            else if (userChoice === "5"){this.delete()}
            else if(userChoice === "6"){this.exit()}
            else {this.error()}
        }
    }
}

const newList= new todoListApp()
newList.start()