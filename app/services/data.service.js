// (function () {
'use strict;'

angular
    .module('app')
    .factory('dataService', dataService);

dataService.$inject = ['$http'];

function dataService($http) {
    return {
        getProducts: getProducts,
        getProductById: getProductById
        //dodati za header,footer,side menu
    };

    function getProducts() {
        return $http.get('fake-server/products.json')
            .then(getProductsComplete)
            .catch(getProductsFailed);

        function getProductsComplete(response) {
            return response.data;
        }

        function getProductsFailed(error) {
            // logger.error('XHR Failed for getProducts.' + error.data);
        }
    }

    function getProductById(id) {
        return $http.get('fake-server/products.json')
            .then(getProductComplete)
            .catch(getProductFailed);

        function getProductComplete(product) {
            return product.data.find(function (product) {
                return product.id == id;
            });
        }
        function getProductFailed(error) {
            // logger.error('XHR Failed for getProducts.' + error.data);
        }

    }
}
// });