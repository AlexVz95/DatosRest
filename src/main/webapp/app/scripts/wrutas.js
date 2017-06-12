var app = angular
	.module('app', [
		'ngResource',
		'ngSanitize',
		'ngRoute'
	]).config(function ($routeProvider, $provide, $httpProvider){
		$routeProvider
		.when('/', {
			templateUrl: 'bienvenido.html',
			controller: 'MainCtrl'
		})
		.when('/datos', {
			templateUrl: 'datos.html',
			controller: 'datos'
		})

		.otherwise({
			redirectTo: '/'
		});
	});