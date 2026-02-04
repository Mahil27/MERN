/**
 * Sync vs Async Example
 * Shows blocking vs non-blocking behavior
 */

const fs = require("fs");

console.log("Start Program");

// Sync Read (Blocking)
const dataSync = fs.readFileSync("notes.txt", "utf-8");
console.log("Sync File Read Completed");

// Async Read (Non-blocking)
fs.readFile("notes.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log("Async File Read Completed");
});

console.log("End Program");
