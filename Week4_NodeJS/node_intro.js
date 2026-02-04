/**
 * Node.js Introduction
 * - Node runs JavaScript outside the browser
 * - Built on V8 Engine
 * - Uses Event Loop for async execution
 */

console.log("🚀 Node.js Program Started");

// Simulating non-blocking behavior
setTimeout(() => {
  console.log("⏳ Async Task Completed (after 2 seconds)");
}, 2000);

console.log("✅ Program End (but async still running)");
