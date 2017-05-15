/*
* @Author: Marte
* @Date:   2017-05-14 11:07:08
* @Last Modified by:   Marte
* @Last Modified time: 2017-05-14 14:04:55
*/

'use strict';

const http  =  require("http");


// http.createServer((request,response)=>{
//     response.write("Hello world");
//     response.end("ServerEnd");
// }).listen("1226",()=>{
//     console.log("httpServer创建成功")
// })


http.createServer((request,response)=>{

    if(request.url.endsWith("about.html")){
        response.end("about.html");
    }else if(request.url.endsWith("index.html")){
        response.end("index.html")
    }else{
        response.end("Not Found")
    }

}).listen("1226",()=>{
    console.log("running---")
})