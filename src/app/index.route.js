(function() {
  'use strict';

  angular
    .module('yeoman')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
   var vm = this;

	$stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
      })

      .state('user', {
         url: '/user',
        templateUrl:'app/user/user.html',
        controller: 'myController',
        controllerAs: 'ctrl',
  
      })
	  

	 .state('user.login', {
		 url: '/user/:login',
		 controller: 'myController',
		 controllerAs: 'ctrl',
	 }
  )
			

		

		.state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'myController',
        controllerAs: 'ctrl',


      });
	 


    

    $urlRouterProvider.otherwise('/');
  }

})();