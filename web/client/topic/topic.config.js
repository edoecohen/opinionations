(function() {
    'use strict';

    angular
	    .module('app.topic', ['app.core'])

	    .config(['$stateProvider', function($stateProvider) {
	    	
	      $stateProvider
        .state('topic', {
          url: '/topic/:id',
          views: {
          	'': {
      		    templateUrl: 'client/topic/topic.html',
      		    controller: 'TopicCtrl',
              controllerAs: 'vm'
          	}
          }
        });

	    }]);
})();
