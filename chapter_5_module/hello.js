/*
 * @Author: 小粽子 
 * @Date: 2017-12-02 15:51:19 
 * @Last Modified by: 小粽子
 * @Last Modified time: 2017-12-02 16:01:23
 */


// var world = function(){
//     console.log('hello world!')
// }

// exports.world = world

// or
// exports.world = function(){
//     console.log('hello world!')
// }



// hello.js 
function Hello() { 
    var name
    this.setName = function(thyName) { 
        name = thyName
    }
    this.sayHello = function() { 
        console.log('hello ' + name)
    }
}
module.exports = Hello

