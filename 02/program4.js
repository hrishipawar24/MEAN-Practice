// armstrong.ts
var ChkArmstrong = function (num) {
    var originalNum = num;
    var sum = 0;
    var digits = num.toString().length;
    while (num > 0) {
        var digit = num % 10;
        sum += Math.pow(digit, digits);
        num = Math.floor(num / 10);
    }
    return sum === originalNum;
};
var number = 153;
if (ChkArmstrong(number)) {
    console.log("It is Armstrong number");
}
else {
    console.log("It is not Armstrong number");
}
