(function() {
  angular.module("app").controller("homeController", ['$scope', '$log', 'cityService', function($scope, $log, cityService) {
    $log.log('home page');
    $scope.city = cityService.city;

    $scope.$watch('city', function() {
      cityService.city = $scope.city;
    });
  }]);
})()