var file = require('fs');

file.open('file.txt','r', function(err,fd){

	if (err) { throw err }
		 // var readBuffer = new Buffer(1024),
		 // bufferOffset = 0,
		 // bufferLength = readBuffer.length,
		 // filePosition = 0;
		 
		 // file.read(fd, readBuffer, bufferOffset, bufferLength, filePosition, function read(err, readBytes) {
			//  if (err) { throw err; }
			//  console.log(readBuffer.toString());
			//  // if (readBytes > 0) {
			//  // console.log(readBuffer.slice(0, readBytes));
		 // //}
   //  });



   		
			file.createReadStream(null, {fd: fd, encoding: 'utf8'});
			file.on('data', console.log);
		
});