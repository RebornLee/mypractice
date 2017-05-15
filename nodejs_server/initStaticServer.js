/*
* @Author: Marte
* @Date:   2017-05-14 15:01:58
* @Last Modified by:   Marte
* @Last Modified time: 2017-05-14 15:30:20
*/

'use strict';

const path = require("path");
const fs = require("fs");
const mime = require("./mime.json");

let res = `
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

exports.initStaticServer = (request, response, rootDir, rPath) => {
     if(request.url.startsWith(rPath)){
        let filename = path.basename(request.url);
        fs.readFile(path.join(rootDir,rPath,filename),(err,data)=>{
            if(err){
                console.log(err)
                response.end(res);
            }
            let ext = path.extname(request.url);
            let cType = "text/html";
            if(mime[ext]){
                cType = mime[ext];
            }
            if(mime[ext].startsWith("text")){
                cType +=";charset=utf8";
            }
            response.writeHead(200,{
                "Content-Type":cType
            })
            response.end(data);

        })
    }
}