(function() {
  angular.module("app").controller("weatherController", ['$scope', '$log', function($scope, $log) {
    $scope.message = 'hello';
    $log.log('hello log');
  }]);
})()