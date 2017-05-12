/*
* @Author: Marte
* @Date:   2017-05-12 08:56:46
* @Last Modified by:   Marte
* @Last Modified time: 2017-05-12 10:49:18
*/

'use strict';

let path = require("path");
let fs = require("fs");
fs.open(path.join(__dirname,"./demo.txt"),"r+",(err,fd)=>{
    let buf = Buffer.from("China");
    fs.write(fd,buf,0,5,(err,written,buffer)=>{
        console.log(err,written,buffer);
        console.log(buf === buffer);
    })
})
// fs.open(path.join(__dirname,"./demo.txt"),"r+",(err,fd)=>{
//     fs.write(fd,"hi",(err,written,buffer)=>{
//         console.log(err,written,buffer);
//         console.log("hi" === buffer);
//     })
// })
fs.writeFile(path.join(__dirname,"./demo.txt"),"中国",(err)=>{
    console.log(err)
})