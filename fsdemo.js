var fs= require("fs");
fs.readFile('input.file',function(err,data){
    if(err){
        console.log(err.stack());
    }
    console.log(data.toString());
});
console.log("Program Ended");
