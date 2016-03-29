var express=require('express');
var app=express();
var path=require('path');
app.set('port',process.env.port || 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','jade');
var fs=require('fs');

var imagePath=path.join(__dirname,'files','image.jpg');

var users = {
  'azat': {
    email: 'hi@azat.co',
    website: 'http://azat.co',
    blog: 'http://webapplog.com'
  }
};

var findUserByUsername = function (username, callback) {
  // Perform database query that calls callback when it's done
  // This is our fake database
  if (!users[username])
    return callback(new Error(
            'No user matching '
            + username
        )
    );
  return callback(null, users[username]);
};

app.get('/v1/users/:username', function(request, response, next) {
  var username = request.params.username;
  findUserByUsername(username, function(error, user) {
    if (error) return next(error);
    return response.render('user', user);
  });
});

var ping=function(req,res,next){
  console.log('this is ping ');
  return next();
};
var pong=function(req,res,next){
  console.log('this is pong');
  res.end('over the song');
}

app.get('/ping',ping,pong);
app.get('/search',function(req,res){
  console.log(req.query);
  res.end(JSON.stringify(req.query)+'\r\n');

});
app.get('/params/:role/:name/:status', function(req,res){

  console.log(req.params.role);
  res.end();
});

var cookieParser = require('cookie-parser');
app.use(cookieParser('abcd'));
app.get('/cookies', function(req, res){
  if (!req.cookies.counter)
    res.cookie('counter', 0);
  else
    res.cookie('counter', parseInt(req.cookies.counter,10) + 1);
  res.status(200).send('cookies are: ', req.cookies);
})



app.get('/json', function(req, res) {
  res.status(200).json([{title: 'Practical Node.js', tags: 'node.js express.js'},
    {title: 'Rapid Prototyping with JS', tags: 'backbone.js node.js mongodb'},
    {title: 'JavaScript: The Good Parts', tags: 'javascript'}
  ]);
});


app.listen(1030);

app.get('/admin',function(req,res,next){
  if(!req.query._token) return next(new Error('no gweg'));
},function(req,res,next){
  res.render('admin');
});
//middleware that applied to all /api/* calls
app.use('/api/*',function(req,res,next){
  if(!req.query.api_key) return next(new Error('No'));

});

app.get('/api/stories',findStory,function(req,res){
  res.json(req.story);
});

var requireParam=function(param){
  var paramName="";
  if(param==='_token')
  param ='token';
  else if(param==='api_key')
  paramName='API Key';
  return function(req,res,next){
    if(!req.query[param]) return next(new Error('no '));
    next();
  }
}

app.get('/admin',requireParam('_token'),function(req,res,next){
  res.render('admin');
});
app.use('/api/*',requireParam('api_key'));

