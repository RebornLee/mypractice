function Subtract(){
	this.name = "Subtract";
}

module.exports = Subtract;

Subtract.prototype = {
	init:function(a,b){
		return a-b;
	},
	Wyn : function(){
		console.log(this.name)
	}
}