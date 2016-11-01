(function () {
    "use strict";

    angular.module("app", []);
 


 angular.module("app").controller('MovieController',['$scope', '$http','$window', function ($scope, $http,$window) 
 {
     $http.get('https://api.themoviedb.org/3/movie/top_rated?language=en-US&api_key=bc246856648f34ccdf9aef4b69a26470').
         then(function (data) {
            
             $scope.yourName = data.data.results[0].overview;
             $scope.bag = data.data.results;
      
         
         }, function () {
         });

  
     $scope.go = function (path) {
         $window.location.href = path;
     };
     $scope.openMovie= function(){ 
         $http({
             url: "/Home/Movie",
             method: "GET"
          
           //  params: { number: 4, name: "angular" }
         });
     }
 }
 ])

 angular.module("app").controller('PopularController',['$scope', '$http', function ($scope, $http){
     $http.get('https://api.themoviedb.org/3/movie/popular?api_key=bc246856648f34ccdf9aef4b69a26470&language=en-US').
             then(function (data) {

               
                 $scope.Popular = data.data.results[0].overview;
                 $scope.bag = data.data.results;

                 
             }, function () {
             });
}
    ])
 angular.module("app").controller('OneMovieController', ['$scope', '$http', function ($scope, $http) {
   
     setTimeout(function () {
         console.log($scope.MovieID);
         $http.get('https://api.themoviedb.org/3/movie/' + $scope.MovieID + '?api_key=bc246856648f34ccdf9aef4b69a26470&language=en-US').
      then(function (data) {

          $scope.Movie = data.data;
          



      }, function () {
         

      });
     }, 200);

 }
 ])

})();