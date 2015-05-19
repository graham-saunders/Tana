(function() {
	'use strict';

	/*
	*	@name Posts Controller
	*	@author Graham Saunders
	*	@kind Controller
	*	@app Tana
	*/

	app.controller('PostsCtrl', function ($scope, $location, PostService, Auth) {
		$scope.posts = PostService.all;
		$scope.signedIn = Auth.signedIn;
		$scope.user = Auth.user;

	    $scope.editPost = function (post) {
			$scope.editPost = {
				url: post.url, 
				title: post.title,
				id: post.$id
			}
	    };

	    $scope.updatePost = function () {
	    	PostService.update($scope.editPost).then(function() {
	    		$scope.editPost = {url: '', title: ''};
	    	});
	    };

	    $scope.deletePost = function (post) {
			PostService.delete(post);
	    };
	});


}());