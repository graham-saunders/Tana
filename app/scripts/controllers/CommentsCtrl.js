(function() {
	'use strict';

	/*
	*	@name Comments
	*	@author Graham Saunders
	*	@kind Controller
	*	@app Tana
	*/

	app.controller('CommentsCtrl', function ($scope, $routeParams, PostService, Auth) {
		$scope.post = PostService.get($routeParams.id);
		$scope.comments = PostService.comments($routeParams.id);

		$scope.user = Auth.user;
		$scope.signedIn = Auth.signedIn;

		$scope.addComment = function () {
			if(!$scope.commentText || $scope.commentText === '') {
				return;
			}

			var comment = {
				text: $scope.commentText,
				creator: $scope.user.profile.username,
				creatorUID: $scope.user.uid
			};

			$scope.comments.$add(comment);

			$scope.commentText = '';
		};
	});


}());