/**
 * Created by Administrator on 2016/1/15.
 */
var express=require('express');
var app=express();
var fs=require('fs');
var path=require('path');
var port=3000;


app.get('/index',function(req,res){
    res.sendfile("changeSelect.html");
});


app.get('/a',function(req,res){
    console.log(req.query.p);
    res.send(req.query.p);

});

app.listen(port,function(req,res){
    console.log('listen on server 3000 ');
});


