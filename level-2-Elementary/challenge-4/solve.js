
//* Solving

const fs = require('fs');
const dirPath = '../challenge-4'; // Ganti dengan direktori yang diinginkan

fs.readdir(dirPath, (err, files) => {
  if (err) {
    return console.error('Error reading directory:', err.message);
  }
  console.log('Files in directory:');
  files.forEach((file, index) => {
    console.log(`${index + 1}. ${file}`);
  });
});

/**
 ** Explanation:
 * fs.readdir() membaca isi direktori sebagai array nama file.
 * forEach digunakan untuk menampilkan setiap nama file.
 */