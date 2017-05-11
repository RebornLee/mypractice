console.log(1)
function Sum (){
	this.name = "Sum";
}
module.exports = Sum;

Sum.prototype = {
	init:function(a,b){
		return a+b;
	},
	Wyn:function(){
		console.log(this.name)
	}
}