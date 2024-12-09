/*
5. Write a typescript program which contains one function named as Fibonacci. That function accept one number from user and print Fibonacci series till that number.

Input  : 21
Output : 1 1 2 3 5 8 13 21

*/
function Fibonacci(limit: number): void {
    let a = 0, b = 1;
    console.log("Fibonacci series:");
    while (a <= limit) {
        console.log(a);
        [a, b] = [b, a + b];
    }
}

// function
const fibLimit = 21;
Fibonacci(fibLimit);
