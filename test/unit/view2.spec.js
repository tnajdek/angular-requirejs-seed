/*global module, inject */
'use strict';

define(['app', 'angularMocks'], function(app) {
	describe('myApp.view2 module', function() {

		beforeEach(module('myApp.view2'));

		describe('view2 controller', function(){

			it('should ....', inject(function($controller) {
			//spec body
			var view2Ctrl = $controller('View2Ctrl', { $scope: {} });
			expect(view2Ctrl).toBeDefined();
		}));

		});
	});
});