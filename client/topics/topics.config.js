(function() {
    'use strict';

    angular
	    .module('app.topics', ['app.core'])

	    .config(['$stateProvider', function($stateProvider) {
	    	
	      $stateProvider
        .state('topics', {
          url: '/topics',
          views: {
          	'': {
      		    templateUrl: 'client/topics/topics.html',
      		    controller: 'HomeCtrl',
              controllerAs: 'vm'
          	}
          }
        });

	    }]);
})();
