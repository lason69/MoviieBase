(function () {
    "use strict";

    angular.module("app", []);
 


 angular.module("app").controller('MovieController',['$scope', '$http', function ($scope, $http) 
 {
     $http.get('https://api.themoviedb.org/3/movie/top_rated?language=en-US&api_key=bc246856648f34ccdf9aef4b69a26470').
         then(function (data) {
            
         //    console.log(data.data.results[0]);
             $scope.yourName = data.data.results[0].overview;
             $scope.bag = data.data.results;
      
            // $scope.imageURL ='http://image.tmdb.org/t/p/w185/'+ data.data.results[0].poster_path;
         }, function () {
         });
     $http.get('https://api.themoviedb.org/3/movie/221/images?api_key=bc246856648f34ccdf9aef4b69a26470&language=en-US').
       then(function (data1) {

           console.log(data1);
          
         
             //  $scope.imageURL = data.data.results[0].poster_path;
       }, function () {
       });
 }
 ])


})();