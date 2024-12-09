// maximum.ts
function Maximum(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
var numbers = [23, 89, 6, 29, 56, 45, 77, 32];
var maxNumber = Maximum(numbers);
console.log("Maximum number is", maxNumber);
