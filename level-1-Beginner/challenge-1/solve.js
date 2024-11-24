
//* Solving

const fs = require('fs');
const path = require('path');

const filePath = './example.txt';

fs.stat(filePath, (err, stats) => {
  if (err) {
    return console.error('Error reading file:', err.message);
  }
  console.log(`File Name: ${path.basename(filePath)}`);
  console.log(`File Size: ${stats.size} bytes`);
  console.log(`File Type: ${path.extname(filePath)}`);
  console.log(`Last Modified: ${stats.mtime}`);
});

/**
 ** Explanation:
 * fs.stat() digunakan untuk mengambil informasi file, seperti ukuran dan waktu modifikasi terakhir.
 * path.basename() memberikan nama file, sementara path.extname() memberikan tipe file.
 * Semua informasi file ditampilkan menggunakan console.log().
 */