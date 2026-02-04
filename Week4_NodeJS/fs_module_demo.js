/**
 * Node.js Core Module: File System (fs)
 * Demonstrates:
 * - Creating files
 * - Writing sync vs async
 * - Reading files
 * - Appending content
 */

const fs = require("fs");
const path = require("path");

// File path
const filePath = path.join(__dirname, "notes.txt");

// 1. Write File (Synchronous)
console.log("Writing file synchronously...");
fs.writeFileSync(filePath, "Hello! This is Week 4 Node.js FS Module.\n");

console.log("✅ Sync Write Done");

// 2. Append File (Asynchronous)
console.log("Appending asynchronously...");

fs.appendFile(filePath, "This line was added asynchronously.\n", (err) => {
  if (err) {
    console.error("❌ Append Error:", err);
    return;
  }

  console.log("✅ Async Append Done");

  // 3. Read File (Async)
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.error("❌ Read Error:", err);
      return;
    }

    console.log("\n📌 File Content:\n");
    console.log(data);
  });
});
