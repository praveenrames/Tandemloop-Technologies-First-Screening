
// Problem - 1 : Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.

// Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’

// Datatype :> ‘a’ = double, ‘b’ = double, ‘type of operation’ = string

// Solution

class calculator {
    constructor (a, b, operation) {
        this.a = a;
        this.b = b;
        this.operation = operation; // Operation to perform (add, sub, mul, div)
    }                                    

    // Method to perform the calculation based on the operation type
    calculator() {
        // Addition
        if (this.operation === "add"){
            return this.a + this.b;
        // Subtraction
        } else if (this.operation === "sub"){
            return this.a - this.b;
        // Multiplication
        } else if (this.operation === "mul"){
            return this.a * this.b;
        // Division 
        } else if (this.operation === "div"){
            if (this.b === 0){
                return "Error: cannot divide by zero";
            }
            return this.a / this.b;
        // Invalid operation
        } else {
            return "Invalid Operation";
        }
    }
}

// Creating objects and calling the calculate() method

const add = new calculator(10, 5.5, "add");
console.log("Addition :", add.calculator());

const sub = new calculator(55, 2.5, "sub");
console.log("Subtraction :", sub.calculator());

const mul = new calculator(25, 3.6, "mul");
console.log("Multiplication :", mul.calculator());

const div = new calculator(50, 25, "div");
console.log("Division :", div.calculator());

