/*
 * @Author: 小粽子 
 * @Date: 2017-12-02 17:25:00 
 * @Last Modified by: 小粽子
 * @Last Modified time: 2017-12-02 17:28:51
 */

var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/runoob'; // 数据库为 runoob
 
// var insertData = function(db, callback) {  
//     //连接到表 site
//     var collection = db.collection('site');
//     //插入数据
//     var data = [{"name":"菜鸟教程","url":"www.runoob.com"},{"name":"菜鸟工具","url":"c.runoob.com"}];
//     collection.insert(data, function(err, result) { 
//         if(err)
//         {
//             console.log('Error:'+ err);
//             return;
//         }     
//         callback(result);
//     });
// }
 
// MongoClient.connect(DB_CONN_STR, function(err, db) {
//     console.log("连接成功！");
//     insertData(db, function(result) {
//         console.log(result);
//         db.close();
//     });
// });

var selectData = function(db, callback) {  
    //连接到表  
    var collection = db.collection('site');
    //查询数据
    var whereStr = {"name":'菜鸟教程'};
    collection.find(whereStr).toArray(function(err, result) {
      if(err)
      {
        console.log('Error:'+ err);
        return;
      }     
      callback(result);
    });
  }
   
  MongoClient.connect(DB_CONN_STR, function(err, db) {
    console.log("连接成功！");
    selectData(db, function(result) {
      console.log(result);
      db.close();
    });
  });
  