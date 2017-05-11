(function(window){

	var arr = [],
		push = arr.push;
	function Lquery (selector){
		return new Lquery.fn.init(selector);
	}

	window.Lquery = Lquery;

	Lquery.fn = Lquery.prototype = {
		init:function(selector){
			if(!selector) return this;
			if(typeof selector == "string") {
				if(selector.charAt(0) == "<" && selector.charAt(selector.length-1) == ">"){
					push.apply(this,Lquery.parseHTML(selector));
					return this;
				}
			}else{
				push.apply(this,Lquery.select(selector));
				return this;
			}
			if()
		},
		each:function(callback){
			return Lquery.each(this,callback);
		},
		map:function(callback){
			return Lquery.map(this,callback);
		}
	} 
	Lquery.select = function(selector){
		return document.querySelector(selector);
	}
	Lquery.parseHTML = function(selector){
		var res = []
		var div = document.createElement("div");
		div.innerHTML = selector;
		for(var i = 0 ;i<div.childNodes.length;i++){
			res.push(childNodes[i]);
		}
		return res;
	}
	Lquery.isArrayLike = function(array){
		var length = array && array.length;
		return typeof length === "number" && length>=0;
	}
	Lquery.each = function(array,callback){
		if(this.isArrayLike(array)){
			for(var i = 0 ; i< array.length - 1; i++){
				if(callback.call(array[i],i,array[i])===false) break;
			}
		}else{
			for(var k in array){
				if(callback.call(array[k],k,array[k]) === false)break;
			}
		}
		return array;
	}
	Lquery.map = function(array,callback){
		var arr = []
		if(this.isArrayLike(array)){
			for(var i = 0 ; i< array.length - 1; i++){
				var tmp = callback(array[i],i);
				if(tmp !==undefined){
					arr.push(tmp);
				}
			}
		}else{
			for(var k in array){
				var tmp = callback(array[k],k);
				if(tmp!==undefined){
					arr.push(tmp)
				}
			}
		}
		return arr;
	}
})(window)