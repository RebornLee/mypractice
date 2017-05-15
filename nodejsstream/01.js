/*
* @Author: Marte
* @Date:   2017-05-12 15:41:00
* @Last Modified by:   Marte
* @Last Modified time: 2017-05-12 16:09:54
*/


const fs = require("fs");
const path = require("path");
// let sPath = 'C:\\Users\\www\\Desktop\\Nodejs\\file.zip';
let sPath = "C:\\Users\\Administrator\\Desktop\\xiala.html";
let tPath = "C:\\Users\\Administrator\\Desktop\\demo\\xiala.html";
fs.createReadStream(sPath).pipe(fs.createWriteStream(tPath));