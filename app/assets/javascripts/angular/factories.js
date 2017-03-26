// FACTORIES
angular.module("app").factory('weatherService', ['$resource', function($resource) {
  var weatherApiPath = "http://api.openweathermap.org/data/2.5/forecast/daily";
  var weatherRequest = $resource(weatherApiPath);

  return {
    getWeather: function(cityParams) {
      return weatherRequest.get(cityParams, function(result) {
        console.log("SUCCESS RESULT");
        console.log(result);
        return result;
      }, function(errors) {
        console.log("ERROR");
        console.log(errors);
        return errors;
      });
    }
  }
}]);
