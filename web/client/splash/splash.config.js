(function() {
    'use strict';

    angular
	    .module('app.splash', ['app.core'])

	    .config(['$stateProvider', function($stateProvider) {

	      $stateProvider
        .state('splash', {
          url: '/welcome',
          views: {
          	'': {
      		    templateUrl: 'client/splash/splash.html',
      		    controller: 'SplashCtrl',
              controllerAs: 'vm'
          	}
          }
        });

	    }]);
})();
