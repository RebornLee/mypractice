/*
* @Author: Marte
* @Date:   2017-05-11 14:55:22
* @Last Modified by:   Marte
* @Last Modified time: 2017-05-11 15:23:44
*/

'use strict';

function snake (length) {
        this.length = length;
        this.direction  = "right";
        this.left = 300,
        this.top = 350,
        this.each_width = 10,
        this.each_height = 10


    }
var snakebody = document.getElementById("snake");
    snake.prototype = {
        /*------------------------body初始化-----------------------------*/
        init: function(){
            for(let i = 0 ; i<this.length;i++){
                let skbody = document.createElement("div");
                skbody.style.width = this.each_width + "px";
                skbody.style.height = this.each_height + "px";
                skbody.style.top = this.top + "px";
                skbody.style.left = this.left + i*10 + "px";
                snakebody.appendChild(skbody)
            }

        }
    }