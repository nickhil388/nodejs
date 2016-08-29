var http = require('http');
var fs = require('fs');
http.createServer(function(req, res){

	console.log(req.url);

	if(req.url=='/'){
		fs.readFile('stream_template.html', function(err, content){
				res.writeHead(200, { 'Content-Type':"text/html" });
	            res.end(content, 'utf-8');
		});	
	}
	if(req.url=='/download'){
				var readableStream = fs.createReadStream('sample_video.mp4');
				res.writeHead(200, { 'Content-Type':"video/mp4" });
	            readableStream.pipe(res);
		
	}
	if(req.url=='/test'){
		res.end("<b> Server Ok");
	}
	if(req.url=='/post'){
		console.log(req);
		res.end();
	}


}).listen(8888);
console.log('Server Started, Lisening on 8888');