

// setTimeout(function(){
// 	console.log("Timeout");
// })

// console.log("hello");


process.nextTick(function(){
	console.log("Timeout");
})

console.log("hello");