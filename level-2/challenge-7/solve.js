
//! Solving
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false

/**
 ** Explanation:
 * Angka kurang dari atau sama dengan 1 bukan prima.
 * Perulangan dari 2 hingga akar kuadrat n untuk memeriksa apakah n dapat dibagi tanpa sisa.
 * Jika ada pembagi, angka bukan prima.
 */