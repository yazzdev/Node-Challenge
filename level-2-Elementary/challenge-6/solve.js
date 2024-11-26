
//* Solving

const input = 'This is a test. This test is simple.';

const words = input.toLowerCase().replace(/[^\w\s]/g, '').split(' ');
const wordCount = {};

words.forEach(word => {
  wordCount[word] = (wordCount[word] || 0) + 1;
});

console.log('Word Frequencies:');
for (const [word, count] of Object.entries(wordCount)) {
  console.log(`${word}: ${count}`);
}

/**
 ** Explanation:
 * Kalimat dinormalisasi menjadi huruf kecil dan tanda baca dihapus menggunakan replace().
 * Kata-kata dihitung frekuensinya dengan objek wordCount.
 */