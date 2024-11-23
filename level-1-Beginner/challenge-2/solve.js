
//* readline digunakan untuk membaca input dari pengguna
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Penjumlahan 2 angka");

rl.question("Masukkan angka pertama: ", (angka1) => {
  rl.question("Masukkan angka kedua: ", (angka2) => {

    //* parseFloat() mengubah string input menjadi angka desimal
    const hasil = parseFloat(angka1) + parseFloat(angka2);
    console.log(`Hasil penjumlahan: ${hasil}`);
    rl.close();
  });
});

