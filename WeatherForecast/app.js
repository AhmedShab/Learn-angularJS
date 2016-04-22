var myApp = angular.module('myApp',['ngRoute', 'ngResource']);

myApp.config(function ($routeProvider) {

  $routeProvider

  .when('/', {
    templateUrl: 'pages/home.html',
    controller: 'homeController'
  })

  .when('/forecast', {
    templateUrl: 'pages/forecast.html',
    controller: 'forecastController'
  })

});

myApp.service('forecast', function () {

  this.city = 'Wellington';

});

myApp.controller('homeController', ['$scope', 'forecast', function ($scope, forecast) {

  $scope.city = forecast.city;

  $scope.$watch('city', function () {

     forecast.city = $scope.city;
  });

}]);

myApp.controller('forecastController', ['$scope', 'forecast', function ($scope, forecast) {

  $scope.city = forecast.city;

}]);
