
//* Solving

const fs = require('fs');

const filePath = './quotes.json';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    return console.error('Error reading file:', err.message);
  }
  const quotes = JSON.parse(data);
  const randomIndex = Math.floor(Math.random() * quotes.length);
  console.log(`Random Quote: "${quotes[randomIndex]}"`);
});

/**
 ** Explanation:
 * File JSON dibaca menggunakan fs.readFile().
 * Data di-parse menjadi array menggunakan JSON.parse().
 * Math.random() digunakan untuk memilih indeks acak dari array.
 */