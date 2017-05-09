(function(angular){
  var app = angular.module("jsonpServices",[]);
  app.service("Myservices",["$window",function($window){
    this.jsonP = function(url,arg,callback){
      var src = url + "?";
      for(var k in arg){
        src += k + "=" + arg[k] + "&";
      }
      var time = new Date().getTime();
      src += "callback="+ "myCB" + time;
      var script = $window.document.createElement("script");
      script.src = src;
      $window["myCB"+time] = function(data){
        callback(data);
      }
      $window.document.body.appendChild(script);
    }
  }])
})(angular)