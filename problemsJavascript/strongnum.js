let num = 145; 

const factorial = (n) => {
  return n <= 1 ? 1 : n * factorial(n - 1);
};

let digits = num.toString().split('');

let sumOfFactorials = digits.reduce((acc, digit) => acc + factorial(parseInt(digit)), 0);

if (sumOfFactorials === num) {
  console.log(`${num} is a Strong number.`);
} else {
  console.log(`${num} is not a Strong number.`);
}
