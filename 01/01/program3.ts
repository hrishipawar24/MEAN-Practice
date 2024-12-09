/*
3. Write a typescript program which contains one function named as DisplayFactors. That function should accept one number and display factors of that number.

Input  : 20
Output : 1 2 4 5 10
*/
function DisplayFactors(num: number): void {
    console.log(`Factors of ${num} are:`);
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            console.log(i);
        }
    }
}

// function
const number = 20;
DisplayFactors(number);
