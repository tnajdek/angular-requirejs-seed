// we get all the test files automatically
var tests = [];
for (var file in window.__karma__.files) {
	if (window.__karma__.files.hasOwnProperty(file)) {
		if (/spec\.js$/i.test(file)) {
			tests.push(file);
		}
	}
}

require.config({
	paths: {
		angular: '/base/app/bower_components/angular/angular',
		angularRoute: '/base/app/bower_components/angular-route/angular-route',
		angularMocks: '/base/app/bower_components/angular-mocks/angular-mocks',
		text: '/base/app/bower_components/requirejs-text/text',
		fixtures: '/base/test/unit/fixtures'

	},
	baseUrl: '/base/app/js',
	shim: {
		'angular' : {'exports' : 'angular'},
		'angularRoute': ['angular'],
		'angularMocks': {
			deps:['angular'],
			'exports':'angular.mock'
		}
	},
	deps: tests,
	callback: window.__karma__.start
});
