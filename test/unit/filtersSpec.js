/*global describe beforeEach it expect inject */

define([
	'angular',
	'angularMocks',
	'app'
], function(angular, mocks, app) {
	'use strict';

	describe('filter', function() {
		beforeEach(mocks.module('myApp.filters'));
		describe('interpolate', function() {
			beforeEach(mocks.module(function($provide) {
				$provide.value('version', 'TEST_VER');
			}));


			it('should replace VERSION', mocks.inject(function(interpolateFilter) {
				expect(interpolateFilter('before %VERSION% after')).toEqual('before TEST_VER after');
			}));
		});
	});
});
