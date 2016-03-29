/**
 * Created by Administrator on 2016/1/23.
 */
var mongoose=require('mongoose');
var dbURI='mongodb://localhost/test';
mongoose.connect(dbURI);
var userSchema=new mongoose.Schema({
    name:{type:String,unique:true},
    email:{type:String,unique:true},
    createdOn:{type:Date},
    age:{type:String},
    lastLogin:{type:Date,default:Date.now()}
});

//create mongodb  model
var User=mongoose.model('User',userSchema);
var userOne=new User({name:'simon'});
var userTwo=new User({name:'Sally'});
var userThreee=new User({name:'zhangsan',age:25,email:'379417794@qq.com'});
var userfour=new User({name:'yeye',age:76,email:'88554@qq.com'});

//update mongodb model

//save
userTwo.save(function(err){
    if(err) return err;

});

userOne.save(function(err){
   if(err) return err;
});

userThreee.save(function(err){
    if(err) return err;
})
userfour.save(function(err){
    if(err) return err;
})

//find user
User.findOne({'name':"xiaowenjie"},function(err,a){
   if(!err){
       console.log(err);
   }

});


/*
var myQuery=User.find({'name':'yeye'});
myQuery.where('age').gt(18);
myQuery.sort('-lastLogin');
myQuery.select('_id name email age');
myQuery.exec(function(err,users){
    if(!err){
        console.log(users);
    }
})
*/


User.find({'name':"yeye"}, function(err,users){
    if(!err){
        console.log(users);
    }
})

