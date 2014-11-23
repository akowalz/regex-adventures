angular.module('app')
.controller('InstructionsCtrl', function($scope) {
    $scope.top = 0;
    $scope.reflow = false;
    $scope.body = 0;
    $scope.hide = function(){
        $scope.top = -400;
        $scope.body = -160;
    }
});
