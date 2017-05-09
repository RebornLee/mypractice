define(function(require,exports,method){
	var caculator = require("calculate.js");
	var cal = new caculator ("calculate");
	cal.init();
	var Tab = require("tab.js");
	var tab = new Tab ("tab");
	tab.init();
	var Drag = require("drug.js");
	var drag = new Drag ("drag","left");
	drag.init();
})