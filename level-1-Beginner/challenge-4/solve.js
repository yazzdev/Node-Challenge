
//* Solving

const seconds = parseInt(process.argv[2]);

console.log(`Timer started for ${seconds} seconds...`);
setTimeout(() => {
  console.log("Timer selesai!");
}, seconds * 1000);

/**
 ** Explanation:
 * setTimeout menjalankan fungsi setelah durasi tertentu.
 * CLI input diambil dari process.argv dan dikonversi ke milidetik untuk timer.
 */