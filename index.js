var os = require('os');
var fs = require('fs');
var _ = require('lodash'); // data manipulating library

// console.log("cookie khalo");
// function add(a, b){
//     return a + b;
// }
// var result = add(400,5836);
// console.log(result);

// var add = (a,b)=>{return a+b;}
// var result2=add(24,4);
// console.log(result2);

// function callback(){
//     console.log('callback');
// }

const add = function(a,b, callback){
    var result = a+b;
    console.log(result);
    callback();
}
// add(10, 20, callback);
// OR CAN Do like
add(10, 20, function(){
    console.log("xhnad");
})
// var user=os.userInfo;
// console.log(user);
fs.appendFile('greet.txt','\nhi '+os.userInfo().username,()=>{console.log("hogya kam");})

const notes = require('./notes.js');
console.log(notes.get());

console.log(notes.age);

var array = [1,2,3,44,6,12,1,2,12,3,21,22,'1','1',44];
var filter = _.uniq(array);
console.log(filter);