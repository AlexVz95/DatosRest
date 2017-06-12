var app = angular
	.module('app', [
		'ngResource',
		'ngSanitize',
		'ngRoute'
	]).config(function ($routeProvider, $provide, $httpProvider){
		$routeProvider
		.when('/', {
			templateUrl: 'app/view/bienvenido.html',
			controller: 'MainCtrl'
		})
		.when('/datos', {
			templateUrl: 'app/view/datos.html',
			controller: 'datos'
		})

		.otherwise({
			redirectTo: '/'
		});
	});