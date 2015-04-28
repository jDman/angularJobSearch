'use strict';

angular.module('jobSearch')
  .filter('searchFilter', function(){
    return function(param, filter, jobs){
      if(param === 'location') {
        console.log(job);
      }
    }
  });
