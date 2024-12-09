class Circle {
    Radius: number;
    PI: number = 3.14;

    constructor(radius: number) {
        this.Radius = radius;
    }

    Area(): number {
        return this.PI * this.Radius * this.Radius;
    }
}

// Create two objects
const circle1 = new Circle(5);
const circle2 = new Circle(10);

// Call the Area method on both objects
console.log("Circle 1 Area:", circle1.Area());
console.log("Circle 2 Area:", circle2.Area());