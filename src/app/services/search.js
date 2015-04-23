'use strict';

angular.module('jobSearch')
   .factory('searchJobs', ['$resource', 'jobs', function($resource, jobs){

     return{
       search: jobs.get('javascript')
     }


   }]);
