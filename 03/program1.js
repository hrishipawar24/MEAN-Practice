var Arithmetic = /** @class */ (function () {
    function Arithmetic(num1, num2) {
        this.Number1 = num1;
        this.Number2 = num2;
    }
    Arithmetic.prototype.Addition = function () {
        return this.Number1 + this.Number2;
    };
    Arithmetic.prototype.Subtraction = function () {
        return this.Number1 - this.Number2;
    };
    Arithmetic.prototype.Multiplication = function () {
        return this.Number1 * this.Number2;
    };
    Arithmetic.prototype.Division = function () {
        if (this.Number2 === 0) {
            throw new Error("Division by zero error");
        }
        return this.Number1 / this.Number2;
    };
    return Arithmetic;
}());
// Create two objects
var obj1 = new Arithmetic(10, 5);
var obj2 = new Arithmetic(20, 4);
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
