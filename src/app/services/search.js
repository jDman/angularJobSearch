'use strict';

angular.module('jobSearch')
   .factory('searchJobs', ['jobs', function(jobs){

     var searchJob = function (input) {
       encodeURIComponent(input);
       return jobs.getAll(input);
     }

     return{
       search: searchJob

     }


   }]);
