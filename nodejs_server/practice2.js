/*
* @Author: Marte
* @Date:   2017-05-14 19:08:14
* @Last Modified by:   Marte
* @Last Modified time: 2017-05-15 08:47:07
*
*/

'use strict';


const http = require("http");
const path = require("path");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");
const mime = require("mime.json")

let routePath = "/www";
let dir = "C:\\Users\\Administrator\\Desktop\\demo\\nodejs_server";


let init = (request,response,routePath,dir)=>{
	if(request.url.startsWith(routePath)){
		let filename = path.basename(request.url);
		fs.readFile(path.join(dir,routePath,filename),(err,data)=>{
			if(err){
				response.end("Not Found")
			}else{
				let ext = path.extname(request.url);
				let cType = "text/plain";
				if(mime[ext]){
					cType = mime[ext];
				}
				if(mime[ext].startsWith("text")){
					cType += ";charset=utf8";
				}
				response.writeHead(200,{
					"Content-Type":cType
				});
				response.end(data);
			}
		})
	}
}



http.createServer((request,response)=>{
	init(request,response,routePath,dir);
	if(request.url.startsWith("/check")=>{
		let obj = url.parse(request.url,true);
		response.writeHead(200,{
				"Content-Type":"text/plain;charset=utf8"
			})
		if(obj.query.username==="admin" && obj.query.password === "123"){
			response.end("登录成功");
		}else{
			response.end("登陆失败");
		}
	})
	if(request.url.startsWith("/check")=>{
		let res = "";
		request.on("data",(chunk)=>{
			res += chunk;
		});
		request.on("end",()=>{
			let obj = querystring.parse(res);
			resopnse.writehHead(200,{
				"Content-Type":"text/plain; charset=utf8"
			})
			if(obj.username==="admin"&&obj.password==="123"){
				response.end("登录成功");
			}else{
				response.end("登陆失败");
			}
		})
	})
})