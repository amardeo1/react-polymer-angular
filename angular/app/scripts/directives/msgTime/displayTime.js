'use strict';

/**
 * @author Amar Deo
 * @ngdoc directive
 * @name angularApp.directive:msgTime
 * @description
 * # msgTime
 */
angular.module('msgTime', [])
  .directive('displayTime', function ($interval) {
    return {
      template: '<div class="timeDiv">' +
                  '{{msgTime}}' +
                '</div>',
      restrict: 'E',
      scope: {
        time: '@'
      },
      link: function(scope, element, attrs){
		/* calculates time difference between message post time and current time. It does not take timezone into consideration */
		var getUserFriendlyTime = function () {
			scope.msgTime = "";
			if(scope.time){
				var timeStart = parseInt(scope.time);
				var timeEnd = new Date().getTime();
				
				var hourDiff = timeEnd - timeStart; //in ms
				var secDiff = hourDiff / 1000; //in s
				var minDiff = hourDiff / 60 / 1000; //in minutes
				var hDiff = hourDiff / 3600 / 1000; //in hours
				var tempTime = {};
				tempTime.days = Math.floor(hDiff / 24);
				tempTime.hours = Math.floor(hDiff - tempTime.days * 24);
				tempTime.minutes = minDiff - 60 * tempTime.hours;
				tempTime.seconds = secDiff - 3600 * tempTime.hours - 60*tempTime.minutes;
				
				if(tempTime.days >= 1){
					scope.msgTime = tempTime.days + (tempTime.days > 1 ? " days " : " day ") + "ago";
				} else if(tempTime.hours >= 1){
					scope.msgTime = tempTime.hours + (tempTime.hours > 1 ? " hours " : " hour ") + "ago";
				} else{
					scope.msgTime = (tempTime.minutes > 1 ? Math.floor(tempTime.minutes) : 1) + (Math.floor(tempTime.minutes) > 1 ? " minutes " : " minute ") + "ago";
					var x = 5;
				}
			}
		};
		
		getUserFriendlyTime();
		$interval(function(){
			getUserFriendlyTime();
		}, 10000);
      }
  }});
