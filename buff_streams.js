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


/*


https://www.sitepoint.com/basics-node-js-streams/

https://mattdesl.svbtle.com/debugging-nodejs-in-chrome-devtools\

https://remoteok.io/remote-jobs/18564-remote-node-js-developer-x-team-international-pty

http://stackoverflow.com/jobs/119567/nodejs-developer-m-f-locafox-gmbh?offset=8&tags=nodejs&sort=s

http://stackoverflow.com/jobs/78892/senior-javascript-engineer-berlin-mycs-gmbh?offset=12&tags=nodejs&sort=s

*/