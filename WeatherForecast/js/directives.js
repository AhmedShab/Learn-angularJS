myApp.directive('forecastResult', function () {
  return {
    restrict: 'E',
    templateUrl: 'directives/forecastresult.html',
    replace: true,
    scope: {
      weatherDay: '=',
      convertToStandard: '&',
      convertToDate: '&',
      dateFormat: '@'
    }
  }
});
