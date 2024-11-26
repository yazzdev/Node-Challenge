
//* Solving

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter countdown time in seconds: ', (input) => {
  let seconds = parseInt(input, 10);
  if (isNaN(seconds) || seconds <= 0) {
    console.log('Invalid input.');
    rl.close();
    return;
  }

  const timer = setInterval(() => {
    console.log(seconds);
    seconds--;
    if (seconds < 0) {
      clearInterval(timer);
      console.log('Countdown complete!');
      rl.close();
    }
  }, 1000);
});

/**
 ** Explanation:
 * setInterval() digunakan untuk mencetak angka setiap detik.
 * Ketika waktu habis, clearInterval() menghentikan timer, dan program selesai.
 */