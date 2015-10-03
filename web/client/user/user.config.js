(function() {
    'use strict';

    angular
	    .module('app.user', ['app.core'])

	    .config(['$stateProvider', function($stateProvider) {
	    	
	      $stateProvider
        .state('user', {
          url: '/user/:id',
          views: {
          	'': {
      		    templateUrl: 'client/user/user.html',
      		    controller: 'UserCtrl',
              controllerAs: 'vm'
          	}
          }
        });

	    }]);
})();
