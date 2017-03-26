(function() {
  angular.module("app").controller("forecastController", ['$scope', '$log', 'cityService', function($scope, $log, cityService) {
    $log.log('forecast page');
    $scope.city = cityService.city;

    $scope.$watch('city', function() {
      cityService.city = $scope.city;
    });
  }]);
})()