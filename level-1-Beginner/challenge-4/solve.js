

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Masukkan sebuah angka: ", (angka) => {
  const num = parseInt(angka, 10);
  if (num % 2 === 0) {
    console.log(`${num} adalah bilangan genap.`);
  } else {
    console.log(`${num} adalah bilangan ganjil.`);
  }
  rl.close();
});


//* Penjelasan:
//* Operator % digunakan untuk mendapatkan sisa pembagian.
//* Jika sisa pembagian dengan 2 adalah 0, maka angka tersebut genap.