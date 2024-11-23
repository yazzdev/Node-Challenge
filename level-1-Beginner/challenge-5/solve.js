
//* Solving

const mode = process.argv[2];
const value = parseFloat(process.argv[3]);

if (mode === "c2f") {
  const fahrenheit = (value * 9 / 5) + 32;
  console.log(`${value}°C = ${fahrenheit.toFixed(2)}°F`);
} else if (mode === "f2c") {
  const celsius = (value - 32) * 5 / 9;
  console.log(`${value}°F = ${celsius.toFixed(2)}°C`);
} else {
  console.log("Invalid mode. Use 'c2f' or 'f2c'.");
}

/**
 ** Explanation:
 * CLI input menentukan mode konversi dan nilai suhu.
 * Rumus diterapkan sesuai mode dan hasil dicetak dengan format yang sesuai.
 */