'use strict';

angular.module('jobSearch')
  .directive('job', function(){

    return {
      replace: true,
      templateUrl: 'app/templates/jobs.html',
      link: function (scope, element, attrs) {
        var btn = $('.btn');
        btn.on('click', function(evt){
          evt.preventDefault;
          scope.jobDetails();
        });
      }

    }

  });
