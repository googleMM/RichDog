angular.module('rich-dog', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginController'
      })
  }]);
