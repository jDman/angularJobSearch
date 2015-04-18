'use strict';

angular.module('jobSearch')
  .directive('job', function(){

    return {
      replace: true,
      templateUrl: 'app/templates/jobs.html',
      link: function (scope, element, attrs) {
      }

    }

  });
