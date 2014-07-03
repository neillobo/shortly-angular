angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.loading = true;
  $scope.addLink = function(){
    Links.addLink($scope.link).then(function(result){
      $scope.short={};
      $scope.short = result.code;
      $scope.shortCode = "http://localhost:8000/api/links/"+$scope.short;
      $scope.loading = false;
    });
  };
});
