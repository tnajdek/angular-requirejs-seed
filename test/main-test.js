require.config({
	paths: {
		angular: 'lib/angular/angular',
		angularMocks: '/base/test/lib/angular/angular-mocks',
		text: 'lib/require/text',
		fixtures: '/base/test/unit/fixtures'

	},
	// files are served from /base
	// https://github.com/testacular/testacular/wiki/RequireJS
	baseUrl: '/base/app/js',
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
	'routes',
	'angularMocks',
	'/base/test/unit.js' //list all your unit files here

], function(angular, app, routes) {
		window.__testacular__.start();
});
