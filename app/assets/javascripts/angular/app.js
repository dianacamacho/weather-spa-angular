(function() {
  // MODULE
  var app = angular.module("app", ['ngRoute', 'ngResource']);

  // ROUTES
  app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/assets/angular/views/home.html',
        controller: 'homeController'
      })
      .when('/forecast', {
        templateUrl: '/assets/angular/views/forecast.html',
        controller: 'forecastController'
      })
      .when('/forecast/:days', {
        templateUrl: '/assets/angular/views/forecast.html',
        controller: 'forecastController'
      })
  });

  // CUSTOM SERVICES
  app.service('cityService', function() {
    this.city = 'Chicago, IL';
  });

  // CUSTOM DIRECTIVES
  app.directive('cityTempData', function() {
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
})()