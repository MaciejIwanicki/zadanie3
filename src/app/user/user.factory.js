(function(){
'use strict';
angular
.module('appModule')
.factory('myFactory',myFactory);




function myFactory($http){
	
	
	return {
		getData: function () {
			return $http.get('https://api.github.com/users')
			.then(function (result) {
				return result.data;
				
			});
		}
	}
	
}
})();