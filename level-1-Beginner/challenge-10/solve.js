
//* Solving

const fs = require('fs');
const readline = require('readline');

const filePath = './todos.json';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const loadTodos = () => {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  }
  return [];
};

const saveTodos = (todos) => {
  fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));
};

rl.question('Enter a new to-do: ', (task) => {
  const todos = loadTodos();
  todos.push(task);
  saveTodos(todos);
  console.log('To-Do List:');
  todos.forEach((todo, index) => {
    console.log(`${index + 1}. ${todo}`);
  });
  rl.close();
});

/**
 ** Explanation:
 * Data to-do dimuat dari file JSON menggunakan fs.readFileSync().
 * Data baru ditambahkan dan disimpan kembali dengan fs.writeFileSync().
 */