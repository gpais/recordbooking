(function(angular) {
  angular.module("myApp.controllers.reservations", []);
  angular.module("myApp.services.reservations", []);
  angular.module("myApp.services.payments", []);
  angular.module("myApp.controllers.payments", []);
 
  var routerApp= angular.module("myApp", ["ngResource","ui.router", "myApp.controllers.reservations", "myApp.services.reservations","myApp.controllers.payments", "myApp.services.payments"]);
  
  routerApp.config(function($stateProvider, $urlRouterProvider) {
	    
	    $urlRouterProvider.otherwise('/reserve');
	    
	    $stateProvider
	        
	        // HOME STATES AND NESTED VIEWS ========================================
	        .state('reserve', {
	            url: '/reserve',
	            templateUrl: 'Reservation.html'
	        })
	        
	         .state('payment', {
	            url: '/payment',
	            templateUrl: 'Payment.html'
	        })
	        
	        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
	        .state('about', {
	            // we'll get to this in a bit       
	        });
	        
	});
}(angular));