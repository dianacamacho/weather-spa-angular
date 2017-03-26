(function() {
  angular.module("app").controller("forecastController", ["$scope", "$log", "$resource", "$routeParams", "cityService", "weatherService", function($scope, $log, $resource, $routeParams, cityService, weatherService) {
    $log.log("forecast page");
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || 2;

    $scope.weatherResult = weatherService.getWeather($scope.city, $scope.days);

    $scope.convertToFahrenheit = function(degK) {
      var degF = Math.round(1.8 * (degK - 273.15) + 32);
      return degF.toString() + ' F';
    };

    $scope.convertToDate = function(dt) {
      return new Date(dt * 1000);
    };
  }]);
})()