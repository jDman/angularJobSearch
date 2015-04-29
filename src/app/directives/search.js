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

        input.on('keypress', function(evt){
          var key;

          if(evt.key){
            key = evt.key;
          } else {
            key = evt.keyCode;
          }

          if(key === 13 || key === 'Enter') {
            if(this.value !== ''){
              scope.jobSearch(this.value);
            }
          }

          return;
        });

        searchBtn.on('click', function(evt){
          if(input.val() !== ''){
            scope.jobSearch(input.val());            
          }
        });

        selectedFilter.on('change', function(){
          scope.jobFilter(selectedFilter.val(), scope.jobsList);
        });
      }

    }

  });
