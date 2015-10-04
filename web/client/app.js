// Declare app level module which depends on views and components
(function () {
    'use strict';

    angular.module('app', [
      'app.core',
      'app.home',
      'app.login',
      'app.topics',
      'app.topic',
      'app.users',
      'app.user'
    ])
    .config(['$urlRouterProvider', function($urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
    }]);

})();