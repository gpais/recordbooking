(function(angular) {

  
  var PaymentFactory = function($resource) {
	    return $resource('/payment', 
	    		{},{
	      update: {
	        method: "POST"
	      },
	      remove: {
	        method: "DELETE"
	      }
	    });
	  };
	  
  
PaymentFactory.$inject = ['$resource'];
  angular.module("myApp.services.payments").factory("PaymentResource", PaymentFactory);
}(angular));