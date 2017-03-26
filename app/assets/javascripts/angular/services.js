// CUSTOM SERVICES
angular.module("app").service('cityService', function() {
  this.city = 'Chicago, IL';
});

angular.module("app").service('weatherService', ['$resource', function($resource) {
  var weatherApiPath = "http://api.openweathermap.org/data/2.5/forecast/daily";
  var weatherRequest = $resource(weatherApiPath);
  
  this.getWeather = function(cityParams) {
    return weatherData = weatherRequest.get(cityParams);
  }
}]);
