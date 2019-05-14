// angular.module("sportsStore")
//     .controller("sportsStoreCtrl", function ($scope, $http) {

//         $scope.data = {};

//         $http.get('fake_server/products.json')
//         .then(function successCallback(data){
//             $scope.data.products = data.data;
//             console.log('data:',$scope.data.products);

//         }).catch(function errorCallback(error) {
//             $scope.data.error = error;
//             console.log($scope.data.error);
//         });

//         $http.get('fake_server/header.json')
//         .then(function successCallback(data){
//             $scope.data.header = data.data;
//             console.log('data:',$scope.data.header);

//         }).catch(function errorCallback(error) {
//             $scope.data.error = error;
//             console.log($scope.data.error);
//         });

//     });