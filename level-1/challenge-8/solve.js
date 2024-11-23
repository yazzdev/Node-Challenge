
//! Solving
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Masukkan sisi persegi: ", (sisi) => {
  const luas = sisi * sisi;
  console.log(`Luas persegi adalah: ${luas}`);
  rl.close();
});
