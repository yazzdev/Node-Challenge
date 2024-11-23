
//! Solving
function findMax(arr) {
  return Math.max(...arr);
}

console.log(findMax([1, 5, 3, 9, 2])); // Output: 9
console.log(findMax([-10, -20, -5])); // Output: -5

/**
 ** Explanation:
 * Operator ... (spread) membongkar array menjadi elemen individual.
 * Math.max() mencari nilai terbesar dari daftar elemen.
 */