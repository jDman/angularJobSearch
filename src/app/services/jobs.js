'use strict';

angular.module('jobSearch')
   .factory('jobs', ['$resource', function($resource){

     return {
         get: $resource(
                 'http://www.reed.co.uk/api/1.0/search?keywords=:keywords',
                 {
                   callback: "JSON_CALLBACK"
                 },
                 {
                   query: {
                     method:'JSONP',
                     params:{keywords:'javascript'},
                     isArray:false,
                     headers:{
                            'username': '',
                            'password' : ''
                          }
                    }
                  })
            };

   }]);
