'use strict';

angular.module('jobSearch')
  .controller('JobCtrl', ['$scope', 'jobs', '$stateParams', function ($scope, jobs, $stateParams) {

    var jobsearch = jobs.get.query();

    $scope.jobInfo = [];

    jobsearch.$promise.then(function (data) {
      $scope.jobInfo = data.results[$stateParams.id];
    });

  }]);
