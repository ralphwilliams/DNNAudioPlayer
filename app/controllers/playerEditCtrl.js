console.log('playerEditCtrl');
angular
	.module('playerControllers')
	.controller('playerEditCtrl', ['$scope', '$http', 'playerFactory', '$location',
	function ($scope, $http, playerFactory, $location, $sce) {
	    $scope.item = "Editor goes here.";
	    console.log('$scope.item', $scope.item);

	    // questionsFactory.callQuestionsData()
	    // .then(function (data) {
	    //     $scope.questions = angular.fromJson(data);
	    // }, function (data) {
	    //     console.log(data);
	    // });

	}]);