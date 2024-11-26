
//* Solving

const input = 'hello world, this is node.js!';

const capitalized = input
  .split(' ')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');

console.log('Capitalized Sentence:', capitalized);

/**
 ** Explanation:
 * Kalimat dipecah menjadi kata-kata, lalu setiap kata dimodifikasi dengan huruf pertama diubah menjadi huruf besar.
 */