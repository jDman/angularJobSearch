'use strict';

angular.module('jobSearch')
  .controller('MainCtrl', ['$rootScope', '$scope', 'searchJobs', 'jobs', function ($rootScope, $scope, searchJobs, jobs) {

    var jobsearch = undefined;

    $scope.jobsList = [];
    $scope.jobSearch = function (input) {
       jobsearch = searchJobs.search(input);

       jobsearch.query().$promise.then(function (data) {

         $scope.jobsList = data.results;

       });


    };

    $scope.jobFilter = function (param, jobs) {

        if(param === 'location') {
          jobs.sort(function(a, b){

            if(a.locationName > b.locationName){
              return 1;
            }

            if(a.locationName < b.locationName){
              return 0;
            }

            return 0;

          });
          console.log(jobs);
        }
    }


    $scope.jobDetails = function(job) {
      jobs.addJob(job);
    }

  }]);
