
//! Solving

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("Node.js")); // Output: "sj.edoN"

/**
 ** Explanation:
 * split("") memisahkan string menjadi array karakter.
 * reverse() membalikkan urutan elemen dalam array.
 * join("") menggabungkan array kembali menjadi string.
 */