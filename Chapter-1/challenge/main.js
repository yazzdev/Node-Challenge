
/**
 * * IS : User memasukan data dari terminal untuk melakukan kalkulasi sederhana
 * * FS : Sistem menampilkan hasil kalkulasi dari masukan User
 * TODO : Membuat Sistem kalkulasi sederhana
 * 
 * * Pemilik   : Dyaz Amrullah
 * * Kelas     : Back-End JavaScript
 * * Challenge : Chapter 01
*/

import { question } from 'readline-sync';

class Calculation {
  constructor(num1, op, num2) {
    this.x = parseInt(num1);
    this.y = parseInt(num2);
    this.op = op;
  }

  //TODO Membuat method kalkulator sederhana
  kalkulasi = function () {
    let x = this.x;
    let y = this.y;
    let op = this.op;
    let kalkulasi = this.kalkulasi;
    let kalkulasi2 = this.kalkulasi2;

    if (op === "+") {
      kalkulasi = x + y;
    } else if (op === "-") {
      kalkulasi = x - y;
    } else if (op === "/") {
      if (isFinite(x / y)) {
        kalkulasi = x / y;
      } else {
        kalkulasi = "WARNING : Tidak Bisa Membangi Nilai dengan 0!!"; //! Pemberitahuan kesalahan input
      }
    } else if (op === "*") {
      kalkulasi = x * y;
    } else if (op === "%") {
      kalkulasi = x % y;
    } else if (op === "**") {
      kalkulasi = Math.pow(x, y);
      kalkulasi2 = Math.pow(kalkulasi, 1 / y);
      console.log(`\n>> Hasil : Akar dari ${kalkulasi} = ${kalkulasi2}`);
    } else {
      kalkulasi = "WARNING : Harap masukan data yang benar!!"; //! Pemberitahuan kesalahan input
    }

    console.log(`\n>> Hasil : ${x} ${op} ${y} = ${kalkulasi}`);
  }

  //TODO Membuat method untuk menghitung luas persegi
  static luasPersegi = (sisi) => {
    try {
      let hasil = sisi ** 2;
      if (isNaN(hasil) || hasil == undefined || hasil == null) {
        return hasil = "WARNING : Harap masukan data yang benar!!"; //! Pemberitahuan kesalahan input
      } else {
        return hasil;
      }
    } catch (error) {
      console.log(error);
    }
  }

  //TODO Membuat method untuk menghitung volume kubus
  static volKubus = (sisi) => {
    try {
      let hasil = sisi ** 3;
      if (isNaN(hasil) || hasil == undefined || hasil == null) {
        return hasil = "WARNING : Harap masukan data yang benar!!"; //! Pemberitahuan kesalahan input
      } else {
        return hasil;
      }
    } catch (error) {
      console.log(error);
    }
  }

  //TODO Membuat method untuk menghitung volume kubus
  static volTabung = (jari, tinggi) => {
    try {
      let hasil = PHI * jari ** 2 * tinggi;
      if (isNaN(hasil) || hasil == undefined || hasil == null) {
        return hasil = "WARNING : Harap masukan data yang benar!!"; //! Pemberitahuan kesalahan input
      } else {
        return hasil;
      }
    } catch (error) {
      console.log(error);
    }
  }

}

const PHI = 3.14;

//TODO Membuat method untuk menampilkan hasil kalkulasi luas persegi
Calculation.tampilLuasPersegi = () => {
  console.log("\n--- Menghitung Luas Persegi ---");
  let sisi = question("Masukan Sisi : ");
  console.log('Maka Luas Persegi : ', Calculation.luasPersegi(sisi));
}

//TODO Membuat method untuk menampilkan hasil kalkulasi volume kubus
Calculation.tampilVolKubus = () => {
  console.log("\n--- Menghitung Volume Kubus ---");
  let sisi = question("Masukan Sisi : ");
  console.log('Maka Volume Kubus : ', Calculation.volKubus(sisi));
}

//TODO Membuat method untuk menampilkan hasil kalkulasi volume tabung
Calculation.tampilVolTabung = () => {
  console.log("\n--- Menghitung Volume Tabung ---");
  let jari = question("Masukan Jari-Jari : ");
  let tinggi = question("Masukan Tinggi    : ");
  console.log('Maka Volume Tabung : ', Calculation.volTabung(jari, tinggi));
}

