angular.module('app')
.directive('raRegex', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/regex.tpl.html',
    transclude: true,
    scope: {
      templateName: '@',
      elmId: '@'
    },

    link: function(scope, element, attrs) {

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

      scope.regex = "";
      scope.matches = [];

      scope.runMatches = function () {
        var elm = $("#" + scope.elmId);
        var sourceText = elm.text();
        elm.highlightRegex();

        if (scope.regex !== "" && validRegex(scope.regex)) {
          var re = new RegExp(scope.regex, "g");
          scope.matches = sourceText.match(re);
          elm.highlightRegex(re);

        } else if (scope.regex == "") {
          scope.matches = [];

          elm.highlightRegex();
        }
      };

    }
  };
});
