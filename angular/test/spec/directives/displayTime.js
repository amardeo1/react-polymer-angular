'use strict';

describe('Directive: time', function () {

  // load the directive's module
  beforeEach(module('msgTime'));

  var element, scope;

  beforeEach(inject(function ($rootScope, $compile) {
	var time = 1459748718875;
    scope = $rootScope.$new();
    element = angular.element('<display-time class="timeMsg" time="time"></display-time>');
    element = $compile(element)(scope);
    scope.$digest();
  }));

  it('should render for how long message has been posted', function (){
    expect(element.find('div').html()).toContain('ago');
  });

});