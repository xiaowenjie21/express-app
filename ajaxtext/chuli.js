/**
 * Created by Administrator on 2016/1/15.
 */
var express=require('express');
var app=express();
var bodyparser=require('body-parser');

app.use(bodyparser.urlencoded({ extended: false }))

app.get('/chuli', function(req, res) {
    res.sendfile(__dirname+'/ajaxtest.html');
});

app.post('/testLogin',function(req,res){
    /*var str="Thi is ajax testing";*/
    res.send('用户名' +req.param('title'));
    console.log(req.param('cotent'));
});
app.listen(1130);