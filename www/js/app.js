// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('app', ['ionic' , 'firebase', 'ngCordova'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'templates/services/services.html'
    })

      .state('animal', {
        url: "/animal",
        templateUrl: "templates/animal/animal.html"
      })

      .state('qurbani', {
        url: "/qurbani",
        templateUrl: "templates/qurbani/qurbani.html",
        controller: 'QurbaniController'
      })

      .state('location', {
        url: "/location",
        templateUrl: "templates/location/location.html",
        controller: 'LocationController'
      })
  })

  .controller('FirstController', function($scope) {

  });
