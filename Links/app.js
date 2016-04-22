var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

  $routeProvider

  .when('/', {
    templateUrl: 'pages/main.html',
    controller: 'mainController'
  })

  .when('/second', {
    templateUrl: 'pages/second.html',
    controller: 'secondController'
  })

  .when('/second/:num', {
    templateUrl: 'pages/second.html',
    controller: 'secondController'
  })

});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {

  $scope.people = [
    {
      name: 'John Doe',
      address: '555 Main St., New York, NY 11111',
      city: 'Wellington',
      state: 'Wellington',
      zip: '6012'
    },
    {
      name: 'Ziad Doe',
      address: '555 Main St., New York, NY 11111',
      city: 'Auckland',
      state: 'Auckland',
      zip: '6012'
    },

    {
      name: 'Ahmed Doe',
      address: '555 Main St., New York, NY 11111',
      city: 'Plamy',
      state: 'Plamy',
      zip: '6012'
    }
  ];

  $scope.formattedAddress = function (person) {
    return person.address + ', ' + person.city + ', ' + person.state + ', ' + person.zip;
  };

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {



}]);

myApp.directive("searchResult", function() {
  return {
    restrict: 'AECM',
    templateUrl: 'directives/searchresult.html',
    replace: true,
    scope: {
      personObject: "=",
      formattedAddressFunction: '&'
    },
    link: function (scope, elems, attrs) {

      if (scope.personObject.name == 'Ahmed Doe') {
        elems.removeAttr('class');
      }
    }
  };
});
