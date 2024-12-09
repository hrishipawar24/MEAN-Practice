// summation.ts
function Summation(arr: number[]): number {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const numbers = [23, 6, 7, 4, 5, 7];
const addition = Summation(numbers);
console.log("Addition is", addition);