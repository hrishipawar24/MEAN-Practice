var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.PI = 3.14;
        this.Radius = radius;
    }
    Circle.prototype.Area = function () {
        return this.PI * this.Radius * this.Radius;
    };
    return Circle;
}());
// Create two objects
var circle1 = new Circle(5);
var circle2 = new Circle(10);
// Call the Area method on both objects
console.log("Circle 1 Area:", circle1.Area());
console.log("Circle 2 Area:", circle2.Area());
