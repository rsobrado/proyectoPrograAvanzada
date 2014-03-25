'use strict';

angular.module('scrumStoryApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/admin', {
        templateUrl: 'views/sections/admin.html',
        controller: 'TasksCtrl'
      })
      .when('/task', {
        templateUrl: 'views/sections/task.html',
        controller: 'TasksCtrl'
      })
      .when('/user', {
        templateUrl: 'views/sections/user.html',
        controller: 'TasksCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
