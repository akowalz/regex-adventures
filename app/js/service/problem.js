angular.module('app')
.service('ProblemService', function($scope) {
    var currentProblem = 0;

    var nextProblem = function(){
        currentProblem += 1; 
    }

    return {
        currentProblem: currentProblem
    }
});