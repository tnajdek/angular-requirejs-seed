/*global describe beforeEach it expect */

define([
	'angular',
	'angularMocks',
	'app'
], function(angular, mocks, app) {
	'use strict';

	describe('MyCtrl1', function(){
		var MyCtrl1, scope;

		beforeEach(function() {
			mocks.module('myApp.controllers');
			mocks.inject(function($rootScope, $controller) {
				scope = $rootScope.$new();
				MyCtrl1 = $controller('MyCtrl1', {
					$scope: scope
				});
			});
		});
	});

	describe('MyCtrl2', function(){
		//...
	});
});