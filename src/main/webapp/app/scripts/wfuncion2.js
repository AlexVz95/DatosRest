angular.module('app')
	.controller('datos',['$scope','$http','$window','$location',
		function($scope, $http, $window, $location){
		$scope.username = "Alex";
		$scope.password = "12345";
		$http({
	    	method: 'POST',
	    	data: {
	    		usuario: $scope.username,
	    		password: $scope.password,
	    	},
	    	url: 'http://localhost:8080/EjercicioExamen1/services/datos/nombre',
	    }).then(function(dataCP){
	    	console.log(dataCP)
	    	$scope.name = dataCP.data.name;
	    	$scope.apePat = dataCP.data.apePat;
	    	$scope.apeMat = dataCP.data.apeMat;
	    	$scope.edad = dataCP.data.edad;
	    	$scope.sexo = dataCP.data.sexo;
	    	
	    	$scope.mensaje = dataCP.data.name;
	    	
	    });
		
		$scope.cambiarPag = function(){
			$location.path("/datos");
		}
	}])