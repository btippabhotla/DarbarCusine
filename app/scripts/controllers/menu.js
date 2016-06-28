angular.module('darbarCusineApp')
  .controller('MenuCtrl', ['$scope', '$http', function ($scope, $http) {
        $http.get('JsonData/menu.json').then(function(menuItems) {
                $scope.items = menuItems.data;
        });

        $scope.vegetarian = function(){
          $http.get('JsonData/vegetarian.json').then(function(vegetarianItems){
            $scope.vitems = vegetarianItems.data;
          });
        };

        $scope.nonvegetarian = function(){
          $http.get('JsonData/nonvegetarian.json').then(function(nonvegetarianItems){
            $scope.nvitems = nonvegetarianItems.data;
          });
        };

        $scope.biryanis = function(){
          $http.get('JsonData/biryanis.json').then(function(biryaniItems){
            $scope.bitems = biryaniItems.data;
          });
        };

        $scope.tandoorivindaloo = function(){
          $http.get('JsonData/tandoorivindaloo.json').then(function(tandoorivindalooItems){
            $scope.titems = tandoorivindalooItems.data;
          });
        };

        $scope.seafood = function(){
          $http.get('JsonData/seafood.json').then(function(seafoodItems){
            $scope.sitems = seafoodItems.data;
          });
        };

        $scope.desserts = function(){
          $http.get('JsonData/desserts.json').then(function(dessertItems){
            $scope.ditems = dessertItems.data;
          });
        };

        $scope.sideorder = function(){
          $http.get('JsonData/sideorder.json').then(function(sideorderItems){
            $scope.soitems = sideorderItems.data;
          });
        };
}]); 


