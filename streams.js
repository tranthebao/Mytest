var fs = require("fs");
var data = '';
//// Create a readable stream
var readSteam= fs.createReadStream('input.txt');
//set encoding
readSteam.setEncoding('UTF8');
//hanlde stream events-> data end and error
readSteam.on('data',function(chunk){
    data+=chunk;
});
readSteam.on('end', function(){
    console.log(data);
});
readSteam.on('error', function(err){
    console.log(err.stack);
});
console.log("program ended");                   
//Writing to a Stream
data = "Simply easy learning";
//create a writable stream
var writeStream = fs.createWriteStream('write.txt');
//write the data to stream with encoding to be utf8
writeStream.write(data, 'UTF8');
//mark the end of file
writeStream.end();
writeStream.on('finish', cfunction(){
    console.log("write completed");
});
writeStream.on('error', function(err){
    console.log(err.stack);
});
console.log("Program ended");