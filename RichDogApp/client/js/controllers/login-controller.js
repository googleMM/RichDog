angular.module('richdog',[])
    .controller('loginController', function($scope,$location) {

    'use strict';
    $scope.isLoginSuccess = false;
    var successHandler = function(){
      $location.path("/login");
    };
    var errorHandler = function(){
      $location.path("/login");
    };
    $scope.login = function() {
        if($scope.emailAddress==='admin@g.com'){
           successHandler();
        }else{
          errorHandler();
        }
    };

});
