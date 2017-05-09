define(function(require,exports,module){
	function drag (selector1,selector2){
		this.drag =  document.getElementById(selector1);
		console.log(this.drag)
		this.dragbox = document.getElementById(selector2);
	}
	module.exports = drag;

	drag.prototype = {
		init:function(){
			var that = this;
			this.drag.onmousedown = function(e){
				e = e || window.event;
				var startX = e.clientX - this.offsetLeft;
				var startY = e.clientY - this.offsetTop;
				that.drag.onmousemove = function(e){
					e= e|| window.event;
					
					that.drag.style.left = (e.clientX - startX) < 0 ? 0 : ((e.clientX - startX)>that.dragbox.offsetWidth - this.offsetWidth ? that.dragbox.offsetWidth - this.offsetWidth + "px" : e.clientX - startX + "px");
					that.drag.style.top = (e.clientY - startY) < 0 ? 0 : ((e.clientY - startY)>that.dragbox.offsetHeight - this.offsetHeight? that.dragbox.offsetHeight - this.offsetHeight + "px" : e.clientY - startY + "px");

				}
			}
			document.onmouseup = function(){
				that.drag.onmousemove = null
			}
		}
	}
})