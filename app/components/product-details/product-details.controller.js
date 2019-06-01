angular
    .module('app')
    .controller('ProductDetailsController', ProductDetailsController);

ProductDetailsController.$inject = ['dataService', '$routeParams'];

function ProductDetailsController(dataService, $routeParams) {
    var vm = this;
    vm.product = {};
    vm.id = $routeParams.id;
    vm.quantity = 4;
    vm.products = [];
    vm.spanValue = 0;
    vm.value = 'description';
    vm.tabActiveClass = "tab-active-class";

    vm.getTabClass = getTabClass;
    vm.addQuantity = addQuantity;
    vm.getSideMenuData = getSideMenuData;
    vm.getProducts = getProducts;
    vm.sendValue = sendValue;

    vm.breadcrumb = [{
            name: 'home',
            url: '/products'
        },
        {
            name: 'man',
            url: '/products'
        }
    ];

    activate();

    function activate() {

        return getProductById(vm.id).then(function () {
            vm.breadcrumb.push({
                name: vm.product.name,
                url: '/products/'.concat(vm.id)
            });

            return getProducts() && getSideMenuData();
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

    function getSideMenuData() {
        return dataService.getSideMenuData()
            .then(function (data) {
                vm.sideMenu = data;
                console.log('sidemenu', vm.sideMenu);
                return vm.sideMenu;
            });
    }

    function getProducts() {
        return dataService.getProducts()
            .then(function (data) {
                vm.products = data;
                return vm.products;
            });
    }

    function sendValue(value) {
        vm.value = value;
        vm.add
        console.log(vm.value);
    }

    function addQuantity() {
        vm.spanValue = vm.spanValue + 1;
    }

    function getTabClass(tabSelected) {
        if (vm.value == tabSelected) {
            return vm.tabActiveClass;
        }
    }

}