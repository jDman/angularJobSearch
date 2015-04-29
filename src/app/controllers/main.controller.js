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

        if(!param){
          return;
        }

        if(param === 'location') {
          jobs.sort(function(a, b){

            if(a.locationName > b.locationName){
              return 1;
            }

            if(a.locationName < b.locationName){
              return -1;
            }

            return 0;

          });
        }

        if(param === 'date'){
          jobs.sort(function(a, b){

            var a = a.date.split('/'),
                b = b.date.split('/'),
                firstCompare = new Date(a[2], (a[1] - 1), a[0]),
                secondCompare = new Date(b[2], (b[1] - 1), b[0]);

            if(Date.parse(firstCompare) > Date.parse(secondCompare)){
              return 1;
            }

            if(Date.parse(firstCompare) < Date.parse(secondCompare)){
              return -1;
            }

            return 0;

          });


        }

        $scope.jobsList = jobs;
        $scope.$apply();
    }


    $scope.jobDetails = function(job) {
      jobs.addJob(job);
    }

  }]);
