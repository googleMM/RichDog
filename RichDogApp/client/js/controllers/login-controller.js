angular.module('richdog',[])
    .controller('loginController', function($scope,$location) {

    'use strict';
    $scope.isLoginSuccess = false;
    var successHandler = function(){
      $location.path("/login.html");
    };
    var errorHandler = function(){
      $scope.showError = true;
    };
    $scope.login = function() {
        if($scope.emailAddress==='admin@g.com'){
           successHandler();
        }else{
          errorHandler();
        }
    };

});
