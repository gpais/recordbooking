(function(angular) {
  var AppController = function($scope, ReservationResource) {
    ReservationResource.query(function(response) {
      $scope.items = response ? response : [];
    });
    
    $scope.reservationResource=new ReservationResource();

    $scope.updateReservation = function(reservationResource) {
    	reservationResource.$update().then(function(todo) {
    		   // success
    		   $scope.todos = todos;
    		}, function(errResponse) {
    		   // fail
    		});
    };
    
 
  };
  
  AppController.$inject = ['$scope', 'ReservationResource'];
  angular.module("myApp.controllers").controller("AppController", AppController);
}(angular));