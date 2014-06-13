'use strict';

window.app.controller('countriesCtrl', ['$scope', '$routeParams', 'countrySingle',
  function($scope, $routeParams, countrySingle) {
    
    $scope.cache = [];
    $scope.data = {};
    $scope.cName = $routeParams.country;


    countrySingle.load($scope.cName).then(function(data){
        $scope.data = data['geonames'][0];
        console.log($scope.data);
          if($scope.data === undefined)
              return;
          
          $scope.cache.push($scope.data);

    });
  }]);