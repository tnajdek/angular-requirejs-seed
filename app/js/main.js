require.config({
	paths: {
		jquery: 'lib/jquery/jquery-1.9.1',
		angular: 'lib/angular/angular',
		text: 'lib/require/text'
	},
	baseUrl: '/app/js',
	shim: {
		'angular' : {'exports' : 'angular'},
		'angularMocks': {deps:['angular'], 'exports':'angular.mock'}
	},
	priority: [
		"angular"
	]
});

require( [
	'jquery',
	'angular',
	'app',
	'routes'
], function($, angular, app, routes) {
	'use strict';
	$(document).ready(function () {
		var $html = $('html');
		angular.bootstrap($html, [app['name']]);
		// Because of RequireJS we need to bootstrap the app app manually
		// and Angular Scenario runner won't be able to communicate with our app
		// unless we explicitely mark the container as app holder
		// More info: https://groups.google.com/forum/#!msg/angular/yslVnZh9Yjk/MLi3VGXZLeMJ
		$html.addClass('ng-app');
	});
});
