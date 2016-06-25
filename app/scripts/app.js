'use strict';

/**
 * @ngdoc overview
 * @name darbarCusineApp
 * @description
 * # darbarCusineApp
 *
 * Main module of the application.
 */
angular
  .module('darbarCusineApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/menu', {
        templateUrl: 'views/menu.html',
        controller: 'MenuCtrl'  
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
      })
      .when('/menu/VegetarianEntriees', {
        templateUrl: 'views/tabs/VegetarianEntriees.html',
        controller: 'VegCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
