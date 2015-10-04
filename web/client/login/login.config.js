(function() {
    'use strict';

    angular
	    .module('app.login', ['app.core'])

	    .config(['$stateProvider', function($stateProvider) {

	      $stateProvider
        .state('login', {
          url: '/',
          views: {
          	'': {
      		    templateUrl: 'web/client/login/login.html',
      		    controller: 'LoginCtrl',
              controllerAs: 'vm'
          	}
          }
        });

	    }]);
})();
