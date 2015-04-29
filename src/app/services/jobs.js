'use strict';

angular.module('jobSearch')
   .factory('jobs', ['$resource', function($resource){

     var jobList = null;

     var addJob = function(newObj) {
       jobList = newObj;
     }

     var getJob = function(){
         return jobList;
     }

     var getAll = function (keyword, location, date) {

         var key = keyword || '',
             location = location || '',
             date = date || '';

         return $resource(
                'http://www.reed.co.uk/api/1.0/search?keywords=:keywords',
                {
                  callback: "JSON_CALLBACK"
                },
                {
                  query: {
                    method:'JSONP',
                    params:{
                      keywords:key
                    },
                    isArray:false,
                    headers:{
                           'username': '7119a7ab-5020-49bd-8de6-cf4ae8e61508',
                           'password' : ''
                         }
                   }
                 })
      }



     return {
        addJob: addJob,
        getJob: getJob,
        getAll: getAll
      }

   }]);
