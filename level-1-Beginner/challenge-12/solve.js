
//* Solving

const length = parseInt(process.argv[2]);
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
let password = "";

for (let i = 0; i < length; i++) {
  const randomIndex = Math.floor(Math.random() * chars.length);
  password += chars[randomIndex];
}

console.log(`Generated password: ${password}`);

/**
 ** Explanation:
 * Math.random() digunakan untuk memilih indeks karakter secara acak.
 * Panjang password ditentukan oleh argumen CLI.
 * Password dibangun dengan menambahkan karakter satu per satu ke variabel password.
 */