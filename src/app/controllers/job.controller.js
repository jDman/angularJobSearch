'use strict';

angular.module('jobSearch')
  .controller('JobCtrl', ['$scope', 'jobs', '$stateParams', function ($scope, jobs, $stateParams) {

    $scope.jobInfo = jobs.getJob();

  }]);
