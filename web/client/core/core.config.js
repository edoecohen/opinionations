(function () {
    'use strict';

    angular
      .module('app.core')

      .config(['$urlRouterProvider', function($urlRouterProvider){

        $urlRouterProvider.otherwise('/');

      }]);

})();