angular
.module('DNNAudioPlayer' + moduleId)
.factory('playerFactory', function ($http, $q) {
    var service = {};

    // DNN Services Framework
    var $self = this;
    if (sf) {
        $self.ServiceRoot = sf.getServiceRoot(moduleName); // Gets path to API
        $self.ServicePath = $self.ServiceRoot + 'Item/'; // Adds Controller name
        $self.Headers = {
            "ModuleId": sf.getModuleId(), // Gets ModuleId
            "TabId": sf.getTabId(), // Gets current TabId
            "RequestVerificationToken": sf.getAntiForgeryValue() // Generates AntiForgery Value
        };
    }
    
    // Get Question List
    service.callQuestionsData = function () {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: $self.ServicePath + 'GetList?moduleId=' + sf.getModuleId(),
            headers: $self.Headers
        }).success(function (data) {
            deferred.resolve(data);
        }).error(function () {
            console.log('There was an error getting the questions.');
        });
        return deferred.promise;
    }
    
    // ADD - UPDATE
    service.setQuestions = function (question) {
        return $http({
            method: 'POST',
            url: $self.ServicePath + 'Upsert?moduleId=' + sf.getModuleId(),
            headers: $self.Headers,
            data: JSON.stringify(question)
        });
    };

    // Delete
    service.deleteQuestion = function (questionId) {
        return $http({
            method: 'POST',
            url: $self.ServicePath + 'Delete?itemId=' + questionId,
            headers: $self.Headers,
            data: JSON.stringify(questionId)
        });
    };

    return service;
});
