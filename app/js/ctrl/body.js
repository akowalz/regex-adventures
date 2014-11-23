angular.module('app')
.controller('BodyController', function($scope, ProblemService) {
    $scope.hello = 'Hi';
    $scope.nextPage = function () {
		ProblemService.nextProblem();
    };
    $scope.searching = false;
});
