
//! Solving
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false

/**
 ** Explanation:
 * split(), reverse(), dan join() membalikkan string.
 * Membandingkan string asli dengan string terbalik.
 */