(function() {
  angular.module("app").controller("forecastController", ["$scope", "$log", "$resource", "$routeParams", "cityService", function($scope, $log, $resource, $routeParams, cityService) {
    $log.log("forecast page");
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || 2;

    var weatherApiPath = "http://api.openweathermap.org/data/2.5/forecast/daily";
    var weatherRequest = $resource(weatherApiPath);
    var cityParams = { q: $scope.city, cnt: $scope.days, appid: "da24829670b77e8c573a24a1543be0e7" };

    weatherRequest.get(cityParams, function(result) {
      $scope.weatherResult = result.list;
    }, function(errors) {
      $scope.errors = errors;
    });

    $scope.convertToFahrenheit = function(degK) {
      var degF = Math.round(1.8 * (degK - 273.15) + 32);
      return degF.toString() + ' F';
    };

    $scope.convertToDate = function(dt) {
      return new Date(dt * 1000);
    };
  }]);
})()