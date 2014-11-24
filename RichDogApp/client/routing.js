angular.module('rich-dog').config(function($routeProvider) {

  'use strict';

  $routeProvider
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'loginController'
    })
    .otherwise({redirectTo: '/index'});
});
