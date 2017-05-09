(function(angular){
	var app = angular.module("main",["movieList"]);
	app.controller("active",["$scope","$location",function($scope,$location){
		$scope.loca = $location;
		$scope.$watch("loca.url()",function(newValue,oldValue){
			$scope.hash = newValue;
		})
	}])
})(angular)