// load http module
const http = require("http")

// hostname IP, port for communication
const hostname= "127.0.0.1";
const port = 8000;

// create HTTP server
const server = http.createServer(function(req,res){
	// set the respose HTTP header with HTTP status and content type
	res.writeHead(200,{"Content-Type":"text/plain" });

	// send the reponse body "Hello Rishi"
	res.end();
});







// prints a log once the server starts listening
server.listen(port, hostname,function(){
	console.log(`Server is running at http://${hostname}:${port}/`);
})
























