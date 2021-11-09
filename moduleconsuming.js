var http= require('http');
var s=require('./sum');
const a=["john","aman"];
const b=["shankar","ram"];
http.createServer(function(req,res){
    res.writeHead (200,{'content type':'text/html'});
    res.write("my name is:Kavya Surendran");
    res.write("sum of nos ="+s.sum(12,8));
    res.write("array cocatination"+s.arr(a,b));
    res.end();
}).listen(8080);