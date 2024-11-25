
//* Solving

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Welcome to my Node.js server!');
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

/**
 ** Explanation:
 * Server dibuat menggunakan http.createServer().
 * Output teks dikirim ke browser menggunakan response.end().
 */