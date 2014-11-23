angular.module('app')
.service('ProblemService', function() {
    var currentProblem = 0,
		pages = {
		0: '',
		1: 'page2',
		2: 'page3',
		3: 'page4',
		4: 'page5',
		5: 'page6'
	};
	var nextProblem = function() {
        currentProblem += 1;
        $('#' + pages[currentProblem]).click();
    };

  var getLevel = function() {
    return currentProblem + 1;
  };

  return {
      nextProblem: nextProblem,
      getLevel: getLevel
  };
});
