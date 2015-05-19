(function () {
	'use strict';

	/*
	*	@name Hostname Filter
	*	@author Graham Saunders
	*	@kind Filter
	*	@app Tana
	*/

	app.filter('HostnameFilter', function () {
		return function (str) {
			var url = document.createElement('a');

			url.href = str;

			return url.hostname;
		};
	});

}());