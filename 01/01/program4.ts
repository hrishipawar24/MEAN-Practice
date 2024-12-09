/*
4. Write a typescript program which contains one function named as ChkPrime. That function should accept one number and it should return true if the given number is prime and otherwise return false.

Input  : 11
Output : It is prime number

*/
function ChkPrime(num: number): boolean {
    // Handle edge cases: numbers less than 2 are not prime
    if (num <= 1) {
      return false;
    }
  
    // Efficiently check divisibility up to the square root of the number
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    // If no divisors found, the number is prime
    return true;
  }
  
  // Example usage:
  const numberToCheck = 11;
  const isPrime = ChkPrime(numberToCheck);
  
  if (isPrime) {
    console.log(`${numberToCheck} is a prime number`);
  } else {
    console.log(`${numberToCheck} is not a prime number`);
  }