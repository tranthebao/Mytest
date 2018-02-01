var buf = new Buffer(256);
var buf1 =  new Buffer([10,20,30,40]);
var buf2 = new Buffer("simply easy learning", "utf-8");
var len = buf.write("simple easy learning");
console.log("Octets writen :"+ len);
var buf3 = new Buffer(26);
for(var i = 0 ; i<26 ;i++){
    buf3[i]=i+97;
}
console.log(buf3.toString('ascii'));
console.log(buf3.toString('ascii',0,5));
console.log(buf3.toString('utf-8',0,5));
console.log(buf3.toString(undefined,0,5));
//buf.toJSON()

var buf =  new Buffer("Simply Easy Learning");
var json = buf.toJSON(buf);
console.log(json);
//Buffer.concat(list[, totalLength])
var buffer1 = new Buffer('TutorialsPoint ');
var buffer2 = new Buffer('Simply Easy Learning');
var buffer3 = new Buffer.concat([buffer1,buffer2]);
console.log("Buffer3 content: "+ buffer3.toString());
//buf.compare(otherBuffer);
var buffer4 = new Buffer('ABCDE');
var buffer5 = new Buffer('ABCD');
var result = buffer4.compare(buffer5);
if(result < 0){
    console.log(buffer4 + " compares before" + buffer5);
} else if(result == 0){
    console.log(buffer4 +" is same as "+ buffer5);
}else{
    console.log(buffer4 +" comes after" + buffer5);
}
//buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd])
var buffer_1 = new Buffer('ABC');
//copya buffer
var buffer_2 =  new Buffer(3);
buffer_1.copy(buffer_2);
console.log("Conttent: "+ buffer_2.toString());
//buf.slice([start][, end]) => sub string
buffer1=null;
buffer1= new Buffer('TutorialsPoint');
buffer2=null;
buffer2 = buffer1.slice(0,9);
console.log("buffer2 content: "+ buffer2.toString());
//buf.length;
console.log(buffer1.length);