/*
* @Author: Marte
* @Date:   2017-05-14 16:25:56
* @Last Modified by:   Marte
* @Last Modified time: 2017-05-15 08:46:46
*/

'use strict';


const http = require("http");
const url = require("url");
const querystring = require("querystring")

let routePath = "/www";
let dir = "C:\\Users\\Administrator\\Desktop\\demo\\nodejs_server";





/*---------------------------添加静态服务器--------------------------------*/
const path = require("path");
const fs = require("fs");
const mime = require("./mime.json");

let falseInfo = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <title>Document</title>
        </head>
        <body>
            <h2>Not Found</h2>
        </body>
        </html>
`
let init = (request,response,routePath,dir) =>{
    console.log(request.url)
    if(request.url.startsWith(routePath)){
        let filename = path.basename(request.url)
        fs.readFile(path.join(dir,routePath,filename),(err,data)=>{
            let cType = "text/plain";
            if(err){
                response.end(falseInfo);
            }else{
                let ext = path.extname(request.url);
                if(mime[ext]){
                   cType=mime[ext];
                }
                if(mime[ext].startsWith("text")){
                    cType += ";charset=utf8";
                }
                response.writeHead(200,{
                    "Content-Type":cType
                })
                    response.end(data);
            }
        })
    }
}

/*-------------------------------------------------------------------------*/



http.createServer((request,response)=>{
    init(request,response,routePath,dir);
    /*get方法传递参数*/
    // if(require.url.startsWith("/check")){
    //     var obj = url.parse(require.url,true); //true 表示将query转化为对象;
    //     response.writeHead(200,{
    //             "Content-Type":"text/plain;charset=utf8"
    //         });
    //     if(obj.query.username ==="admin"&& obj.query.password === "123"){
    //         response.end("登录成功");
    //     }else{
    //         response.end("登录失败");
    //     }
    // }
    /*post方法传递参数*/
    if(request.url.startsWith("/check")){
        let info = "";
        request.on("data",(chunk)=>{
            info +=chunk;
        });
        request.on("end",()=>{
            let obj = querystring.parse(info);
            response.writeHead(200,{
                "Content-Type":"text/plain;charset=utf8"
            });
            if(obj.username ==="admin"&& obj.password === "123"){
                response.end("登录成功");
            }else{
                response.end("登录失败");
            }
        })
    }
}).listen("3030",()=>{
    console.log("start")
})
