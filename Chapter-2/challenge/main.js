/**
 * TODO : Membuat Sistem untuk mengelola data nilai siswa
 * * IS : User memasukan data nilai siswa dari terminal
 * * FS : Sistem menampilkan hasil dari pengolahan data nilai-nilai yang dimasukan
 * 
 * * Pemilik   : Dyaz Amrullah
 * * Kelas     : Back-End JavaScript
 * * Challenge : Chapter 02
*/

const readline = require('readline');

class NilaiSiswa {
  constructor() {
    this.data = [];
  }

  async inputNilai() {
    try {
      return await new Promise((resolve, reject) => {
        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout
        });

        console.log('Input Nilai harus berupa angka (0 s/d 100)');
        rl.setPrompt('Inputkan nilai dan ketik "q" jika sudah selesai :\n');
        rl.prompt();

        rl.on('line', (input) => {
          //TODO Validasi input
          if (input.trim().toLowerCase() === 'q') {
            rl.close();
          } else if (input.trim() === '') {
            console.log('Harap inputkan nilai atau "q" untuk keluar.');
          } else if (input.indexOf(',') !== -1) {
            console.log('Inputkan tanda titik (.) untuk menggunakan nilai desimal');
          } else if (isNaN(input.trim())) {
            console.log('Input Nilai harus berupa angka atau "q" untuk keluar.');
          } else if (input > 100 || input < 0) {
            console.log('Input Nilai harus berupa angka (0 s/d 100) atau "q" untuk keluar.');
          } else {
            const nilai = Number(input.trim());
            this.data.push(nilai);
          }
        });

        rl.on('close', () => {
          if (this.data.length === 0) {
            reject('Tidak ada data nilai yang di-inputkan.');
          } else {
            console.log('\nNilai yang diinputkan    : ' + this.data.join(', '));
            this.tampilkanNilaiTertinggiTerendah();
            this.tampilkanRataRata();
            this.tampilkanJumlahLulusTidakLulus();
            this.urutkanNilai();
            this.cariNilai(90);
            this.cariNilai(100);
            resolve(this.data);
          }
        });

        rl.on('error', (err) => {
          reject('Terjadi error: ' + err);
        });
      });
    } catch (err_1) {
      console.error(err_1);
    }
  }

  //TODO mencari nilai tertinggi dan terendah
  tampilkanNilaiTertinggiTerendah() {
    const max = Math.max(...this.data);
    const min = Math.min(...this.data);
    console.log(`Nilai tertinggi          : ${max}`);
    console.log(`Nilai terendah           : ${min}`);
  }

  //TODO mencari rata-rata nilai siswa
  tampilkanRataRata() {
    const sum = this.data.reduce((total, nilai) => total + nilai, 0);
    const rataRata = sum / this.data.length;
    console.log(`Rata-rata nilai          : ${rataRata.toFixed(1)}`);
  }

  //TODO mencari siswa yang lulus dan tidak lulus
  tampilkanJumlahLulusTidakLulus() {
    const lulus = this.data.filter(nilai => nilai >= 60);
    const tidakLulus = this.data.filter(nilai => nilai < 60);
    console.log(`Jumlah siswa lulus       : ${lulus.length}`);
    console.log(`Jumlah siswa tidak lulus : ${tidakLulus.length}`);
  }

  //TODO mengurutkan data nilai menggunakan merge sort
  urutkanNilai() {
    const mergeSort = (arr) => {
      if (arr.length <= 1) {
        return arr;
      }
      const mid = Math.floor(arr.length / 2);
      const left = arr.slice(0, mid);
      const right = arr.slice(mid);
      return merge(mergeSort(left), mergeSort(right));
    };

    const merge = (left, right) => {
      const result = [];
      let i = 0;
      let j = 0;
      while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
          result.push(left[i]);
          i++;
        } else {
          result.push(right[j]);
          j++;
        }
      }
      return result.concat(left.slice(i)).concat(right.slice(j));
    };

    const sorted = mergeSort(this.data);
    console.log(`Urutan nilai terendah ke tertinggi : ${sorted.join(', ')}`);
  }

  //TODO mencari nilai tertentu
  cariNilai(nilaiCari) {
    const siswa = this.data.filter(nilai => nilai === nilaiCari);
    if (siswa.length > 0) {
      console.log(`Siswa dengan nilai ${nilaiCari} : ${siswa.length}`);
    } else {
      console.log(`Siswa dengan nilai ${nilaiCari} : Tidak ada`);
    }
  }

}

const nilaiSiswa = new NilaiSiswa();
nilaiSiswa.inputNilai();