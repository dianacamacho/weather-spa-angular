// CUSTOM SERVICES
angular.module("app").service('cityService', function() {
  this.city = 'Chicago, IL';
});

angular.module("app").service('weatherService', ['$resource', function($resource) {
  var weatherApiPath = "http://api.openweathermap.org/data/2.5/forecast/daily";
  
  this.getWeather = function(city, days) {
    var weatherRequest = $resource(weatherApiPath);
    var cityParams = { q: city, cnt: days, appid: "da24829670b77e8c573a24a1543be0e7" };
    return {
      weatherRequest.get(cityParams, function(result) {
        return result.list;
        console.log(result);
      }, function(errors) {
        return errors;
      });
    }
  }
}])