'use strict';

angular.module('jobSearch', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ngResource', 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/templates/main.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/templates/about.html',
        controller: 'AboutCtrl'
      })
      .state('jobDetails', {
        url: '/jobDetails/:id',
        templateUrl: 'app/templates/jobDetails.html',
        controller: 'JobCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
