var http = require('http');
var url  = require('url');

function a(){
  var startTime = new Date().getTime();
 	while (new Date().getTime() < startTime + 10000);
 
 console.log("A called");
}

function b(){
	console.log("B called");
}

http.createServer(function(req, res){

	res.writeHead(200,{"Content-Type":"text/plain"});
	res.write("Hello World");
	res.end();

	var pathname = url.parse(req.url).pathname;
	//console.log("Requested "+ pathname);
	if(pathname=='/a'){
		a();
	}
	if(pathname=='/b'){
		b();
	}

}).listen(8888);
console.log("Server Started");