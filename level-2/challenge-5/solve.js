
//! Solving
function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]
console.log(filterEvenNumbers([7, 9, 13])); // Output: []

/**
 ** Explanation:
 * filter() membuat array baru dengan elemen yang memenuhi kondisi.
 * num % 2 === 0 memeriksa apakah angka genap.
 */