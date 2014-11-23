angular.module('myApp')
.directive('raRegexContent', function() {
  return {
    restrict: 'AE',
    link: function(scope, element, attrs) {
      scope.contentUrl = "views/ra-content/" + attrs.template;
    },

    template: '<div ng-include="contentUrl"></div>'
  };
});
