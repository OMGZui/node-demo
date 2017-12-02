/*
 * @Author: 小粽子
 * @Date: 2017-12-02 16:45:51
 * @Last Modified by: 小粽子
 * @Last Modified time: 2017-12-02 16:49:33
 */

var util = require('util');
function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function () {
        console.log('Hello ' + this.name);
    };
}
Base.prototype.showName = function () {
    console.log(this.name);
};


function Sub() {
    this.name = 'sub';
}
// 原型继承
util.inherits(Sub, Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub = new Sub();
objSub.showName();
// objSub.sayHello();  //报错。原因应该是继承原型，而不是继承类
console.log(objSub);


function Person() { 
    this.name = 'byvoid'; 
    this.toString = function() { 
    return this.name; 
    }; 
} 
var obj = new Person(); 
console.log(util.inspect(obj)); 
console.log(util.inspect(obj, true)); 