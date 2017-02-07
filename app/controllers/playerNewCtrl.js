console.log('playerNewCtrl');
angular
	.module('playerControllers')
	.controller('playerNewCtrl', ['$scope', '$http', 'playerFactory', '$location',
	function ($scope, $http, playerFactory, $location, $sce) {
	    $scope.item = "New item goes here.";
	    console.log('$scope.item', $scope.item);

	    // questionsFactory.callQuestionsData()
		// .then(function (data) {
		//     $scope.questions = angular.fromJson(data);
		// }, function (data) {
		//     console.log(data);
		// });

	}]);