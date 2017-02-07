'use strict';
angular
	.module('DNNAudioPlayer' + moduleId, [
		'ngRoute',
		'playerControllers'
	])
	.config(['$routeProvider', '$httpProvider',
		function ($routeProvider) {
		    console.log('app loaded');
		    $routeProvider
			.when('/new', {
			    templateUrl: '/DesktopModules/DNNAudioPlayer/app/views/playerNewView.html',
			    controller: 'playerNewCtrl'
			})
			.when('/edit', {
			    templateUrl: '/DesktopModules/DNNAudioPlayer/app/views/playerEditView.html',
			    controller: 'playerEditCtrl'
			})
			.when('/details', {
			    templateUrl: '/DesktopModules/DNNAudioPlayer/app/views/playerDetailsView.html',
			    controller: 'playerDetailsCtrl'
			})
			.otherwise({
			    templateUrl: '/DesktopModules/DNNAudioPlayer/app/views/playerListView.html',
			    controller: 'playerListCtrl'
			});
		}
	]);