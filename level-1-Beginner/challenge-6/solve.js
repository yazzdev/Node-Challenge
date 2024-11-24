
//* Solving

const fs = require('fs');

const filePath = './example.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    return console.error('Error reading file:', err.message);
  }
  const wordCount = data.split(/\s+/).filter(word => word).length;
  console.log(`Word Count: ${wordCount}`);
});

/**
 ** Explanation:
 * File dibaca sebagai string menggunakan fs.readFile() dengan encoding utf8.
 * split(/\s+/) membagi string berdasarkan spasi, dan filter() memastikan array hanya berisi kata-kata.
 */