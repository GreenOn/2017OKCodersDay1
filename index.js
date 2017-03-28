var http = require('http');
const PORT = process.env.PORT || 8080;
function handleRequest(req, resp){
	resp.end('<h1>Welcome to my Webpage');
}
var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log("Server is running on port: %s", PORT);
});
