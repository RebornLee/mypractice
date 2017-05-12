/*
* @Author: Marte
* @Date:   2017-05-12 14:03:41
* @Last Modified by:   Marte
* @Last Modified time: 2017-05-12 14:55:57
*/

'use strict';

const path = require("path");
const fs = require("fs");

let obj = require("./config.json");
let rootName  = obj.rootName;
let main = function(){
    this.v = "1.0.0";
    this.h = "help"
}

module.exports = main;

main.prototype = {
    init:function(){
        fs.mkdir(path.join("./",rootName),(err)=>{
            if(err){
                console.log(err);
                return;
            }else{
                obj.data.forEach((v)=>{
                    if(v.type === "dir"){
                        fs.mkdir(path.join("./",rootName,v.name),(err)=>{
                            if(err){
                                console.log(err);
                                return;
                            }else{
                                console.log(`${v.name}创建成功`);
                            }
                        })
                    }else if(v.type === "file"){
                        fs.readFile(path.join(__dirname,v.name),(err,data)=>{
                            if(err){
                                console.log(1)
                                console.log(err);
                                return;
                            }else{
                                fs.writeFile(path.join("./",rootName,v.name),data,(err)=>{
                                    if(err){
                                        console.log(err);
                                        return;
                                    }else{
                                        console.log(`${v.name}创建完成`);
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
}