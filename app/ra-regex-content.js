angular.module('app')
.directive('raRegexContent', function() {
  return {
    restrict: 'AE',
    link: function(scope, element, attrs) {
      scope.contentUrl = "views/ra-content/" + attrs.template;
      document.getElementById('regexSearchBox').focus();
    },

    template: '<div ng-include="contentUrl"></div>'
  };
});
