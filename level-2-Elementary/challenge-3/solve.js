
//* Solving

const numbers = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = Array.from(new Set(numbers));

console.log('Unique Array:', uniqueNumbers);

/**
 ** Explanation:
 * Set adalah struktur data yang otomatis menghapus elemen duplikat.
 * Array dikonversi ke Set untuk menghapus duplikat, lalu kembali menjadi array.
 */