(function() {
    'use strict';

    angular
	    .module('app.home', ['app.core'])

	    .config(['$stateProvider', function($stateProvider) {
	    	
	      $stateProvider
        .state('home', {
          url: '/',
          views: {
          	'': {
      		    templateUrl: 'client/home/home.html',
      		    controller: 'HomeCtrl',
              controllerAs: 'vm'
          	}
          }
        });

	    }]);
})();
