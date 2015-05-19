(function() {
	'use strict';

	/*
	*	@name Post Serive
	*	@author Graham Saunders
	*	@kind Service
	*	@app Tana
	*/

	app.factory('PostService', function ($firebase, firebasePosts) {
		var ref = new Firebase('radiant-inferno-9561.firebaseio.com');
		var posts = $firebase(ref.child('posts')).$asArray();

		var Post = {
			all: posts,
			create: function (post) {
				return posts.$add(post).then(function (postRef) {
					$firebase(ref.child('user_posts').child(post.creatorUID))
												     .$push(postRef.name());

					return postRef;

				});
			},
			get: function(postId) {
				return $firebase(ref.child('posts').child(postId)).$asObject();
			},
			update: function (post) {
				return $firebase(ref.child('post').child(post.id)).$update({
					title: post.title,
					url: post.url
				});
			},
			delete: function(post) {
				return posts.$remove(post);
			},
			comments: function(postId) {
				return $firebase(ref.child('comments').child(postId)).$asArray();
			}
		};

		return Post;

	});
}());