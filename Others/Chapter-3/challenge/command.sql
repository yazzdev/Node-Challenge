CREATE DATABASE db_challenge_3;

CREATE TABLE komponen (
  id_komponen SERIAL,
  nama VARCHAR(50) NOT NULL,
  deskripsi VARCHAR(250) NOT NULL,
  PRIMARY KEY (id_komponen)
);

INSERT INTO komponen (nama, deskripsi) VALUES
  ('Coklat', 'Olahan dasar'),
  ('Krim Susu', 'Toping'),
  ('Singkong', 'Olahan dasar'),
  ('Kacang almond', 'Toping'),
  ('Minyak Goreng', 'Untuk menggoreng'),
  ('Penyedap Rasa', 'Untuk memberi rasa');

SELECT * FROM komponen ORDER BY id_komponen;

CREATE TABLE produk (
  id_produk SERIAL,
  nama VARCHAR(50) NOT NULL,
  kuantitas INT,
  PRIMARY KEY (id_produk)
);

INSERT INTO produk (nama, kuantitas) VALUES
  ('Oreo', 50),
  ('Qtela', 50),
  ('beng-beng', 100),
  ('Aqua', 10);

SELECT * FROM produk ORDER BY id_produk;

UPDATE produk
SET nama = 'Qtela Singkong', kuantitas = 100
WHERE id_produk = 2;

DELETE FROM produk WHERE id_produk = 4;

SELECT * FROM produk ORDER BY id_produk;

CREATE TABLE olahan (
  id_olahan SERIAL,
  id_produk INT,
  id_komponen INT NOT NULL,
  PRIMARY KEY (id_olahan),
  CONSTRAINT "FK_olahan.id_produk"
    FOREIGN KEY (id_produk)
      REFERENCES produk(id_produk),
  CONSTRAINT "FK_olahan.id_komponen"
    FOREIGN KEY (id_komponen)
      REFERENCES komponen(id_komponen)
);

INSERT INTO olahan (id_produk, id_komponen) VALUES
  (1, 1),
  (1, 2),
  (2, 3),
  (2, 5),
  (2, 6),
  (3, 1),
  (3, 2),
  (3, 4);

SELECT * FROM olahan ORDER BY id_olahan;

SELECT
  olahan.id_olahan,
  produk.nama AS nama_produk,
  komponen.nama AS nama_komponen,
  komponen.deskripsi
FROM produk, komponen, olahan
WHERE
  olahan.id_produk = produk.id_produk
  AND olahan.id_komponen = komponen.id_komponen
ORDER BY id_olahan;

CREATE TABLE pemasok (
  id_pemasok SERIAL,
  nama VARCHAR(50) NOT NULL,
  telp VARCHAR(12) NOT NULL,
  alamat TEXT NOT NULL,
  PRIMARY KEY (id_pemasok)
);

INSERT INTO pemasok (nama, telp, alamat) VALUES
  ('Dyaz', '082100112233', 'Bandung'),
  ('Sabrina', '082112345678', 'Tangerang'),
  ('Ucup', '021098900112', 'Banten');

SELECT * FROM pemasok ORDER BY id_pemasok;

UPDATE pemasok
SET nama = 'Dyaz Amrullah', alamat = 'Jakarta'
WHERE id_pemasok = 1;

DELETE FROM pemasok WHERE id_pemasok = 3;

SELECT * FROM pemasok ORDER BY id_pemasok;

CREATE TABLE pasokan (
  id_pasokan SERIAL,
  id_pemasok INT,
  id_komponen INT,
  PRIMARY KEY (id_pasokan),
  CONSTRAINT "FK_pasokan.id_komponen"
    FOREIGN KEY (id_komponen)
      REFERENCES komponen(id_komponen),
  CONSTRAINT "FK_pasokan.id_pemasok"
    FOREIGN KEY (id_pemasok)
      REFERENCES pemasok(id_pemasok)
);

INSERT INTO pasokan (id_pemasok, id_komponen) VALUES
  (1, 1),
  (1, 2),
  (1, 5),
  (2, 3),
  (2, 4),
  (2, 5);

SELECT * FROM pasokan ORDER BY id_pasokan;

SELECT
  pasokan.id_pasokan,
  pemasok.nama AS nama_pemasok,
  komponen.nama AS nama_komponen,
  komponen.deskripsi
FROM pemasok, komponen, pasokan
WHERE
  pasokan.id_pemasok = pemasok.id_pemasok
  AND pasokan.id_komponen = komponen.id_komponen
ORDER BY id_pasokan;

SELECT
  *
FROM pemasok
JOIN pasokan ON pasokan.id_pemasok = pemasok.id_pemasok
JOIN komponen ON pasokan.id_komponen = komponen.id_komponen
JOIN olahan ON olahan.id_komponen = komponen.id_komponen
JOIN produk ON olahan.id_produk = produk.id_produk
ORDER BY id_olahan;

SELECT
  olahan.id_olahan,
  produk.nama AS nama_produk,
  komponen.nama AS nama_komponen,
  komponen.deskripsi,
  pemasok.nama AS nama_pemasok_komponen
FROM pemasok
JOIN pasokan ON pasokan.id_pemasok = pemasok.id_pemasok
JOIN komponen ON pasokan.id_komponen = komponen.id_komponen
JOIN olahan ON olahan.id_komponen = komponen.id_komponen
JOIN produk ON olahan.id_produk = produk.id_produk
ORDER BY id_olahan;

SELECT
  produk.nama AS nama_produk,
  komponen.nama AS nama_komponen,
  komponen.deskripsi,
  pemasok.nama AS nama_pemasok_komponen
FROM pemasok
JOIN pasokan ON pasokan.id_pemasok = pemasok.id_pemasok
JOIN komponen ON pasokan.id_komponen = komponen.id_komponen
JOIN olahan ON olahan.id_komponen = komponen.id_komponen
JOIN produk ON olahan.id_produk = produk.id_produk
WHERE produk.nama = 'Qtela Singkong';

CREATE TABLE pembeli (
  id_pembeli SERIAL,
  nama_depan VARCHAR(25) NOT NULL,
  PRIMARY KEY (id_pembeli)
);

ALTER TABLE pembeli ADD nama_belakang VARCHAR(25);

DROP TABLE pembeli;