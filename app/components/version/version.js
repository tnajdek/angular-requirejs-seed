'use strict';

define(['angular', 'components/version/version-directive', 'components/version/interpolate-filter'],
	function(angular, versionDirective, interpolateFilter) {
		angular.module('myApp.version', [
		  'myApp.version.interpolate-filter',
		  'myApp.version.version-directive'
		])
		.value('version', '0.3');
});