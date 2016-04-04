'use strict';

/**
 * @ngdoc directive
 * @name angularApp.directive:comment
 * @description
 * # comment
 */
angular.module('comment', ['msgTime'])
  .directive('commentModel', function () {
    return {
      template: '<div class="comment">' +
				  '<div>' +
					  '<h2 class="commentAuthor">' +
						  '{{author}}' +
					  '</h2>' +
					  '<display-time class="timeMsg" time="{{msgPostedTime}}"></display-time>' +
				  '</div>' +
                  '<ng-transclude></ng-transclude>' +
                '</div>',
      restrict: 'E',
      transclude: true,
      scope: {
        author: '@',
		msgPostedTime: '@'
      },
      link: function postLink(scope, element, attrs) {}
    };
  });
