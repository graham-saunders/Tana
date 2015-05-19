(function() {
	'use strict';

	/*
	*	@name Add Controller
	*	@author Graham Saunders
	*	@kind Controller
	*	@app Tana
	*/

	app.controller('AddCtrl', function ($scope, $location, PostService, Auth) {

		$scope.signedIn = Auth.signedIn;
		$scope.logout = Auth.logout;
		$scope.user = Auth.user;

		$scope.createPost = function () {
			$scope.post.creator = $scope.user.profile.username;
			$scope.post.creatorUID = $scope.user.uid;

	    	PostService.create($scope.post).then(function (ref) {
	    		$location.path('/post/' + ref.name());
	    	});
	    };

	});

}());