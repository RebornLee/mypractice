/*
* @Author: Marte
* @Date:   2017-05-12 16:10:45
* @Last Modified by:   Marte
* @Last Modified time: 2017-05-12 16:29:24
*/


const readline = require("readline");
let rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.on("line",(line)=>{
    console.log(`输入的是：${line}`)
})