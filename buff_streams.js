// var fs = require('fs');
// var readableStream = fs.createReadStream('file.exe');
// var count = 0;

// readableStream.on('data', function(chunk) {
//      count++; 
//     console.log(chunk.length);
// });t

// readableStream.on('end', function() {
//     console.log("##END## ",count );
// });


var fs = require('fs');
var readableStream = fs.createReadStream('file.exe');
var writableStream = fs.createWriteStream('file2.exe');

readableStream.pipe(writableStream);