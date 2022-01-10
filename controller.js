var app =angular.module('mainApp',[]);
app.controller('courses', function($scope, $http){
    $http({
        method : 'GET',
        url : '/model/database.json'
    }).then(function(response){
        $scope.courses= response.data;
    });
    });