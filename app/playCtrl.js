'use strict';

angular.module('myApp')
.controller('playCtrl', function($scope) {
  $scope.regex = "";
  $scope.matches = [];
  $scope.mtext = "This is some match text to test your regex on";

  $scope.runMatches = function () {
    $("#match-text").highlightRegex();

    if ($scope.regex !== "" && validateRegex($scope.regex)) {
      var re = new RegExp($scope.regex, "g");
      $scope.matches = $scope.mtext.match(re);
      $("#match-text").highlightRegex(re);
    } else if ($scope.regex == "") {
      $scope.matches = [];

      $("#match-text").highlightRegex();
    }
  };

  function validateRegex(regex) {
    var valid;
    try {
      new RegExp(regex);
      valid = true;
    } catch (e) {
      valid = false;
    }
    return valid;
  }
});
