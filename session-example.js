/**
 * Created by Administrator on 2016/1/21.
 */
var express=require('express');
var parseurl=require('parseurl');
var session=require('express-session');



var app=express();
app.use(session({
    secret:'keyboard cat',
    resave:false,
    saveUninitalized:true
}))

app.use(function(req,res,next){
    var views=req.session.views;
    var hour=15000;
    req.session.cookie.expires=new Date(Date.now()+hour);
    req.session.cookie.maxAge=hour;

        if(!views){
        views=req.session.views={}
    }

//parseurl返回路由路径 localhost:1333就是/
var pathname=parseurl(req).pathname;
    console.log(parseurl(req).pathname+'parseurl-req是什么');

views[pathname]=(views[pathname] || 0)+1;

next();

});
app.get('/foo',function(req,res,next){
    res.send('you viewed this page'+req.session.views['/foo']+'times')
    console.log(req.session.views);
});

app.get('/bar',function(req,res,next){
    res.end('you viewed this page' + req.session.views['/bar'] + 'times');
    console.log(req.sessionID);
})

app.listen(1333);