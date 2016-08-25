
var counter = 0;

var asyncTask = function (foo) {
	setTimeout(foo,3000);
}

function Response(){

	asyncTask(function(){
		counter++;
		console.log("counter : "+counter);
	});

	console.log("counter : "+counter);
}

Response();