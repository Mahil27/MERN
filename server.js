// server.js

const http = require("http");
const fs = require("fs");
const os = require("os");
const path = require("path");

const PORT = 3000;

const logFile = path.join(__dirname, "visitors.log");
const backupFile = path.join(__dirname, "backup.log");

// Format uptime
function formatUptime(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  return `${hrs}h ${mins}m ${secs}s`;
}

// Convert bytes to GB
function toGB(bytes) {
  return (bytes / (1024 ** 3)).toFixed(2);
}

const server = http.createServer((req, res) => {
  const { url, method } = req;

  // GET /visit
  if (method === "GET" && url === "/visit") {
    const timestamp = new Date().toISOString() + "\n";

    fs.appendFile(logFile, timestamp, (err) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        return res.end("Error writing log");
      }

      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Visit logged successfully");
    });
  }

  // GET /logs
  else if (method === "GET" && url === "/logs") {
    fs.readFile(logFile, "utf8", (err, data) => {
      if (err) {
        res.writeHead(200, { "Content-Type": "text/plain" });
        return res.end("No logs found");
      }

      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(data);
    });
  }

  // GET /copy-logs
  else if (method === "GET" && url === "/copy-logs") {
    fs.copyFile(logFile, backupFile, (err) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        return res.end("Error copying logs");
      }

      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Logs copied to backup.log");
    });
  }

  // GET /clear-logs
  else if (method === "GET" && url === "/clear-logs") {
    fs.unlink(logFile, (err) => {
      if (err) {
        res.writeHead(200, { "Content-Type": "text/plain" });
        return res.end("Log file already cleared or not found");
      }

      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Logs cleared successfully");
    });
  }

  // GET /system-info
  else if (method === "GET" && url === "/system-info") {
    const cpus = os.cpus();

    const systemInfo = {
      hostname: os.hostname(),
      osPlatform: os.platform(),
      cpuModel: cpus[0].model,
      cpuCores: cpus.length,
      totalMemoryGB: toGB(os.totalmem()),
      freeMemoryGB: toGB(os.freemem()),
      uptime: formatUptime(os.uptime()),
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(systemInfo, null, 2));
  }

  // 404 Route
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});