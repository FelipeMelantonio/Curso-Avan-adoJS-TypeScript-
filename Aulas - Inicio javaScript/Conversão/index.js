let num1 = 0.7;
let num2 = '1.1';

num2 = Number.parseInt(num2)

num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;

num1 = Number(num1.toFixed(2));
console.log(num1);
console.log(Number.isInteger(num1));