class Calculator {
    constructor(userInput){
        // Initializes the variables here
        this.userInput = userInput,
        this.result = 0,
        this.historyLog = []
    }

    add(newInput){
        this.result = this.userInput + newInput
        this.historyLog.push(`${this.userInput} + ${newInput} = ${this.result}`)
        this.userInput = this.result
        return this
    }

    subtract(newInput){
        this.result = this.userInput - newInput
        this.historyLog.push(`${this.userInput} - ${newInput} = ${this.result}`)
        this.userInput = this.result 
        return this
    }

    multiply(newInput){
        this.result = this.userInput * newInput
        this.historyLog.push(`${this.userInput} * ${newInput} = ${this.result}`)
        this.userInput = this.result 
        return this
    }

    divide(newInput){
        this.result = this.userInput / newInput
        this.historyLog.push(`${this.userInput} / ${newInput} = ${this.result}`)
        this.userInput = this.result 
        return this
    }
    
    value(){
        this.historyLog.forEach((element)=>{
            console.log(element)
        })
    }
}

const calculator = new Calculator(0)

calculator.add(5).subtract(2).multiply(5).divide(3)
calculator.value()