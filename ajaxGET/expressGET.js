/**
 * Created by Administrator on 2016/1/18.
 */
var express = require('express');
var app = express();
var port = 3000;

//get

app.get('/', function(req, res){

    res.sendfile('ajaxGET.html');

});

app.get('/data', function(req, res){
   var alt_value=req.query.alt;
    if(alt_value=='youxi'){

        var endhtml=true;

        res.send(endhtml);

    }
});
app.get('/jinggao',function(req,res){
    res.writeHead(200,{'Content-type':'text/html;charset=UTF-8'});
    res.end('跳转成功');
});


app.listen(port);