console.log('playerDetailsCtrl');
angular
	.module('playerControllers')
	.controller('playerDetailsCtrl', ['$scope', '$http', 'playerFactory', '$location',
	function ($scope, $http, playerFactory, $location, $sce) {
	    $scope.item = "Details go here.";
	    console.log('$scope.item', $scope.item);

	    // questionsFactory.callQuestionsData()
	    // .then(function (data) {
	    //     $scope.questions = angular.fromJson(data);
	    // }, function (data) {
	    //     console.log(data);
	    // });

	}]);