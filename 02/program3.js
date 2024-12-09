// second_maximum.ts
function SecondMaximum(arr) {
    var _a;
    var max1 = arr[0];
    var max2 = arr[1];
    if (max2 > max1) {
        _a = [max2, max1], max1 = _a[0], max2 = _a[1];
    }
    for (var i = 2; i < arr.length; i++) {
        if (arr[i] > max1) {
            max2 = max1;
            max1 = arr[i];
        }
        else if (arr[i] > max2) {
            max2 = arr[i];
        }
    }
    return max2;
}
var numbers = [23, 89, 6, 29, 56, 45, 77, 32];
var secondMaxNumber = SecondMaximum(numbers);
console.log("Second Maximum number is", secondMaxNumber);
