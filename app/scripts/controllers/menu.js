angular.module('darbarCusineApp')
  .controller('MenuCtrl', ['$scope', '$http', function ($scope, $http) {
        $http.get('JsonData/menu.json').then(function(menuItems) {
                $scope.items = menuItems.data;
        });
}]); 


