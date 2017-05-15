/*
* @Author: Marte
* @Date:   2017-05-14 15:40:49
* @Last Modified by:   Marte
* @Last Modified time: 2017-05-14 16:24:38
*/

'use strict';


const http = require("http");
const staticServer = require("./initStaticServer.js");
const url = require('url');
const querystring = require("querystring");

let rootDir = "C:\\Users\\Administrator\\Desktop\\demo\\nodejs_server";
let rPath = "/www";

http.createServer((request,response)=>{
    staticServer.initStaticServer(request,response,rootDir,rPath);
    if(request.url.startsWith("/check")){
        // let obj = url.parse(request.url,true);
        // if(obj.query){
        //     response.writeHead(200,{
        //         "Content-Type" : "text/plain; charset=utf8"
        //         })
        //     if(obj.query.username == "admin" && obj.query.password == "123"){
        //         response.end("登录成功");
        //     }else{
        //         response.end("登陆失败");
        //     }
        // }
        let txt = "";
        request.on("data",(chunk)=>{
            txt += chunk;
        });
        request.on("end",()=>{
            let obj = querystring.parse(txt);
            if(obj){
                response.writeHead(200,{
                    "Content-Type":"text/plain; charset=utf8"
                })
                if(obj.username == "admin" && obj.password == "123"){
                    response.end("登录成功");
                }else{
                    response.end("登陆失败");
                }
            }

        })

    }
}).listen("1226",()=>{
    console.log("running...")
})