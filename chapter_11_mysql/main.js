/*
 * @Author: 小粽子 
 * @Date: 2017-12-02 17:19:03 
 * @Last Modified by: 小粽子
 * @Last Modified time: 2017-12-02 17:24:50
 */

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'lumen5'
});
 
connection.connect();
 
var  sql = 'select * from posts limit 1';
//查
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
 
       console.log('--------------------------SELECT----------------------------');
       console.log(result);
       console.log('------------------------------------------------------------\n\n');  
});

 connection.end();