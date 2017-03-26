// CUSTOM DIRECTIVES
angular.module("app").directive('cityTempData', function() {
  return {
    templateUrl: 'assets/angular/directives/city_result.html',
    scope: {
      dayObject: "=",
      formatDate: "&",
      formatTemp: "&",
      dateFormat: "@"
    }
  }
});