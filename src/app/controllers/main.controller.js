'use strict';

angular.module('jobSearch')
  .controller('MainCtrl', ['$scope', 'searchJobs', function ($scope, searchJobs) {

    var jobsearch = searchJobs.search;

    $scope.jobsList = [];

    jobsearch.query().$promise.then(function (data) {
      $scope.jobsList = data.results;
    });
  }]);
