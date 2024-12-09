// armstrong.ts
const ChkArmstrong = (num: number): boolean => {
    const originalNum = num;
    let sum = 0;
    let digits = num.toString().length;

    while (num > 0) {
        const digit = num % 10;
        sum += Math.pow(digit, digits);
        num = Math.floor(num / 10);
    }

    return sum === originalNum;
};

const number = 153;
if (ChkArmstrong(number)) {
    console.log("It is Armstrong number");
} else {
    console.log("It is not Armstrong number");
}