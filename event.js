var events = require("events");
var eventEmiter =  new events.EventEmitter();

// listener #1
var listener1 = function listener1(){
    console.log("Listener 1 excuted.");
}

// listener #2
var listener2 = function listener2(){
    console.log("Listener 2 executed.");
}

// bind the connection event with the listener1 funcion
eventEmiter.addListener('connection', listener1);
eventEmiter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmiter,'connection');
console.log(eventListeners+"Listener(s): listening to connection event");

//fire the connection event
eventEmiter.emit('connection');

// remove the binding of listener 1 function
eventEmiter.removeListener('connection', listener1);
console.log("Listener 1 will not listen now");

eventListeners =  require('events').EventEmitter.listenerCount(eventEmiter,'connection');

console.log(eventListeners + "Listener(s) listening to connection event");

console.log("Program ened");