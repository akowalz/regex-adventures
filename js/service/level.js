angular.module('app')
.service('LevelService', function() {
    // array levels containing the answers
    var answers = {
        1: ["Let's go!"],
        2: ["77", "78", "74", "60", "96", "86", "60", "81", "91"],
        3: ["1-913-706-1963","1-293-223-2997","1-181-650-5208","1-531-784-4422","1-167-360-8160","1-819-297-4276","1-314-350-5198","1-839-598-9323","1-302-228-4312","1-332-533-4714","1-450-952-8322"],
        4: ["ninny","Milly","silly","Rosy","nosy","looney","fussy","wacky","Tommy","balmy","Marry","scary","Tammy","clammy","Abby","crabby","batty","lazy","Tiny","whiney","Missy","prissy","Nicky","picky","Ricky","tricky","sicky",],
        5: ["April 23, 1952", "January 21, 1952", "July 4, 1984"]
    };

    var isEqual = function(array1, array2){
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
