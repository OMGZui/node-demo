/*
 * @Author: 小粽子
 * @Date: 2017-12-01 16:39:50
 * @Last Modified by: 小粽子
 * @Last Modified time: 2017-12-01 17:11:51
 */

//  事件event

var events = require('events')

// 实例化eventEmitter
var eventEmitter = new events.EventEmitter()

// 事件处理connnectHandler
var connnectHandler = function connected() {
    // 触发data_received事件
    eventEmitter.emit('data_received')
    console.log(1)
}
// 绑定connnectHandler事件
eventEmitter.on('connection', connnectHandler)

// 匿名函数绑定data_received事件
eventEmitter.on('data_received', function () {
    console.log(2)
})

// 触发connection事件
eventEmitter.emit('connection')

console.log(3)
