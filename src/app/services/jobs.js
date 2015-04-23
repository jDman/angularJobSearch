'use strict';

angular.module('jobSearch')
   .factory('jobs', ['$resource', function($resource){

     return {
         get: function (searchParams) {

           var params = searchParams;

           return $resource(
                   'http://www.reed.co.uk/api/1.0/search?keywords=:keywords',
                   {
                     callback: "JSON_CALLBACK"
                   },
                   {
                     query: {
                       method:'JSONP',
                       params:{keywords:params},
                       isArray:false,
                       headers:{
                              'username': '7119a7ab-5020-49bd-8de6-cf4ae8e61508',
                              'password' : ''
                            }
                      }
                    })
              }
         }

   }]);
