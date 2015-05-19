(function(){
	'use strict';

	/*
	*	@name User Ctrl
	*	@author Graham Saunders
	*	@kind Controller
	*	@app Tana
	*/


	app.controller('UserCtrl', function ($scope, $routeParams, UserService) {
		var uid = $routeParams.uid;

		$scope.profile = UserService.get(uid);
		
		UserService.getPosts(uid).then(function(posts) {
			$scope.posts = posts;
		});

	});
}());