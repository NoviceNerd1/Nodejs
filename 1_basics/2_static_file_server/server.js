const http = require("http")
const fs = require("fs")
const path = require("path")

const hostname= "127.0.0.1";
const port = 3000;
const publicDir = path.join(__dirname,"public")

const mineTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
}

const server = http.createServer((req,res)=>{
	let filePath = req.url === "/"? "/index.html":req.url;
	filePath = path.join(publicDir, filePath);

	const extname = String(path.extname(filePath)).toLowerCase();
	const contentType = mineTypes[extname] || "application/octet-stream";

	fs.readFile(filePath,(err,content)=>{
		if(err){
			if(err.code==="ENOENT"){
				res.writeHead(404,{"Content-Type":"text/html"});
				res.end("<h1>404: File Not Found</h1>");
			}else{
				res.writeHead(500);
				res.end(`Server Error: ${err.code}`);
			}
		}else{
			res.writeHead(200,{"Content-Type":contentType});
			res.end(content);
		}
	});
});


server.listen(port,hostname,()=>{
	console.log(`Static file server running at http://${hostname}:${port}`)
})


















































