
//* Solving

const fs = require("fs");
const fileName = "tasks.json";

// Fungsi untuk membaca daftar tugas dari file JSON
function loadTasks() {
  if (fs.existsSync(fileName)) {
    const data = fs.readFileSync(fileName, "utf-8");
    return JSON.parse(data);
  }
  return [];
}

// Fungsi untuk menyimpan daftar tugas ke file JSON
function saveTasks(tasks) {
  fs.writeFileSync(fileName, JSON.stringify(tasks, null, 2));
}

const args = process.argv.slice(2);
const command = args[0];
let tasks = loadTasks(); // Memuat tugas dari file

if (command === "add") {
  const task = args.slice(1).join(" ");
  tasks.push(task);
  saveTasks(tasks);
  console.log(`Task added: ${task}`);
} else if (command === "list") {
  if (tasks.length === 0) {
    console.log("No tasks found.");
  } else {
    console.log("Task List:");
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
} else if (command === "remove") {
  const index = parseInt(args[1]) - 1;
  if (index >= 0 && index < tasks.length) {
    const removed = tasks.splice(index, 1);
    saveTasks(tasks);
    console.log(`Task removed: ${removed[0]}`);
  } else {
    console.log("Invalid task number.");
  }
} else {
  console.log("Unknown command. Use 'add', 'list', or 'remove'.");
}

/**
 ** Explanation:
 ** Persistensi Data:
 * Data tugas disimpan dan dimuat dari file tasks.json menggunakan modul fs.
 * Fungsi loadTasks membaca data dari file jika ada, atau mengembalikan array kosong jika tidak ada.
 * Fungsi saveTasks menyimpan array tugas ke dalam file JSON.
 ** Perintah CLI:
 * add [task]: Menambahkan tugas baru ke daftar dan menyimpan data ke file.
 * list: Membaca daftar dari file JSON dan mencetak semua tugas ke terminal.
 * remove [index]: Menghapus tugas berdasarkan indeks, lalu menyimpan daftar yang diperbarui ke file.
 ** Alur Kerja:
 * Program membaca data dari file saat dijalankan, memodifikasi daftar berdasarkan perintah, dan menyimpan kembali data ke file untuk menjaga persistensi.
 */