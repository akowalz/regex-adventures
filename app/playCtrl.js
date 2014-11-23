'use strict';

angular.module('myApp')

.controller('playCtrl', function($scope) {

  var validRegex = function(regex) {
    var valid;
    try {
      new RegExp(regex);
      valid = true;
    } catch (e) {
      valid = false;
    }
    return valid;
  };

  var elm = $("#" + $scope.elmId);
  var sourceText = elm.text();
  $scope.regex = "";
  $scope.matches = [];

  $scope.runMatches = function () {
    elm.highlightRegex();

    if ($scope.regex !== "" && validRegex($scope.regex)) {
      var re = new RegExp($scope.regex, "g");
      $scope.matches = sourceText.match(re);
      elm.highlightRegex(re);

    } else if ($scope.regex == "") {
      $scope.matches = [];

      elm.highlightRegex();
    }
  };

});
