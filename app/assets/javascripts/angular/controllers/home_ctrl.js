(function() {
  angular.module("app").controller("homeController", ['$scope', '$log', function($scope, $log) {
    $log.log('home page');
    $scope.message = 'home';
  }]);
})()