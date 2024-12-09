// maximum.ts
function Maximum(arr: number[]): number {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

const numbers = [23, 89, 6, 29, 56, 45, 77, 32];
const maxNumber = Maximum(numbers);
console.log("Maximum number is", maxNumber);