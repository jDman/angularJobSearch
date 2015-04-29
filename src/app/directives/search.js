'use strict';

angular.module('jobSearch')
  .directive('search', function(){

    return {
      replace: true,
      templateUrl: 'app/templates/search.html',
      link: function (scope, element, attrs) {
        var input = $('#searchJobs'),
            searchBtn = $('#searchBtn'),
            selectedFilter = $('#searchFilter');

        searchBtn.on('click', function(evt){
          scope.jobSearch(input.val());
        });

        selectedFilter.on('change', function(){
          scope.jobFilter(selectedFilter.val(), scope.jobsList);
        });
      }

    }

  });
