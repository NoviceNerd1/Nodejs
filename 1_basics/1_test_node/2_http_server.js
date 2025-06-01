const http = require("http");
const url = require("url");

const hostname = "127.0.0.1";
const port = 8000;

function routeHandler(req, res) {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname.replace(/^\/+|\/+$/g, "").toLowerCase();
  const method = req.method.toUpperCase();

  // ✅ CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Preflight request for CORS (Browser sends this before actual request)
  if (method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  res.setHeader("Content-Type", "application/json");

  if (method === "GET" && path === "") {
    res.writeHead(200);
    res.end(JSON.stringify({ message: "Welcome to the Home Page 🚀" }));
  } else if (method === "GET" && path === "status") {
    res.writeHead(200);
    res.end(JSON.stringify({ status: "OK", timestamp: Date.now() }));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: "Route Not Found" }));
  }
}

const server = http.createServer((req, res) => {
  try {
    routeHandler(req, res);
  } catch (err) {
    console.error("Unhandled Error:", err);
    if (!res.headersSent) {
      res.writeHead(500);
      res.end(JSON.stringify({ error: "Internal Server Error" }));
    }
  }
});

server.listen(port, hostname, () => {
  console.log(`✅ Server running at http://${hostname}:${port}/`);
});

































