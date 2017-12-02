/*
 * @Author: 小粽子
 * @Date: 2017-12-02 15:03:45
 * @Last Modified by: 小粽子
 * @Last Modified time: 2017-12-02 15:46:16
 */

var fs = require('fs')
var zlib = require('zlib')

//  流stream 读取流
function read(fs, txt, data = '') {

    var readerStream = fs.createReadStream(txt)

    readerStream.setEncoding('utf8')

    readerStream.on('data', function (chunk) {
        data += chunk
    })
    readerStream.on('end', function () {
        console.log(data)
    })
    readerStream.on('error', function (err) {
        console.log(err.stack)
    })

    console.log('over_read')
}
// read(fs, './input.txt')

// 写入流
function write(fs, txt, data = '') {
    var writerStream = fs.createWriteStream(txt)

    writerStream.write(data, 'utf8')

    writerStream.end()
    // 处理流事件 --> data, end, and error
    writerStream.on('finish', function () {
        console.log("写入完成。")
    })

    writerStream.on('error', function (err) {
        console.log(err.stack)
    })

    console.log("over_write")
}

// write(fs, './out.txt', '你是傻狗啊')
// read(fs, './out.txt')

// over_read
// over_write
// over_read
// 写入完成。
// /*
//  * @Author: 小粽子 
//  * @Date: 2017-12-01 16:23:52 
//  * @Last Modified by: 小粽子
//  * @Last Modified time: 2017-12-02 15:05:24
//  */
// 
// 
// 你是傻狗啊


// 管道流
function pipe_stream(fs, txt1, txt2){
    
    var readerStream = fs.createReadStream(txt1)

    var writerStream = fs.createWriteStream(txt2)

    readerStream.pipe(writerStream)

    console.log('over_pipe')
}

// pipe_stream(fs, './input.txt', './out_pipe.txt')
// read(fs, './out_pipe.txt') //输出空白，可能是异步的原因

// 链式流
// 压缩文件
function link_zip(fs, zlib, txt, txt_zip){
    
    fs.createReadStream(txt)
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream(txt_zip))
    
    console.log('over_zip')
}
// link_zip(fs, zlib, './input.txt', './input.txt.gz')

// 解压文件
function link_unzip(fs, zlib, txt_zip, txt_unzip){
    
    fs.createReadStream(txt_zip)
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream(txt_unzip))

    console.log('over_unzip')
}
// link_unzip(fs, zlib, './input.txt.gz', './input_unzip.txt')