/*
* @Author: Marte
* @Date:   2017-05-15 09:01:22
* @Last Modified by:   Marte
* @Last Modified time: 2017-05-15 09:28:48
*/

'use strict';


const fs = require("fs");
const path = require("path");
const initServer = require("./initStaticServer.js");
const http = require("http");
const info  = require("./stuInfo.js");
const url = require("url");

http.createServer((request,response)=>{
    initServer.initStaticServer(request,response,__dirname,"/www");
    if(request.url.startsWith("/query")){
        let obj = url.parse(request.url,true);
        let idCode = obj.query.idCode;

            fs.readFile(path.join(__dirname,"/www","/info.html"),"utf8",(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                    let html = data.replace("$$name$$",info[idCode].name);
                    html = html.replace("$$age$$",info[idCode].age);
                    html = html.replace("$$gender$$",info[idCode].sex);
                    response.writeHead(200,{
                        "Content-Type":"text/html;charset=utf8"
                    })
                    response.end(html);
                }
            })
        }
}).listen("3040",()=>{
    console.log("running...")
})