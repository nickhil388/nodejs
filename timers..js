

// setTimeout(function(){
// 	console.log("Timeout");
// })

// console.log("hello");


setImmediate(function(){
	console.log("#immediate");
});
setTimeout(function(){
	console.log('#1');
},1000);

setTimeout(function(){
	console.log('#2');
},0);
console.log("hello");
setTimeout(function(){
	console.log('#3');
},0);





process.nextTick(function(){
	console.log("#nextTick");
})

