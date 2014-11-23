angular.module('app')
.service('LevelService', function() {
    // array levels containing the answers
    var answers = {
        1: ["77", "78", "74", "60", "96", "86", "60", "81", "91"],
        2: []
    }

    function isEqual(array1, array2){
        for (var i = 0; i < array1.length; i++) {
            if (array1[i] !== array2[i]){
                return false;
            }
        };
        return true;
    }

    // level starts at 0
    var hasWon = function(level, currentAnswer){
        if (answers[level].length !== currentAnswer.length){
            return false;
        }
        return isEqual(answers[level].sort(), currentAnswer.sort());
    };

    return {
        hasWon: hasWon
    }
});
