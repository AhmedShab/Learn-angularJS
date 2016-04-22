var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function ($scope, $filter) {

$scope.handle = '';

$scope.uppercaseHandle = function () {
  return $scope.handle = $filter('lowercase')($scope.handle);
};

$scope.characters = 5;

$scope.rules = [

  {ruleName: "Must be 5 characters"},
  {ruleName: "Must not be used elsewhere"},
  {ruleName: "Mustt be cool"},
]


$scope.alertClick = function () {
  alert('Clicked');
}

}]);
