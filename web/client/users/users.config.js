(function() {
    'use strict';

    angular
	    .module('app.users', ['app.core'])

	    .config(['$stateProvider', function($stateProvider) {
	    	
	      $stateProvider
        .state('users', {
          url: '/users',
          views: {
          	'': {
      		    templateUrl: 'client/users/users.html',
      		    controller: 'UsersCtrl',
              controllerAs: 'vm'
          	}
          }
        });

	    }]);
})();
