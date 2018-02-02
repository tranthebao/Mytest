var os = require('os');
console.log(os.endianness());
console.log(os.type());
console.log(os.platform());
console.log(os.totalmem());
console.log(os.freemem());
//
var path = require("path");
console.log(path.normalize('C:\\vss_works\\python\\Mytest'));
console.log(path.join('/python','python','python/Mytest'));
console.log(path.resolve('demo.js'));
console.log(path.extname('demo.js'));

//
var  dns = require('dns');
/*dns.lookup('wwww.google.com', function onLookup(err, address, family){
    console.log('address', address);
    dns.reverse(address, function(err, hostname){
        if(err){
            return console.error(err.stack);
        }
        console.log('reverse for'+ address.toString()+ ':'+ JSON.stringify(hostname));
    });
});*/
dns.lookup('www.google.com', function onLookup(err, address, family) {
    console.log('address:', address);
    dns.reverse(address, function (err, hostnames) {
       if (err) {
          console.log(err.stack);
       }
 
       console.log('reverse for ' + address + ': ' + JSON.stringify(hostnames));
    });  
 });