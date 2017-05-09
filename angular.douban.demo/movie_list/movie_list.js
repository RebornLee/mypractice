(function(angular){
  var app = angular.module("movieList",["ngRoute","jsonpService"]);
  app.config(["$routeProvider",function($routeProvider){
    $routeProvider.when("/:movietype/:page?",{
        templateUrl:"./movie_list/movie_list.html",
        controller:"movieListCtrl"
    })
  }])
  app.controller("movieListCtrl",["$scope","$route","$routeParams","jsonpservice",function($scope,$route,$routeParams,jsonpservice){
    console.log(1)
    var url = $routeParams.movietype;
    var pageSize = 5;
    $scope.page =( $routeParams.page || "1")-0;
    jsonpservice.jsonp("http://api.douban.com/v2/movie/" + url,{start:$scope.page,count:pageSize} ,function(data){
      $scope.data = data;
      console.log($scope.data)
      $scope.totalPage = data.total;
      $scope.$apply();
    })
    $scope.getPage= function(page){
      $route.updateParams({page:page});
    }
  }])
})(angular)