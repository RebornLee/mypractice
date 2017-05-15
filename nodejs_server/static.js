/*
* @Author: Marte
* @Date:   2017-05-14 14:14:47
* @Last Modified by:   Marte
* @Last Modified time: 2017-05-14 15:32:31
*/

'use strict';


const staticServer = require("./initStaticServer.js");
const http = require("http");

let rootDir = "C:\\Users\\Administrator\\Desktop\\demo\\nodejs_server";
let rPath = "/www"

http.createServer((request,response)=>{
   staticServer.initStaticServer(request,response,rootDir,rPath);
}).listen("1226",()=>{
    console.log("running----")
})