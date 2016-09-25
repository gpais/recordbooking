(function(angular) {
  var Paymentcontrollers = function($scope, PaymentResource) {
    PaymentResource.query(function(response) {
      $scope.items = response ? response : [];
    });
    
    $scope.paymentResource=new PaymentResource();

    $scope.updateReservation = function(paymentResource) {
    	paymentResource.$update().then(function(reservationResponse) {
    		   $scope.paymentResource=new PaymentResource();
    		   $scope.paymentResponse = reservationResponse;
    		}, function(errResponse) {
     		   $scope.paymentResponse = errResponse;
    		});
    };
    
    $scope.settle = function(paymentResource) {
    	paymentResource.$update().then(function(reservationResponse) {
    		   $scope.paymentResource=new PaymentResource();
    		   $scope.paymentResponse = reservationResponse;
    		}, function(errResponse) {
     		   $scope.paymentResponse = errResponse;
    		});
    };
    
    $scope.refund = function(paymentResource) {
    	paymentResource.$update().then(function(reservationResponse) {
    		   $scope.paymentResource=new PaymentResource();
    		   $scope.paymentResponse = reservationResponse;
    		}, function(errResponse) {
     		   $scope.paymentResponse = errResponse;
    		});
    };
    
 
  };
  
  Paymentcontrollers.$inject = ['$scope', 'PaymentResource'];
  angular.module("myApp.controllers.payments").controller("Paymentcontrollers", Paymentcontrollers);
}(angular));