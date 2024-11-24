
//* Solving

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter a number: ', (input) => {
  const num = parseInt(input);
  if (isNaN(num) || num <= 1) {
    console.log(`${input} is not a valid number.`);
    rl.close();
    return;
  }

  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  console.log(isPrime ? `${num} is a prime number.` : `${num} is not a prime number.`);
  rl.close();
});

/**
 ** Explanation:
 * Input angka diterima menggunakan modul readline.
 * Bilangan prima diperiksa dengan membagi angka dari 2 hingga akar kuadratnya.
 * Jika ada pembagi selain 1 dan dirinya sendiri, angka tersebut bukan bilangan prima.
 */