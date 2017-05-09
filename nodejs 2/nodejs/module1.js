

function module1(){
	this.name = "module1";

}

module.exports = module1;

module1.prototype = {
	init:function(){
		console.log(this.name)
	}
}

global.showinfo = function(){
	console.log("this is global showinfo")
}