define([
	'angular',
	'filters',
	'services',
	'directives',
	'controllers'
	], function (angular, filters, services, directives, controllers) {
		'use strict';

		return angular.module('myApp', ['myApp.controllers', 'myApp.filters', 'myApp.services', 'myApp.directives']);
});
