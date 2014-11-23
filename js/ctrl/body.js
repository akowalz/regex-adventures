angular.module('app')
.controller('BodyController', function($scope, ProblemService) {
    $scope.searching = false;
    $scope.nextPage = function () {
      ProblemService.nextProblem();
    };
});
