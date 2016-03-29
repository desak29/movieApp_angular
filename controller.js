var movieApp = angular.module('movieApp', []);
movieApp.controller("movieController", function ($scope, $http)
// scope glues the view and the model together
{
    var baseURL = 'https://api.themoviedb.org/3/';
    //The query string including apiKey anytime they ask for it
    var apiKey = '?api_key=2b48fa2dfc43d63624535767490bfea4';
    //The configURL so that we can get basic config data
    var configURL = baseURL + 'configuration' + apiKey;

    $scope.imagePath ='http://image.tmbd.org/t/p/w300';
    $http.get(configURL).success(function(movieData){
        $scope.movieData = movieData.results;
    });
});
