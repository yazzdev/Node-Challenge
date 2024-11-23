
//! Solving
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5)); // Output: 120
console.log(factorial(3)); // Output: 6

/**
 ** Explanation:
 * Variabel result diinisialisasi dengan 1.
 * Perulangan for dari 1 sampai n, setiap iterasi mengalikan nilai result dengan i.
 * Mengembalikan hasil akhir.
 */