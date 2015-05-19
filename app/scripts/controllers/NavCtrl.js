(function() {
	'use strict';

	/*
	*	@name Nav Controller
	*	@author Graham Saunders
	*	@kind Controller
	*	@app Tana
	*/

	app.controller('NavCtrl', function ($scope, $location, Auth) {

		$scope.signedIn = Auth.signedIn;
		$scope.logout = Auth.logout;
		$scope.user = Auth.user;
		

	});

}());