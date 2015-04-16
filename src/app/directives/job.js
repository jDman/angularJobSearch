'use strict';

angular.module('jobSearch')
  .directive('job', function(){

    return {
      replace: true,
      templateUrl: 'app/templates/job.html',
      link: function (scope, element, attrs) {
        console.log(scope);
      }

    }

  });
