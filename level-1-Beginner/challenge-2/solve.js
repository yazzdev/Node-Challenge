
//* Solving

const fs = require('fs');

const directoryPath = '../challenge-2';

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.error('Error reading directory:', err.message);
  }
  console.log('Files in Directory:');
  files.forEach((file, index) => {
    console.log(`${index + 1}. ${file}`);
  });
});

/**
 ** Explanation:
 * fs.readdir() membaca semua nama file di dalam direktori.
 * Fungsi forEach digunakan untuk mencetak setiap nama file dengan nomor urut.
 */