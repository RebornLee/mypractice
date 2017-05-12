/*
 * @Author: Marte
 * @Date:   2017-05-11 14:55:22
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-05-12 10:23:37
 */

'use strict';
var box = document.getElementById("box");

function snake(length) {
    this.length = length;
    this.direction = "right";
    this.left = 300,
    this.top = 350,
    this.each_width = 10,
    this.each_height = 10,
    this.gameover = false,
    this.arrL = [],
    this.arrT = []

}
var snakebody = document.getElementById("snake");
snake.prototype = {
    /*------------------------body初始化-----------------------------*/
    init: function() {
        for(var i =0;i<this.length;i++){
            var skbody = document.createElement("div");
            skbody.style.width = "10px";
            skbody.style.height = "10px";
            skbody.style.left = this.left-10*i + "px";
            skbody.style.top = this.top + "px";
            skbody.style.backgroundColor = "green"
            snakebody.appendChild(skbody)
        }
        snake.food();
        this.move();
    },
    move: function() {
        var timer = null;
        var that = this;
        timer = setInterval(function() {
            if (!that.gameover) {
                var food = document.getElementById("food")
                var snakebody = document.getElementById("snake");
                var snake_each = snakebody.children;
                    //位置数组
                // for (var i = 0; i < snake_each.length; i++) {
                //     that.arrL[i] = snake_each[i].style.left;
                //     that.arrT[i] = snake_each[i].style.top;
                // }
                //方向判断
                if (that.direction == "right") {
                    that.left += 10;
                }
                if (that.direction == "up") {
                    that.top -= 10;
                }
                if (that.direction == "left") {
                    that.left -= 10;
                }
                if (that.direction == "down") {
                    that.top += 10;
                }
                if (that.left == 1000 || that.top == 650) {
                    gameover = true;
                    clearInterval(timer);
                    alert("gameover")
                }
                //移动身体
                if (!that.gameover) {
                    if (that.left + "px" == food.style.left && that.top + "px" == food.style.top) {
                        box.removeChild(food);
                        var div = document.createElement("div");
                        div.style.left = that.left + "px" ;
                        div.style.top = that.top + "px" ;
                        snakebody.insertBefore(div,snake_each[0]);
                        snake.food();
                    }else{
                        snake_each[snake_each.length-1].style.left = that.left + "px";
                        snake_each[snake_each.length-1].style.top = that.top + "px";
                        snakebody.insertBefore(snake_each[snake_each.length-1],snake_each[0]);
                    }

                }
            }

        }, 100)
    }


}
snake.gameover = false;

snake.food = function() {
    var food = document.createElement("div");
    var left = parseInt(Math.random() * 99) * 10;
    var top = parseInt(Math.random() * 64) * 10;
    food.style.width = "10px";
    food.style.height = "10px";
    food.style.backgroundColor = "black";
    food.id = "food";
    food.style.left = left + "px";
    food.style.top = top + "px";
    box.append(food);
}