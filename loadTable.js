(function() {
	var app = angular.module('loadTable', []);
	
	app.controller('MainControler', function($scope,$http){
		$scope.content = null;
		$http.get('https://jsonplaceholder.typicode.com/todos').then(function(result){
          $scope.contents = result.data; 
        });

	});
})();