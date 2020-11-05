'use strict';

agGrid.initialiseAgGridWithAngular1(angular);


// Declare app level module which depends on filters, and services
angular.module('app', ['ngRoute', 'agGrid']).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.
      when('/main', {
        templateUrl: 'partials/main.html',
        controller: 'ExempleController'
      })
      .when('/reversor', {
        templateUrl: 'partials/reversor.html',
        controller: 'ReversorController'
      }).
      when('/gridPage', {
                 templateUrl: 'partials/gridPage.html',
                 controller: 'GridPageController'
               }).
      otherwise({
        redirectTo: '/main'
      });
}]);
