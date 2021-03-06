

Node JS
----------

	Node.js is a cross-platform runtime environment and library for running JavaScript applications outside the browser. it is built on Google Chrome's V8 Javascript engine so it executes code very fast. 

	It uses event-driven, non blocking I/O model, which makes if it lightweight, efficient and perfect for network based and realtime applications.

	Node also provides a rich library of various JavaScript modules to simplify the development of web applications.


	Node follows a single threaded model with event looping.
	It is open source so, lots of developers around the world are contributing to it

	V8 is an open source JavaScript engine developed by the Chromium project for the Google Chrome web browser. It is written in C++.

Node Package Manager (NPM)
----------------------------

Node Global Objects
----------------------------
	setTimeout    clearTimeout
	setInterval   clearInterval
	setImmediate  clearImmediate
	console
	module
	require
	process
	Buffer

	setImmediate is used to queue the function behind whatever I/O event callbacks that are already in the event queue. 
	process.nextTick is used to effectively queue the function at the head of the event queue so that it can execute immediately after the current function completes.

	CPU-Intensive task should be done using setImmediate rather than process.nextTick to queue the execution at end, otherwise any I/O event callbacks wouldn't get the chance to run cpu intensive task code execution.
	
Node JS Event Loop
-----------------------------
Call Stack | Async/APIs/Timers Execution | Event Queue

Javscript runtime executes code in single thread, It can execute one statement of code at a time, Code is normally placed on the callstack before being executed, The call stack is the segment of memory that keeps track of the order of functions in which they called, The Event Loop is the process in which browser queues up tasks and executes them one at a time by putting them on call stack.

In the begining of an application, all the javascript code is run till completion and placed in call stack in order of execution. The Event Queue is initailly empty, As events occur event handlers places new tasks on the event queue.

Some example of events are mouse click, timed event,
These tasks waits on the event untill the call stack is empty, once the call stack is empty.

The first task in the Event Queue is placed on the call stack, The Subsequents tasks wait untill call stack is empty again. and the cycle repeats.

When the Javascript runtime comes across an async operation in the call stack, It does not process it immediately, Instead of blocking the call stack untill it is finished. It allows another process to handle the processing of async function. When the other process has finished it adds a task back on the event queue, this task is usually a callback function passed with arguments.

Javascript runtime is single threaded but there are other process running in the system, such as timers, input handlers, network APIs that work parallel with event loop these parallel process communicate with event loop by puttiing new task on the event queue.




Node Events and Callbacks
----------------------------------
A Callback is a function that is called after completion of some task, Callback functions are called when an asynchronous function returns its result.

Event handling works on the observer pattern. Whenever an event gets fired, its listener function starts executing. Node.js has multiple in-built events available through events module and EventEmitter class which is used to bind events and event listeners.

Node's Inbuilt Modules

	var os = require('os');   			// Operating System
	var dns = require('dns'); 			// DNS
	var net = require('net'); 			// Socket Programming 
	var crypto = require('crypto'); 	// Cryptographic functionality  
	var tls = require('tls')    		// Transport Layer Security and SSL

	process
	child_process
	Buffers
	Streams
	Path

Read File - Async Mode
var fs = require('fs');
fs.readFile('NodeJS.txt', function(err, data){
 if(err)
 	console.log(err);
 else
 	console.log(data.toString());
 });

Open/Read File - Sync Mode
rs flag is used to	open file for reading in synchronous mode.


Some Error Codes of Web API

Success
	200 OK

Client Error 
	400 - Bad Request  
	401 - Unauthorised
	404 - not found

Server Error
	500 - internal server error
	502 - Bad Gateway
	503 - Service unavailiable
	504 - Gateway Timeout
	505 - Http version not supported

