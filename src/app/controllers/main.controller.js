'use strict';

angular.module('jobSearch')
  .controller('MainCtrl', ['$scope', 'jobs', function ($scope, jobs) {

    var jobsearch = jobs.get.query();
    $scope.jobsList = null;

    jobsearch.$promise.then(function (data) {
      $scope.jobsList = data.results;
    });

  }]);
