'use strict';

/*
*   @name Main Module
*   @author Graham Saunders
*   @kind App Module
*   @app Tana
*/

var app = angular

    .module('TanaApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'firebase'
    ])

    .config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'views/posts.html',
            controller: 'PostsCtrl'
        })
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        })
        .when('/post/:id', {
            templateUrl: 'views/comments.html',
            controller: 'CommentsCtrl'
        })
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'LoginCtrl',
            resolve: {
                user: function (Auth) {
                    return Auth.resolveUser();
                }
            }
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl',
            resolve: {
                user: function (Auth) {
                    return Auth.resolveUser();
                }
            }
        })
        .when('/users/:uid', {
            templateUrl: 'views/user.html',
            controller: 'UserCtrl'
        })
        .when('/add', {
            templateUrl: 'views/add.html',
            controller: 'AddCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    })

    .constant('firebasePosts', 'https://radiant-inferno-9561.firebaseio.com');