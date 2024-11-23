
//! Solving
function arrayToObject(arr) {
  return arr.reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}

console.log(arrayToObject([["name", "John"], ["age", 30]])); // Output: { name: "John", age: 30 }
console.log(arrayToObject([["country", "USA"], ["capital", "Washington"]])); // Output: { country: "USA", capital: "Washington" }

/**
 ** Explanation:
 * reduce() digunakan untuk mengubah array menjadi objek.
 * Setiap elemen array (berupa pasangan [key, value]) ditambahkan ke objek obj.
 */