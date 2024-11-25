
//* Solving

const input = 'A man a plan a canal Panama';

const normalized = input.toLowerCase().replace(/[^a-z0-9]/g, '');
const isPalindrome = normalized === normalized.split('').reverse().join('');

console.log(isPalindrome ? 'The string is a palindrome.' : 'The string is not a palindrome.');

/**
 ** Explanation:
 * String dinormalisasi dengan toLowerCase() dan replace() untuk menghapus spasi dan karakter non-alfanumerik.
 * String dibandingkan dengan versi terbaliknya untuk memeriksa apakah palindrome.
 */