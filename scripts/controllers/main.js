
'use strict';

window.app.controller('MainCtrl', ['$scope', 'countryService',
  				 function ($scope, countryService) {
  				 	$scope.cache = [];
  				 	$scope.data = {};
  				 	countryService.load().then(function(data){
      						$scope.data = data['geonames'];
      						
						      if($scope.data === undefined)
						          return;
						      
						      $scope.cache.push($scope.data);

						});
				
  }]);


