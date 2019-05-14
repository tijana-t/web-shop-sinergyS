
    angular
        .module('app')
        .controller('ProductListController', ProductListController);

    ProductListController.$inject = ['dataService'];

    function ProductListController(dataService) {
        var vm = this;
        vm.products = [];
        vm.product = {};
        vm.getProductById = getProductById;
        // vm.productListPageCount = 10;
        //ovo ce biti bindovano na selektovanu opciju sa vrha liste
        vm.productListActiveClass = "active-class";
        vm.productListInactiveClass = "inactive-class";
        vm.selectedCategory = null;
        vm.selectCategory = selectCategory;
        vm.categoryFilterFn = categoryFilterFn;
        vm.getCategoryClass = getCategoryClass;

        vm.selectedPage = 1;
        vm.pageSize = 10;
        vm.selectPage = selectPage;
        vm.getPageClass = getPageClass;
        


        activate();

        function activate() {
            return getProducts().then(function () {
                console.log('calling service',vm.products);
                // logger.info('Activated Products View');
            });
        }

        function getProducts() {
            return dataService.getProducts()
                .then(function (data) {
                    vm.products = data;
                    return vm.products;
                });
        }

        function getProductById(id) {
            return dataService.getProductById(id)
                .then(function (data) {
                    vm.product = data;
                    return vm.product;
                });
        }

        function selectPage(newPage) {
            vm.selectedPage = newPage;
        }

        function getPageClass(page) {
            return vm.selectedPage == page ? vm.productListActiveClass : vm.productListInactiveClass;
        };

        function selectCategory(newCategory){
            console.log('select cat',newCategory);
            vm.selectedCategory = newCategory;
            vm.selectedPage = 1;
        }

        function categoryFilterFn(product) {

            return vm.selectedCategory == null ||
                product.category == vm.selectedCategory;
        };

        function getCategoryClass(category) {
            return vm.selectedCategory == category ? vm.productListActiveClass : vm.productListInactiveClass;
        };

        vm.slider = {
            value: Math.floor(Math.random() * 255),
            min: 25
        };

    }




// angular.module("sportsStore")
//     .constant("productListActiveClass", "active-class")
//     .constant("productListInactiveClass", "inactive-class")
//     .constant("productListPageCount", 10)
//     // pisemo konstante da ne bi morali na vise mjesta da mijenjamo, ako dodje do neke promjene
//     .controller("productListCtrl", function ($scope, $filter,
//         productListActiveClass, productListInactiveClass, productListPageCount) {
//         var selectedCategory = null;

//         // pagination
//         $scope.selectedPage = 1;
//         $scope.pageSize = productListPageCount;

//         $scope.selectPage = function (newPage) {
//             $scope.selectedPage = newPage;
//         }

//         $scope.getPageClass = function (page) {
//             return $scope.selectedPage == page ? productListActiveClass : productListInactiveClass;
//         };
//         // pagination

//         $scope.selectCategory = function (newCategory) {
//             selectedCategory = newCategory;
//             $scope.selectedPage = 1;
//             //svaki put kad promijenimo kategoriju, na pocetak se vraca
//         }
//         $scope.categoryFilterFn = function (product) {

//             return selectedCategory == null ||
//                 product.category == selectedCategory;
//         };
//         $scope.getCategoryClass = function (category) {
//             return selectedCategory == category ? productListActiveClass : productListInactiveClass;
//         };

//         $scope.slider = {
//             value: Math.floor(Math.random() * 255),
//             min: 25
//         };

//     });