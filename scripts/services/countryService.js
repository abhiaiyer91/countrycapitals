'use strict';
window.app.factory('countryService',function($http,$q){
  function load(){
    var q = $q.defer();
     
    $http.jsonp('http://api.geonames.org/countryInfoJSON?username=abhiaiyer&style=full&callback=JSON_CALLBACK')
    .success(function(response){
      q.resolve(response);
    })
    .error(function(response){
      q.resolve(response)
    })
    return q.promise;
  }
  return {
    load : load
  }
});

window.app.factory('countrySingle',function($http,$q){
  function load(tab){
    var q = $q.defer();
     
    $http.jsonp('http://api.geonames.org/countryInfoJSON?country='+ tab +'&username=abhiaiyer&style=full&callback=JSON_CALLBACK')
    .success(function(response){
      q.resolve(response);
      
    })
    .error(function(response){
      q.resolve(response)
    })
    return q.promise;
  }
  return {
    load : load
  }
})

window.app.factory('countryCity',function($http,$q){
  function load(tab){
    var q = $q.defer();
     
    $http.jsonp('http://api.geonames.org/searchJSON?q=capital&country='+tab+'&maxRows=1&username=abhiaiyer&style=full&callback=JSON_CALLBACK')
    .success(function(response){
      q.resolve(response);
    })
    .error(function(response){
      q.resolve(response)
    })
    return q.promise;
  }
  return {
    load : load
  }
})

window.app.factory('countryNeighbor',function($http,$q){
  function load(tab){
    var q = $q.defer();
     
    $http.jsonp('http://api.geonames.org/neighboursJSON?country='+tab+'&username=abhiaiyer&style=full&callback=JSON_CALLBACK')
    .success(function(response){
      q.resolve(response);
      
    })
    .error(function(response){
      q.resolve(response)
    })
    return q.promise;
  }
  return {
    load : load
  }
})

