(function(angular){
  var app = angular.module("movieList",["ngRoute","jsonpServices"]);
  app.config(["$routeProvider",function($routeProvider){
    $routeProvider.when("/:movieType/:page?",{
      templateUrl:"./movie_list/movie_list.html",
      controller:"movieListCtrl"
    })
  }])
  app.controller("movieListCtrl",["$scope","$route","$routeParams","Myservices",function($scope,$route,$routeParams,Myservices){
    var movieType = $routeParams.movieType;
    $scope.page = ($routeParams.page || "1")-0; 
    $scope.pageSize = 10;
    $scope.loading = true;
    var start = ($scope.page-1)*$scope.pageSize;
    Myservices.jsonP('http://api.douban.com/v2/movie/'+ movieType ,
        {start:start,count:$scope.pageSize},function(data){
          $scope.data = data;
          $scope.totalPage = Math.ceil($scope.data.total/$scope.pageSize);
          $scope.loading = false;
          $scope.$apply();
        }
      )
    $scope.getPage = function(nowPage) {
      $route.updateParams({page:nowPage})
    };
  }])
})(angular)