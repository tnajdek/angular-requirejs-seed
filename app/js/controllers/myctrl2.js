define([], function() {
	return ['$scope', '$http', function($scope, $http) {
		// You can access the scope of the controller from here
		$scope.welcomeMessage = 'hey this is myctrl2.js!';

		// because this has happened asynchroneusly we've missed
		// Angular's initial call to $apply after the controller has been loaded
		// hence we need to explicityly call it at the end of our Controller constructor
		$scope.$apply();
	}];
});