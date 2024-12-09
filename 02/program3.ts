// second_maximum.ts
function SecondMaximum(arr: number[]): number {
    let max1 = arr[0];
    let max2 = arr[1];

    if (max2 > max1) {
        [max1, max2] = [max2, max1];
    }

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > max1) {
            max2 = max1;
            max1 = arr[i];
        } else if (arr[i] > max2) {
            max2 = arr[i];
        }
    }

    return max2;
}

const numbers = [23, 89, 6, 29, 56, 45, 77, 32];
const secondMaxNumber = SecondMaximum(numbers);
console.log("Second Maximum number is", secondMaxNumber);