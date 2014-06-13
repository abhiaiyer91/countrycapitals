(function(window){

'use strict';

window.app = angular
  .module('countrycapitalApp', [
    'ngRoute'
  ]);

window.app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html'
      })
      .when('/countries', {
        templateUrl: 'views/countries.html',
        controller: 'MainCtrl'
      })
      .when('/countries/:country', {
        templateUrl: 'views/capital.html',
        controller: 'countriesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


}(window));
