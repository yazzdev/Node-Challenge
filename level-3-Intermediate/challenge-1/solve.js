
//* Solving

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let userName = null;

app.get('/greetings', (req, res) => {
  const message = userName ? `Hello, ${userName}!` : 'Hello, World!';
  res.json({ message });
});

app.post('/greetings', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Name is required.' });
  }
  userName = name;
  res.json({ message: `Hello, ${name}!` });
});

app.put('/greetings', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Name is required.' });
  }
  userName = name;
  res.json({ message: `Name updated to ${name}.` });
});

app.delete('/greetings', (req, res) => {
  userName = null;
  res.json({ message: 'Greetings deleted.' });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

/**
 ** Explanation:
 * GET: Memeriksa apakah userName ada dan memberikan respons yang sesuai.
 * POST: Menyimpan nama dari body request.
 * PUT: Memperbarui nama dan memberikan respons konfirmasi.
 * DELETE: Menghapus nilai userName dan memberikan respons.
 */