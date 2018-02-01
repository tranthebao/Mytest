var fs = require('fs');
//Asynchronous
fs.readFile('input.txt',function(err, data){
    if(err){
        return console.error(err);
    }
    console.log("Asynchronous read: ", data.toString());
});
//Synchronous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: "+ data.toString());
console.log("Program ended");
//fs.open(path, flags[, mode], callback)
//Asynchronous -  Opening file
console.log("Going to open file");
fs.open('input.txt', 'r+', function(err, fd){
    if(err){
        return console.error(err);
    }
    console.log("File opened susscesslly");
});
//Get file info
//fs.stat(path, callback)
console.log("Going to get file info!");
fs.stat('input.txt', function(err, stats){
    if(err){
        return console.error(err);
    }
    console.log(stats);
    console.log("Got file info successlly");
    //check file type
    console.log("is File ?"+ stats.isFile());
    console.log("isDerectory ?"+ stats.isDirectory());
})
console.log("program dened");
//write File
//fs.writeFile(filename, data[, options], callback)
console.log("Going to write into extsting file");
fs.writeFile('write.txt','Going to write into extsting file', function(err){
        if(err){
            return console.error(err);
        }
        console.log("Data written successfully!");
        fs.readFile('write.txt',function(err, data){
            if(err){
                console.error(err);
            }
            console.log("Asynchronous read:"+ data.toString());
        });
})
//read a file 
//fs.read(fd, buffer, offset, length, position, callback)
var buffer= new Buffer(1024);
console.log("Going to open an exitsting file.");
fs.open('write.txt', 'r+', function(err, fd){
    if(err){
        console.error(err);
    }
    console.log("File opened successfully!");
    console.log("Going to read the file");
    fs.read(fd,buffer, 0, buffer.length, 0, function(err, bytes){
        if(err){
            console.error(err);
        }
        console.log(bytes+ "byte read");
        //print only read bytes to avoid junk.
        if(bytes>0){
            console.log(buffer.slice(0, bytes).toString());
        }
    });
});
//fs.close(fd, callback)
console.log("Going to open an exitsting file");
fs.open('write.txt', 'r+', function(err, fd){
    if(err){return console.error(err);}
    console.log("File opened successfully.");
    console.log("Going to read a file");
    fs.read(fd, buffer, 0, buffer.length, 0, function(err, bytes){
        if(err){return console.error(err);}
        //print only read bytes to avoid junk
        if(bytes>0){
            console.log(buffer.slice(0, bytes).toString());
        }
        //close to open file
        fs.close(fd, function(err){
            if(err){return console.error(err);}
            console.log("File closed successfully.");
        });
    });
});
//Truncate a File
//fs.ftruncate(fd, len, callback
console.log("Going to open an exitsting file");
fs.open('write.tx','r+', function(err, fd){
    if(err){return console.error(err);}
    console.log("File opened successfully.");
    console.log("Going to read the same file");
    fs.ftruncate(fd, 10, function(err){
        if(err){return console.error(err);}
        fs.read(fd, buffer, 0 ,buffer.length, 0, function(err, bytes){
            if(err){return console.error(err);}
            //print only read bytes to avoid junk
            if(bytes>0){
                console.log(buffer.slice(0, bytes).toString());
            }
            //closed file
            fs.close(fd, function(err){
                if(err){return console.error(err);}
                console.log("File closed successfully");
            })
        });
    });
});
//fs.unlink(path, callback)
//Delete file
console.log("Going to delete an exitsting file");
fs.unlink('write.txt', function(err){
    if(err){return console.error(err);}
    console.log("File deleted sucessfully");
});
