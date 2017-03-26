// ROUTES
angular.module("app").config(function($routeProvider) {
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