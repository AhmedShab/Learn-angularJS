var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

  $routeProvider

  .when('/', {
    templateUrl: 'pages/main.html',
    controller: 'mainController'
  })

  .when('/second/:num', {
    templateUrl: 'pages/second.html',
    controller: 'secondController'
  })

});

myApp.service('nameService', function () {

  var self = this;
  this.name = 'Ahmed Shaaban';

  this.nameLength = function () {
    return self.name.length;
  }
});

myApp.controller('mainController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService) {


}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService) {


}]);

myApp.directive("searchResult", function () {
  return {
    restrict: 'A',
    template: '',
    replace: true
  }
});
