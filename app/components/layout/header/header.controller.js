angular
        .module('app')
        .controller('HeaderController', HeaderController);

        HeaderController.$inject = ['dataService','$scope','$rootScope'];

    function HeaderController(dataService,$scope, $rootScope) {
        var vm = this;
        vm.header = {};
        vm.products;
        vm.search = '';
        vm.categoryChanged;

        vm.onSearch = onSearch;
        vm.onCategoryChange = onCategoryChange;


        activate();

        // $scope.$on('products', function(event, products) {
        //     vm.products = products;
        //     console.log('vm prod from on:', vm.products);
        //   });


        function activate() {
            return getHeaderData().then(function () {
              return getProducts();
            });
        }

        function getProducts() {
            return dataService.getProducts()
                .then(function (data) {
                    vm.products = data;
                    return vm.products;
                });
        }

        function getHeaderData() {
            return dataService.getHeaderData()
                .then(function (data) {
                    console.log(data);
                    vm.header = data;
                    return vm.header;
                });
        }
        function onSearch(model) {
            $rootScope.$broadcast('searchProducts', model);
        }

        function onCategoryChange(category) {
            vm.categoryChanged = category;
            $rootScope.$broadcast('categoryChanged', category);
        }

    }
