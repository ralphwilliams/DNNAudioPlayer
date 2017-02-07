angular
	.module('playerControllers', [])
	.controller('playerListCtrl', ['$scope', '$http', '$location',
	function ($scope, $http, playerFactory, $sce) {
	    $scope.item = "List goes here.";
	    console.log('$scope.item', $scope.item);
	    // questionsFactory.callQuestionsData()
	    // .then(function (data) {
	    //     $scope.questions = angular.fromJson(data);
	    // }, function (data) {
	    //     console.log(data);
	    // });

	}]);