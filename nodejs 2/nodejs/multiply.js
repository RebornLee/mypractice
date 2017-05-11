function Multiply (){
	this.name = "Multiply";
}

module.exports = Multiply;

Multiply.prototype = {
	init:function(a,b){
		return a*b
	},
	Wyn : function(){
		console.log(this.name)
	}
}