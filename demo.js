/*var express = require('express');
var fs=require('fs');
var data = fs.readFileSync('input.txt');
fs.readFile('input.txt',function(err, dataF){
    if(err)return console.log(err);
    console.log(dataF.toString());
});
console.log(data.toString());
console.log("Program Ended");*/
var event = require('events');
var eventEmiter = new event.EventEmitter();
var connectHandler = function connecttted(){
    console.log('connection successful');
    eventEmiter.emit('data_received');
}
eventEmiter.on('connection', connectHandler);
eventEmiter.on('data_received',function(){
    console.log('data_received successful');
});
//dot it
eventEmiter.emit('connection');
console.log("Program Ended");