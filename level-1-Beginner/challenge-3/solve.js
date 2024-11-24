
//* Solving

const fs = require('fs');

const filePath = './example.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    return console.error('Error reading file:', err.message);
  }
  const reversedContent = data.split('').reverse().join('');
  console.log(reversedContent);
});

/**
 ** Explanation:
 * File dibaca sebagai teks string menggunakan fs.readFile() dengan encoding utf8.
 * Isi file dibalik menggunakan metode string split, reverse, dan join.
 */