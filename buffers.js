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