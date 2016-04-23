myApp.controller('homeController', ['$scope', '$resource', '$routeParams', 'forecast', function ($scope, $resource, $routeParams,forecast) {

  $scope.city = forecast.city;

  $scope.$watch('city', function () {

    forecast.city = $scope.city;
  });

}]);

myApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'forecast', function ($scope, $resource, $routeParams, forecast) {

  $scope.city = forecast.city;

  $scope.days = $routeParams.days || '2';


  $scope.weatherAPI =
  $resource("http://api.openweathermap.org/data/2.5/forecast/daily?appid=155a3b1ea43baad50689bcce9ae5629e", {
    callback: "JSON_CALLBACK"}, {get: {method: "JSONP"} });

    $scope.weatherResult = $scope.weatherAPI.get({q: $scope.city, cnt: $scope.days});

    $scope.convertToC = function (degK) {
      return Math.round( degK - 273);
    }

    $scope.convertToDate = function (date) {
      return new Date(date * 1000);
    }
  }]);
