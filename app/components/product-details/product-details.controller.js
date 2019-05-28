angular
        .module('app')
        .controller('ProductDetailsController', ProductDetailsController);

        ProductDetailsController.$inject = ['dataService', '$routeParams'];

    function ProductDetailsController(dataService,$routeParams) {
        var vm = this;
        vm.product = {};
        vm.id = $routeParams.id;

     vm.breadcrumb = [{
            name: 'home',
            url: '/products'
        }, {
            name: 'product details',
            url: '/products/'
        }];

        activate();

        function activate() {
            return getProductById(vm.id).then(function () {
                console.log('calling service',vm.product);
                // logger.info('Activated Products View');
            });
        }

        function getProductById(id) {
            return dataService.getProductById(id)
                .then(function (data) {
                    console.log($routeParams);
                    vm.product = data;
                    return vm.product;
                });
        }

    }
