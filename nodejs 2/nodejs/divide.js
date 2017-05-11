function Divide (){
	this.name = "Divide";
}

module.exports = Divide;

Divide.prototype = {
	init:function(a,b){
		return a/b;
	},
	Wyn : function(){
		console.log(this.name)
	}
}