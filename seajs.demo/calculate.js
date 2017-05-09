define(function(require,exports,module){
	function calculator (selector){
		this.calc = document.getElementById(selector);
		this.num1 = this.calc.getElementsByTagName("input")[0];
		this.num2 = this.calc.getElementsByTagName("input")[1];
		this.btn = this.calc.getElementsByTagName("input")[2];
		this.symbol = this.calc.getElementsByTagName("select")[0];
		this.result = this.calc.getElementsByTagName("div")[0];
	}
	module.exports = calculator;
	calculator.prototype = {
		init:function(){
			var that = this;
			this.btn.onclick = function(){
				switch(that.symbol.value-0){
					case 1:
					that.result.innerHTML =  (that.num1.value-0) + (that.num2.value-0);
					break;
					case 2:
					that.result.innerHTML = (that.num1.value-0) - (that.num2.value-0);
					break;
					case 3:
					that.result.innerHTML =  (that.num1.value-0) * (that.num2.value-0);
					break;
					case 4:
					that.result.innerHTML =  (that.num1.value-0) / (that.num2.value-0);
					break;
					case 5:
					that.result.innerHTML = (that.num1.value-0) % (that.num2.value-0);
					break;
				}

			}
		}
	}
})