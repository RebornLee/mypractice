define(function(require,exports,module){
	function Tab (selector){
		this.tab = document.getElementById(selector);
		this.btns = this.tab.getElementsByTagName("input");
		this.divs = this.tab.getElementsByTagName("div");
	}

	module.exports = Tab;
	Tab.prototype = {
		init:function(){
			var that =this;
			for(var i = 0 ; i< this.btns.length; i++){
				this.btns[i].index = i;
				this.btns[i].onclick = function(){
					for(var j = 0 ; j< that.divs.length ; j++){
						that.divs[j].style.display = "none";
					}
					that.divs[this.index].style.display = "block";
				}
			}
		}
	}
})