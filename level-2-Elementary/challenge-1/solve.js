
//* Solving

const readline = require('readline');

const exchangeRates = {
  IDR: 15000,
  EUR: 0.9,
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter amount in USD: ', (amount) => {
  const usd = parseFloat(amount);
  rl.question('Convert to (IDR/EUR): ', (currency) => {
    const rate = exchangeRates[currency.toUpperCase()];
    if (rate) {
      const converted = usd * rate;
      console.log(`${usd} USD = ${converted.toLocaleString()} ${currency.toUpperCase()}`);
    } else {
      console.log('Invalid currency code.');
    }
    rl.close();
  });
});

/**
 ** Explanation:
 * Program menerima jumlah dalam USD dan kode mata uang tujuan.
 * Nilai tukar mata uang disimpan dalam objek exchangeRates.
 * Hasil konversi dihitung menggunakan nilai tukar yang relevan.
 */