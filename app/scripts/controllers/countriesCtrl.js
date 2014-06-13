'use strict';

window.app.controller('countriesCtrl', ['$scope', '$routeParams', 'countrySingle','countryCity', 'countryNeighbor',
  function($scope, $routeParams, countrySingle, countryCity, countryNeighbor) {
    
    $scope.cache = [];
    $scope.data = {};
    $scope.capital;
    $scope.cName = $routeParams.country;

    countrySingle.load($scope.cName).then(function(data){
        $scope.data = data['geonames'][0];
          if($scope.data === undefined)
              return;
          
          $scope.cache.push($scope.data);

    });
    countryCity.load($scope.cName).then(function(data){
        $scope.lol = data['geonames'][0];
          if($scope.lol === undefined)
              return;
          
          $scope.cache.push($scope.lol);

    });

    countryNeighbor.load($scope.cName).then(function(data){
        $scope.neighbor1 = data['geonames'][0];
        $scope.neighbor2 = data['geonames'][1];
        $scope.neighbor3 = data['geonames'][2];
          if($scope.neighbor === undefined)
              return;
          
          $scope.cache.push($scope.neighbor);

    });    

  }]);