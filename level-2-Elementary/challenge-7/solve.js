
//* Solving

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const generatePassword = (length) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};

rl.question('Enter password length: ', (input) => {
  const length = parseInt(input, 10);
  if (isNaN(length) || length <= 0) {
    console.log('Invalid length.');
  } else {
    console.log('Generated Password:', generatePassword(length));
  }
  rl.close();
});

/**
 ** Explanation:
 * Karakter acak dipilih dengan Math.random() dan ditambahkan ke string kata sandi hingga panjang yang diinginkan tercapai.
 */