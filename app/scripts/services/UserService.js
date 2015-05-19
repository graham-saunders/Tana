(function(){
	'use strict';

	/*
	*	@name User Service
	*	@author Graham Saunders
	*	@kind Service
	*	@app Tana
	*/

	app.factory('UserService', function ($window, firebasePosts, $firebase, PostService, $q) {
		var ref = new $window.Firebase('https://radiant-inferno-9561.firebaseio.com');

		var profile = {
			get: function (userId) {
				return $firebase(ref.child('profile').child(userId)).$asObject();
			},

			getPosts: function(userId) {
				var defer = $q.defer();

				$firebase(ref.child('user_posts').child(userId))
				.$asArray()
				.$loaded()
				.then(function(data) {
					var posts = {};

					for(var i = 0; i<data.length; i++) {
						var value = data[i].$value;
						posts[value] = PostService.get(value);
					}
					defer.resolve(posts);
				});

				return defer.promise;
			}
		};

		return profile;
	});


}());