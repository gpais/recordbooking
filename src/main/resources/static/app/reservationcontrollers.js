(function(angular) {
  var ReservationController = function($scope, ReservationResource) {
    ReservationResource.query(function(response) {
      $scope.items = response ? response : [];
    });
    
    $scope.reservationResource=new ReservationResource();

    $scope.updateReservation = function(reservationResource) {
    	reservationResource.$update().then(function(reservationResponse) {
    		   $scope.reservationResource=new ReservationResource();
    		   $scope.reservationResponse = reservationResponse;
    		}, function(errResponse) {
    		   // fail
    		});
    };
    
 
  };
  
  ReservationController.$inject = ['$scope', 'ReservationResource'];
  angular.module("myApp.controllers.reservations").controller("ReservationController", ReservationController);
}(angular));