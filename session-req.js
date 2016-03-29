/**
 * Created by Administrator on 2016/1/21.
 */
var express=require('express');
var parseurl=require('parseurl');
var session=require('express-session');

var app=express();
app.use(session({
    secret:'keyboard cat',
    cookie:{maxAge:60000}
}));

app.get('/',function(req,res,next){

    var session=req.session;
    if(session.views){
        session.views++;
        res.writeHead(200,{'Content-type':'text/html;charset=UTF-8'});
        res.write('<p>views:'+session.views+'</p>');
        res.write('<p>expires in:'+(session.cookie.maxAge/1000)+'s</p>');
        res.end()
    }else{
        res.writeHead(200,{'Content-type':'text/html;charset=UTF-8'});
        session.views=1;
        res.end('welcome to the session demo'+'欢迎来到session的世界');
    }
});

app.listen(1334);