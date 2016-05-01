/*
  'use strict';

angular.module('darbarCusineApp', [])
  .controller('MenuCtrl', ['$scope', '$http', function ($scope, $http) {

    $http.get("JsonData/Appetizers.json").success(function (response) {
           $scope.names = response.data;
           console.log($scope.names);
});

  }]); 

*/