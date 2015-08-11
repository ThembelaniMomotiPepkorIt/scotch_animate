var myApp = angular.module('myApp',['ui.router']); 

myApp.config(function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise('/home');
	
	$stateProvider
		.state('home', {
			url : '/home',
			views : {'navigationColumn@home': {
												templateUrl : 'partial-navigation.html',
												controller : 'navigationController'
											  }}});
					/* 'mainColumn@home'    :   {
												templateUrl : 'partial-main.html',
						                        controller : 'mainController'}
					  						   }

		});*/
});

myApp.controller('mainController', function(){
	
});

myApp.controller('navigationController', function($scope){
	$console.log("Hello");
	$scope.navPane = [
	    {
	    	no: '1', 
	    	topic : "Elements of Programming"
	    },
	    {
	    	no:'2',
	    	topic : "Functions"
	    },
	    {
	    	no:'3',
	    	topic : "OOP"
	    },
	    {
	    	no:'4',
	    	topic :"Data Structures"
		}
	    ];
});