const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();

// konfigurasi untuk koneksi ke database
const pool = new Pool({
  user: 'username',
  host: 'localhost',
  database: 'database_name',
  password: 'password',
  port: 5432,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// endpoint untuk mengambil data
app.get('/data', (req, res) => {
  pool.query('SELECT * FROM table_name', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});

// endpoint untuk menambah data
app.post('/data', (req, res) => {
  const { column1, column2, column3 } = req.body;

  pool.query(
    'INSERT INTO table_name (column1, column2, column3) VALUES ($1, $2, $3)',
    [column1, column2, column3],
    (error) => {
      if (error) {
        throw error;
      }
      res.status(201).send(`Data berhasil ditambahkan.`);
    },
  );
});

// endpoint untuk memperbarui data
app.put('/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { column1, column2, column3 } = req.body;

  pool.query(
    'UPDATE table_name SET column1 = $1, column2 = $2, column3 = $3 WHERE id = $4',
    [column1, column2, column3, id],
    (error) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`Data berhasil diperbarui.`);
    },
  );
});

// endpoint untuk menghapus data
app.delete('/data/:id', (req, res) => {
  const id = parseInt(req.params.id);

  pool.query('DELETE FROM table_name WHERE id = $1', [id], (error) => {
    if (error) {
      throw error;
    }
    res.status(200).send(`Data berhasil dihapus.`);
  });
});

app.listen(3000, () => {
  console.log('Server berjalan pada port 3000.');
});
