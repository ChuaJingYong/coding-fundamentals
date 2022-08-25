// User can run the app.
// User can view their schedules.
// User can add a new event.
// User can edit an existing event title and time.
// User can cancel an event.
// User can quit the app.

const prompt = require('prompt-sync')()

class Calender{
    constructor(){
        this.scheduleList = [],
        this.crossSymbol = '\u274C', 
        this.tickSymbol = '\u2705',
        this.isAppRunning = true
        this.calendarReference2022 = {
            1:{
                month:"Jan",
                lastDate:31
            },
            2:{
                month:"Feb",
                lastDate:28
            },
            3:{
                month:"Mar",
                lastDate:31
            },
            4:{
                month:"Apr",
                lastDate:30
            },
            5:{
                month:"May",
                lastDate:31
            },
            6:{
                month:"Jun",
                lastDate:30
            },
            7:{
                month:"Jul",
                lastDate:31
            },
            8:{
                month:"Aug",
                lastDate:31
            },
            9:{
                month:"Sep",
                lastDate:30
            },
            10:{
                month:"Oct",
                lastDate:31
            },
            11:{
                month:"Nov",
                lastDate:30
            },
            12:{
                month:"Dec",
                lastDate:31
            }
        }
    }

    start(){
        while(this.isAppRunning){
            this.displayOptions()
            let userChoice = prompt("Enter (1/2/3/4/5): ")
            
            if (userChoice === "1"){this.view()}
            else if (userChoice === "2"){this.add()}
            else if (userChoice === "3"){this.edit()}
            else if (userChoice === "4"){this.cancel()}
            else if(userChoice === "5"){
                console.log("\x1b[31m")
                console.log('Program has ended')
                console.log('\x1b[0m')
                this.isAppRunning = false}
            else { 
                console.log("\x1b[31m")
                console.log("Input is not recognized, please try again")}
        }
    }

    displayOptions(){
        // unicode for changing the color of the node.js display
        console.log("\x1b[34m")
        console.log(`
            --------- Calendar App -----------
            What would you like to do?
            1   View my schedule list
            2   Add new event
            3   Edit an existing event title and time
            4   Cancel an event
            5   Quit app
            `)
    }

    view(){
        console.log(`\x1b[32m`)
        this.scheduleList.length == 0?
            // Either console log that there's no event or loop through all the events inside and display
            console.log(`You have 0 events on your schedule`):(this.scheduleList.forEach((element,index)=>{console.log(`#${index+1} - ${element[0]} ${element[1]}`)}))
        return this
    }

    add(){
        console.log("\x1b[34m")
        let inputTask = prompt("Enter your event: ")
        let [month,inputDate] = this.getMonthDate()
        this.scheduleList.push([inputTask,`${month}/${inputDate}`])
    }

    edit(){
        // Display list once so that easier for the user to see what items to edit
        this.view()
        console.log("\x1b[33m")
        let eventIndex = this.checkForInvalidInputs(`Enter the event id you want to edit: `)
        let updatedDetails = prompt("Change the event description to: ")
        this.scheduleList[eventIndex-1][0] = updatedDetails

        let [month,inputDate] = this.getMonthDate()
        // Update the new date into the schedule list

        this.scheduleList[eventIndex-1][1] = `${month}/${inputDate}`
    }

    cancel(){
        // Display list once so that easier for the user to see what items to delete
        this.view()
        console.log("\x1b[31m")
        let deleteIndex = this.checkForInvalidInputs(`Enter the event id you want to delete: `)
        this.scheduleList.splice(deleteIndex-1,1)
    }

    checkForInvalidInputs(inputString){
        let eventIndex,isChecking = true
        while(isChecking){
            eventIndex = prompt(inputString)
            eventIndex<=this.scheduleList.length? 
            isChecking = false : (isChecking = true, console.log(`There is only a max of ${this.scheduleList.length} events on the list. Please try again
            `))
        }
        return eventIndex
    }

    getMonthDate(){
        let isLoop1Running = true, isLoop2Running = true
        let inputMonth, inputDate

        // safety check loop to check for month
        while(isLoop1Running){
            inputMonth = prompt("Change the event month to (1-12): ")
            inputMonth<=12? 
            isLoop1Running = false : (isLoop1Running = true, console.log(`The accepted range is only between 1 to 12. Please try again
            `))
        }
        
        // turn the number into a date instead
        let month = this.calendarReference2022[inputMonth].month
        // get the last date of the current month to check for user date input
        let currentMonthLastDate = this.calendarReference2022[inputMonth].lastDate

        // safety check loop for available date with current selected month
        while(isLoop2Running){
            inputDate = prompt(`Change the event date to (1-${currentMonthLastDate}): `)
            // checking if input date is between 1 and the max date of that month (e.g. Feb only max number is 28 or 29)
            inputDate>=1 && inputDate<=currentMonthLastDate? 
            isLoop2Running = false : (isLoop2Running = true, console.log(`The accepted range is only between 1 to ${currentMonthLastDate} for ${month}. Please try again
            `))
        }

        return [month,inputDate]
    }
}

// console.log(`
//     ---July---
// 1  2  3  4  5  6  7
// 8  9  10 11 12 13 14
// 15 16 17 18 19 20 21
// 22 23 24 25 26 27 28
// 29 30
//     `)

const newCalenderApp = new Calender()
newCalenderApp.start()