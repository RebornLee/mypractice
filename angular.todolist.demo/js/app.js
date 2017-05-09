(function(angular){
  var app = angular.module("myApp",[]);
  app.controller("ctrl",["$scope","$window","$location",function($scope,$window,$location){
    var data = $window.localStorage.getItem("todos") || "[]";
    $scope.save  = function(){
      $window.localStorage.setItem("todos",JSON.stringify($scope.todos));
       $scope.isEditingId = -1;
       console.log(1)
    }
    $scope.todos = JSON.parse(data);
    $scope.add = function(){
      $scope.todos.push({
        id:$scope.todos.length,
        name:$scope.newTodo,
        completed:false
      }) 
      $scope.save();
      $scope.newTodo = "";
    }
    $scope.remove = function(index){
      $scope.todos.splice(index,1)
      $scope.save();
    }
    $scope.statusChange = function(){
      $scope.save();
    }
    $scope.toggleAll = function(){
      for(var i = 0 ; i<$scope.todos.length;i++){
        $scope.todos[i].completed = $scope.selectAll;
      }
    }
    $scope.edit = function (index){
      $scope.isEditingId = index;
    }
    $scope.loca = $location
    $scope.$watch("loca.url()",function(newValue,oldValue){
      switch(newValue){
        case "/active":
        $scope.isCompleted = {completed:false}
        break;

        case "/completed":
        $scope.isCompleted = {completed:true}
        break;
        default:
        $scope.isCompleted = {};
      } 
    })
    $scope.clearAll = function(){
      $scope.todos = [];
      $scope.save();
    }
  }])
})(angular)