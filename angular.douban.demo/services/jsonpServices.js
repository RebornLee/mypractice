(function(angular){
  var app = angular.module("jsonpService",[]);
  app.service("jsonpservice",["$window",function($window){
    this.jsonp = function(url,arg,callback){
      var script = $window.document.createElement("script");
      var body = $window.document.getElementsByTagName("body")[0];
      var src = url + "?";
      for(var k in arg){
        src += k + "=" + arg[k] + "&";
      }
      var time = new Date().getTime();
      src += "callback=" + "myCB" + time;
      script.src = src;
      $window["myCB"+time]  =  function(data){
        callback(data);
      } 
      body.appendChild(script);
    }
  }])
})(angular)