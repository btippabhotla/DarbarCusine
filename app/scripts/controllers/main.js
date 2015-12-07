'use strict';

/**
 * @ngdoc function
 * @name darbarCusineApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the darbarCusineApp
 */
angular.module('darbarCusineApp')
  .controller('MainCtrl', function ($scope, $timeout) {
   $scope.clock = "loading clock..."; 
    $scope.tickInterval = 1000;

    var tick = function () {
        $scope.clock = Date.now()
        $timeout(tick, $scope.tickInterval); 
    }
    
    var date_format = '12'; /* FORMAT CAN BE 12 hour (12) OR 24 hour (24)*/


var d       = new Date();
var hour    = d.getHours();  /* Returns the hour (from 0-23) */
var minutes     = d.getMinutes();  /* Returns the minutes (from 0-59) */
var result  = hour;
   	var ext     = '';

	if(date_format == '12'){
	    if(hour > 12){
	        ext = 'PM';
	        hour = (hour - 12);

	        if(hour < 10){
	            result = "0" + hour;
	        }else if(hour == 12){
	            hour = "00";
	            ext = 'AM';
	        }
	    }
	    else if(hour < 12){
	        result = ((hour < 10) ? "0" + hour : hour);
	        ext = 'AM';
	    }else if(hour == 12){
	        ext = 'PM';
	    }
	}
	$scope.ampm = ext;
    $timeout(tick, $scope.tickInterval);
  });


var displayTime = function (){
 var today = new Date();
var time = today.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")
document.write(time);
};
/*app.filter('ampmtime',
    function () {
        return function (value) {
            if (!value) { return ''; }
            var hours = new Date(value).getHours();
            var minutes = new Date(value).getMinutes();
            var ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0' + minutes : minutes;
            var strTime = hours + ':' + minutes + ' ' + ampm;
            return strTime;
        }
    
*/