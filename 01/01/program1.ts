/*
1. Write a typescript program which contains one function named as Maximum. That function accepts three parameters and it should returns largest value from three input parameters.

Input  : 23 89 6
Output : Maximum number is 89
*/
function Maximum(a: number, b: number, c: number): number {
    let max = a; // Assume the first number is the largest
    if (b > max) {
        max = b; // Update max if b is larger
    }
    if (c > max) {
        max = c; // Update max if c is larger
    }
    return max;
}

// Test the function
const num1 = 23, num2 = 89, num3 = 6;
console.log(`Maximum number is ${Maximum(num1, num2, num3)}`);

