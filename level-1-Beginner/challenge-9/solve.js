
//* Solving

const fs = require('fs');

const filePath = './data.json';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    return console.error('Error reading file:', err.message);
  }
  const people = JSON.parse(data);
  const adults = people.filter(person => person.age > 18);
  console.log('Adults:');
  adults.forEach((person, index) => {
    console.log(`${index + 1}. ${person.name} (${person.age})`);
  });
});

/**
 ** Explanation:
 * File JSON dibaca dan diubah menjadi array menggunakan JSON.parse().
 * filter() digunakan untuk menyaring orang dengan umur di atas 18.
 */