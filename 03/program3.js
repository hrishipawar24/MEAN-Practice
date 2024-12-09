var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle = /** @class */ (function () {
    function Circle(R, P) {
        if (P === void 0) { P = 3.14; }
        this.Radius = R;
        this.PI = P;
    }
    Circle.prototype.Area = function () {
        var Ans = 0;
        Ans = this.Radius * this.Radius * this.PI;
        return Ans;
    };
    return Circle;
}());
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircleX.prototype.Circumference = function () {
        var Ans = 0;
        Ans = this.Radius * this.PI * 2;
        return Ans;
    };
    return CircleX;
}(Circle));
var ACircle = 0;
var CCircle = 0;
var obj1 = new CircleX(15);
var obj2 = new CircleX(21);
ACircle = obj1.Area();
CCircle = obj1.Circumference();
console.log("Area of Circle is : " + ACircle);
console.log("CIrcumference of Circle is : " + CCircle);
ACircle = obj2.Area();
CCircle = obj2.Circumference();
console.log("Area of Circle is : " + ACircle);
console.log("CIrcumference of Circle is : " + CCircle);
