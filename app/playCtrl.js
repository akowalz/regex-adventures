'use strict';

angular.module('myApp.play', ['ngRoute'])

.controller('playCtrl', function($scope) {
  $scope.matches = $scope.mtext.match($scope.regex);
});
