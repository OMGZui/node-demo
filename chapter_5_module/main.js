/*
 * @Author: 小粽子 
 * @Date: 2017-12-02 15:49:42 
 * @Last Modified by: 小粽子
 * @Last Modified time: 2017-12-02 15:58:02
 */

//  模块module

// exports和require

// 其中 exports 是模块公开的接口，require 用于从外部获取一个模块的接口

// var hello = require('./hello')
// hello.world()


var Hello = require('./hello')

var hello = new Hello()

hello.setName('shengj')
hello.sayHello()
