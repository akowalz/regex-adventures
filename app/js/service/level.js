angular.module('app')
.service('LevelService', function() {
    // array levels containing the answers
    var answers = {
        1: ["Let's go!"],
        2: ["77", "78", "74", "60", "96", "86", "60", "81", "91"],
        3: ["April 23, 1952", "January 21, 1952", "July 4, 1984"]
    };

    function isEqual(array1, array2){
        if (array1 === null || array2 === null) { return false; }

        for (var i = 0; i < array1.length; i++) {
            if (array1[i] !== array2[i]){
                return false;
            }
        };
        return true;
    };

    // level starts at 0
    var hasWon = function(level, currentAnswer){
        if (level === null || currentAnswer === null) { return false; }

        if (answers[level].length !== currentAnswer.length){
            return false;
        }
        return isEqual(answers[level].sort(), currentAnswer.sort());
    };

    return {
        hasWon: hasWon
    };
});
