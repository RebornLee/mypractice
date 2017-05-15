/*
* @Author: Marte
* @Date:   2017-05-12 16:44:52
* @Last Modified by:   Marte
* @Last Modified time: 2017-05-12 19:20:22
*/

'use strict';
const path  =  require("path");
const fs = require("fs");
const md = require("markdown-it")();

const chokidar = require("chokidar");

chokidar.watch(path.join(__dirname,"text.md"),{igonred:/node_modules/}).on("change",(event,data)=>{
    fs.readFile(path.join(__dirname,"text.md"),"utf8",(err,data)=>{
        let html = md.render(data);
        fs.readFile(path.join(__dirname,"template.html"),"utf8",(err,data)=>{
            // 注意需要 添加“utf8”编码格式 否则data无法正常获得；
            let res = data.replace(/<body[^>]*>([\s\S]+?)<\/body>/,"<body>"+html+"</body>");
            console.log(res)
            fs.writeFile(path.join(__dirname,"template.html"),res,(err)=>{
                console.log("修改完成");
            })
        })
    })
})
