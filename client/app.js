// Declare app level module which depends on views and components
(function () {
    'use strict';

    angular.module('app', [
      'app.core',
      'app.home',
      'app.splash',
      'app.topics',
      'app.topic',
      'app.users',
      'app.user'
    ])
    .config(['$urlRouterProvider', function($urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
    }]);

})();