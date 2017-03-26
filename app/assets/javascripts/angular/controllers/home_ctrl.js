(function() {
  angular.module("app").controller("homeController", ['$scope', '$log', '$location', 'cityService', function($scope, $log, $location, cityService) {
    $log.log('home page');
    $scope.city = cityService.city;

    $scope.$watch('city', function() {
      cityService.city = $scope.city;
    });

    $scope.submit = function() {
      $location.path("/forecast");
    };
  }]);
})()