
//! Solving
function fibonacciSum(n) {
  let a = 0, b = 1, sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += a;
    const temp = a + b;
    a = b;
    b = temp;
  }
  return sum;
}

console.log(fibonacciSum(5)); // Output: 12
console.log(fibonacciSum(7)); // Output: 33

/**
 ** Explanation:
 * Variabel a dan b digunakan untuk melacak dua elemen terakhir Fibonacci.
 * Setiap iterasi menambahkan a ke sum dan memperbarui nilai a dan b.
 */