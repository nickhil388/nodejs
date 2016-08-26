var evn = require('events').EventEmitter;

evn.addListener('connect', function(){

	console.log("Event Occured");

});

evn.emit('connect');