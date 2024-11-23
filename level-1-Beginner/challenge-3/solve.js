
//* Solving

const fs = require('fs');
const path = require('path');

// Nama file input dan output
const inputFile = 'input.txt';
const outputFile = 'reversed.txt';

// Mengecek apakah file input ada
if (!fs.existsSync(inputFile)) {
  console.error(`Error: File ${inputFile} tidak ditemukan.`);
  process.exit(1); // Keluar dengan status error
}

try {
  // Membaca file input
  const input = fs.readFileSync(inputFile, 'utf-8');

  // Membalikkan isi file
  const reversed = input.split('').reverse().join('');

  // Mengecek apakah file output sudah ada
  if (fs.existsSync(outputFile)) {
    console.log(`File ${outputFile} sudah ada. Data akan ditimpa.`);
  }

  // Menyimpan hasil ke file output
  fs.writeFileSync(outputFile, reversed);

  console.log(`File reversed dan disimpan ke ${outputFile}`);
} catch (err) {
  console.error('Terjadi kesalahan saat membaca atau menulis file:', err.message);
  process.exit(1); // Keluar dengan status error
}


/**
 ** Explanation:
 * fs.readFileSync() membaca konten file sebagai string.
 * split('') mengubah string menjadi array karakter, reverse() membalik array, dan join('') menggabungkan kembali menjadi string.
 * fs.writeFileSync() menyimpan hasil ke file baru.
 */