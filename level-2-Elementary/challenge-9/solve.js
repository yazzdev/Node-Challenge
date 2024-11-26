
//* Solving

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

rl.question('Enter a number: ', (input) => {
  const num = parseInt(input, 10);
  if (isNaN(num) || num < 0) {
    console.log('Invalid number.');
  } else {
    console.log(`Factorial of ${num} is ${factorial(num)}`);
  }
  rl.close();
});

/**
 ** Explanation:
 * Fungsi rekursif memanggil dirinya sendiri hingga mencapai kasus dasar n === 0.
 */