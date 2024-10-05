let num = 153; 
let digits = num.toString().split('');
let numDigits = digits.length;
let sum = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), numDigits), 0);
if (sum === num) {
  console.log(`${num} is an Armstrong number.`);
} else {
  console.log(`${num} is not an Armstrong number.`);
}
