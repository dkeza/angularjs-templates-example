	var app = angular.module('App', ['ngRoute']);

	app.config(function($routeProvider) {

		$routeProvider

		.when('/', {
	    templateUrl: 'templates/home.html',
	    controller: 'homeController'
	  })

	  .when('/page1', {
	    templateUrl: 'templates/page1.html',
	    controller: 'page1Controller'
	  })

	  .when('/page2', {
	    templateUrl: 'templates/page2.html',
	    controller: 'page2Controller'
	  });
	});

	app.controller('homeController', function($scope) {
	  $scope.message = 'Message on home page';
	});

	app.controller('page1Controller', function($scope) {
	  $scope.message = 'Message on page 1';
	});

	app.controller('page2Controller', function($scope) {
	  $scope.message = 'Message on page 2';
	});