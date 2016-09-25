(function(angular) {

  
  var RecordReservationFactory = function($resource) {
	    return $resource('/revervation', 
	    		{},{
	      update: {
	        method: "POST"
	      },
	      remove: {
	        method: "DELETE"
	      }
	    });
	  };
	  
  
RecordReservationFactory.$inject = ['$resource'];
  angular.module("myApp.services").factory("ReservationResource", RecordReservationFactory);
}(angular));