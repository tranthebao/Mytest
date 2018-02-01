//fs.mkdir(path[, mode], callback)
/*
path −     This is the directory name including path.
mode −     This is the directory permission to be set. Defaults to 0777.
callback − This is the callback function No arguments other than a possible exception are given to the completion callback.
*/
//Example
var fs = require("fs");
/*console.log("Going to create directory /python/Mytest");
fs.mkdir('DataTest', function(err){
    if(err){return console.error(err);}
    console.log("Directory created successfully.")
});*/
//Read a Directory
//fs.readdir(path, callback)
/*
path − This is the directory name including path.
callback − This is the callback function which gets two arguments (err, files) 
where files is an array of the names of the files in the directory excluding '.' and '..'.
*/
/*console.log("Going to read directory /DataTest");
fs.readdir("./DataTest", function(err, files){
    if(err){return console.error(err);}
    files.forEach(function(file){
        console.log(file);
    });
});*/
//Remove a directory
//fs.rmdir(path, callback)
/*
path − This is the directory name including path.
callback − This is the callback function 
No argume nts other than a possible exception are given to the completion callback.
*/
console.log("Going to delete directory ./DataTest");
fs.rmdir("C:\\vss_works\\python\\Mytest\\DataTest",function(err){
    if(err){
        return console.error(err);
    }
    console.log("Going to read directory ./DataTest");
    fs.readdir("../Mytest", function(err, files){
        if(err){return console.error(err);}
        files.forEach(function(file){
            console.log(file);
        });
    });
});