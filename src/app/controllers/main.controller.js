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

    $scope.jobDetails = function(job) {
      jobs.addJob(job);
    }

  }]);
