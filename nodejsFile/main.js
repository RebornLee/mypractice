/*
 * @Author: Marte
 * @Date:   2017-05-12 11:29:45
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-05-12 13:46:20
 */

'use strict';

const path = require("path");
const fs = require("fs");

const obj = require("./config.json");

let rootName = obj.rootName;

let init = () => {
    fs.mkdir(path.join("./", rootName), (err) => {
        if (err) {
            console.log(err)
            return;
        } else {
            obj.data.forEach((v) => {
                if (v.type === "dir") {
                    fs.mkdir(path.join("./", rootName, v.name), (err) => {
                        if (err) {
                            console.log(err)
                            return;
                        } else {
                            console.log(`${v.name}创建完成`)
                        }
                    })
                } else if (v.type === "file") {
                    fs.readFile(path.join(__dirname, v.name), (err, data) => {
                        if (err) {
                            console.log(err);
                            return;
                        } else {
                            fs.writeFile(path.join("./", rootName, v.name), data, (err) => {
                                if (err) {
                                    console.log(err);
                                    return;
                                } else {
                                    console.log(`${v.name}创建成功`);
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}
exports.init = init;