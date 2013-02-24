define(['angular', 'services'], function (angular) {
	'use strict';
	
	return angular.module('myApp.controllers', ['myApp.services'])
		// Sample controller where service is being used
		.controller('MyCtrl1', ['$scope', 'version', function ($scope, version) {
			$scope.scopedAppVersion = version;
		}])
		.controller('MyCtrl2', function () {
			// ...
		});
});