//TODO Membuat method untuk menampilkan hasil kalkulasi kalkulator sederhana
Calculation.tampilKalkulasi = () => {
  console.log("\n--------- Menu Kalkulasi -----------");
  console.log("ket : Penjumlahan(+), Pengurangan(-)\n      Perkalian(*), Pembagian(/)\n      Sisa Bagi(%) Akar Kuadrat(**)\n");
  let num1 = question("Angka Pertama: ");
  let op = question("Operasi ('*' '/' '+' '-' '%' '**'): ");
  let num2 = question("Angka Kedua: ");
  let calc = new Calculation(num1, op, num2);
  calc.kalkulasi();
}

//TODO Membuat Menu Utama untuk memilih jenis kalkulasi
let running = true;
while (running) {
  try {
    console.log('\n--------- MENU UTAMA ---------');
    console.log(' 1. Kalkulasi                 ');
    console.log(' 2. Menghitung Luas Persegi   ');
    console.log(' 3. Menghitung Volume Kubus   ');
    console.log(' 4. Menghitung Volume tabung  ');
    console.log(' 0. Keluar                    ');
    console.log('------------------------------');
    let pil = question("Pilihan : ");
    if (pil == 0) {
      console.log("Terimakasih sudah menggunakan aplikasi ini :)");
      running = false;
    } else if (pil == 1) {
      //TODO Memanggil method kalkulasi
      let run1 = true;
      while (run1) {
        Calculation.tampilKalkulasi();
        let pil1 = question("Apakah ingin mencoba lagi? (y/n) : ").toLowerCase();
        if (pil1 === "n") {
          run1 = false;
        } else if (pil1 === "y") {
          Calculation.tampilKalkulasi();
          let pil1 = question("Apakah ingin mencoba lagi? (y/n) : ").toLowerCase();
          if (pil1 == "n") {
            run1 = false;
          }
        } else {
          console.log("\nWARNING : Harap masukan pilihan yang benar"); //! Pemberitahuan kesalahan input
          run1 = false;
        }
      }
    } else if (pil == 2) {
      //TODO Memanggil method luas persegi
      let run2 = true;
      while (run2) {
        Calculation.tampilLuasPersegi();
        let pil2 = question("Apakah ingin mencoba lagi? (y/n) : ").toLowerCase();
        if (pil2 === "n") {
          run2 = false;
        } else if (pil2 === "y") {
          Calculation.tampilLuasPersegi();
          let pil2 = question("Apakah ingin mencoba lagi? (y/n) : ").toLowerCase();
          if (pil2 == "n") {
            run2 = false;
          }
        } else {
          console.log("\nWARNING : Harap masukan pilihan yang benar"); //! Pemberitahuan kesalahan input
          run2 = false;
        }
      }
    } else if (pil == 3) {
      //TODO Memanggil method volume kubus
      let run3 = true;
      while (run3) {
        Calculation.tampilVolKubus();
        let pil3 = question("Apakah ingin mencoba lagi? (y/n) : ".toLowerCase());
        if (pil3 === "n") {
          run3 = false;
        } else if (pil3 === "y") {
          Calculation.tampilVolKubus()
          let pil3 = question("Apakah ingin mencoba lagi? (y/n) : ".toLowerCase());
          if (pil3 == "n") {
            run3 = false;
          }
        } else {
          console.log("\nWARNING : Harap masukan pilihan yang benar"); //! Pemberitahuan kesalahan input
          run3 = false;
        }
      }
    } else if (pil == 4) {
      //TODO Memanggil method volume tabung
      let run4 = true;
      while (run4) {
        Calculation.tampilVolTabung();
        let pil4 = question("\nApakah ingin mencoba lagi? (y/n) : ".toLowerCase());
        if (pil4 === "n") {
          run4 = false;
        } else if (pil4 === "y") {
          Calculation.tampilVolTabung();
          let pil4 = question("\nApakah ingin mencoba lagi? (y/n) : ".toLowerCase());
          if (pil4 == "n") {
            run4 = false;
          }
        } else {
          console.log("\nWARNING : Harap masukan pilihan yang benar"); //! Pemberitahuan kesalahan input
          run4 = false;
        }
      }

    } else {
      console.log("\nWARNING : Masukan Pilihan yang benar"); //! Pemberitahuan kesalahan input
    }
  } catch (error) {
    console.log(error);
  }
}