
//! Solving
function countCharacter(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

console.log(countCharacter("javascript", "a")); // Output: 2
console.log(countCharacter("hello world", "l")); // Output: 3

/**
 ** Explanation:
 * Perulangan for digunakan untuk iterasi setiap karakter dalam string.
 * if (str[i] === char) memeriksa apakah karakter cocok.
 * Variabel count bertambah setiap kali ada kecocokan.
 */