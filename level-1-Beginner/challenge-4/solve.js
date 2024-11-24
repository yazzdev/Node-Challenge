
//* Solving

const fs = require('fs');

const logMessage = (message) => {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] ${message}\n`;
  fs.appendFile('log.txt', logEntry, (err) => {
    if (err) {
      return console.error('Error writing to log file:', err.message);
    }
    console.log('Log added successfully!');
  });
};

logMessage('Log message 1');
logMessage('Log message 2');

/**
 ** Explanation:
 * fs.appendFile() digunakan untuk menambahkan log baru ke file log.txt.
 * Timestamp dibuat menggunakan new Date().toISOString() untuk format waktu yang standar.
 */