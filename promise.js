// 1. 引入 fs 模块
const fs = require('fs');
const { resolve } = require('path');

// 2. 调用方法读取文件
// fs.readFile('./resourse/xue.md', (err, date) => {
//     // 如果失败 则抛出错误
//     if (err) throw err;
//     // 如果没有出错 则输出内容
//     console.log(date.toString());
// });

// promise 封装
const p = new Promise(function (resolve, reject) {
    fs.readFile('./resourse/xue.mds', (err, date) => {
        // 判断如果失败
        if (err) reject(err);
        // 如果成功
        resolve(date);
    })
})

p.then(function (value) {
    console.log(value.toString());
}, function (reason) {
    console.log('读取失败');
})

p.then(valu=>{
    console.log(value.toString());
},reason=>{
    console.log(reason);
})

