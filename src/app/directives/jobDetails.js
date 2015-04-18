'use strict';

angular.module('jobSearch')
  .directive('jobDetails', function(){

    return {
      scope: {},
      replace: true,
      templateUrl: 'app/templates/jobDetails.html'
    }

  });
