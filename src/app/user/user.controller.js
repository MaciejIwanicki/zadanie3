(function(){
'use strict';
angular
.module('appModule')
.controller('myController', myController);

function myController($http, myFactory){
	
		var vm = this;
		
	
		
		
		myFactory.getData().then(function (data) {
		vm.data = data;
	  
	});
	
	
}	

})();