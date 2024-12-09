class Arithmetic {
    Number1: number;
    Number2: number;

    constructor(num1: number, num2: number) {
        this.Number1 = num1;
        this.Number2 = num2;
    }

    Addition(): number {
        return this.Number1 + this.Number2;
    }

    Subtraction(): number {
        return this.Number1 - this.Number2;
    }

    Multiplication(): number {
        return this.Number1 * this.Number2;
    }

    Division(): number {
        if (this.Number2 === 0) {
            throw new Error("Division by zero error");
        }
        return this.Number1 / this.Number2;
    }
}

// Create two objects
const obj1 = new Arithmetic(10, 5);
const obj2 = new Arithmetic(20, 4);

// Call methods on both objects
console.log("Object 1:");
console.log("Addition:", obj1.Addition());
console.log("Subtraction:", obj1.Subtraction());
console.log("Multiplication:", obj1.Multiplication());
console.log("Division:", obj1.Division());

console.log("\nObject 2:");
console.log("Addition:", obj2.Addition());
console.log("Subtraction:", obj2.Subtraction());
console.log("Multiplication:", obj2.Multiplication());
console.log("Division:", obj2.Division());