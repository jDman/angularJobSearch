'use strict';

angular.module('jobSearch')
  .directive('search', function(){

    return {
      replace: true,
      templateUrl: 'app/templates/search.html',
      link: function (scope, element, attrs) {
      }

    }

  });
