(function(angular){
	var app = angular.module("main",["movieList"]);
	app.controller("active",["$scope","$location",function($scope,$location){
		$scope.loca = $location;
		$scope.hash = "/home_page";
		$scope.$watch('loca.url()', function(newValue, oldValue){
			$scope.hash = newValue;
		})
	}])
})(angular)