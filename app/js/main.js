require.config({
	paths: {
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
	'angular',
	'app',
	'routes'
], function(angular, app, routes) {
	'use strict';
		angular.bootstrap(document, [app['name']]);
		// Because of RequireJS we need to bootstrap the app app manually
		// and Angular Scenario runner won't be able to communicate with our app
		// unless we explicitly mark the container as app holder
		
		// You must have ng-app specified in your in your .html file (eg. <html ng-app > )
		// In order for Karma to run the tests
		
		// More info: https://groups.google.com/forum/#!msg/angular/yslVnZh9Yjk/MLi3VGXZLeMJ
});
