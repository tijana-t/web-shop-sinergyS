angular
    .module('app')
    .controller('ProductListController', ProductListController);

ProductListController.$inject = ['dataService', '$rootScope', '$scope', '$timeout', '$filter'];

function ProductListController(dataService, $rootScope, $scope, $timeout, $filter) {
    var vm = this;
    vm.products = [];
    vm.product = {};
    vm.sideMenu = [];
    vm.getProductById = getProductById;
    // vm.productListPageCount = 10;
    //ovo ce biti bindovano na selektovanu opciju sa vrha liste
    vm.productListActiveClass = "active-class";
    vm.productListInactiveClass = "inactive-class";

    vm.tagActiveClass = "tag-active-class";
    vm.tagInactiveClass = "tag-inactive-class";

    vm.pagingActiveClass = "page-active-class";
    vm.pagingInactiveClass = "page-inactive-class";

    vm.selectedCategory = null;

    vm.manufacturerChanged = '';
    vm.colorChanged = '';
    vm.tagChanged = null;
    vm.sortBy = 'name';
    vm.gridView = true;


    vm.slider = {
        min: 25,
        max: 400,
        // options: {
        //     floor: 0,
        //     ceil: 450,
        // },
    }

    vm.selectedPage = 1;
    vm.currentSize = 5;

    vm.selectCategory = selectCategory;
    vm.categoryFilterFn = categoryFilterFn;
    vm.getCategoryClass = getCategoryClass;
    vm.selectManufacturer = selectManufacturer;
    vm.selectColor = selectColor;
    vm.getFilterClass = getFilterClass;
    vm.filterTags = filterTags;

    vm.selectPage = selectPage;
    vm.getPageClass = getPageClass;
    vm.getTagClass = getTagClass;

    vm.changeSize = changeSize;
    vm.numberOfProds = numberOfProds;
    vm.numberOfColors = numberOfColors;

    vm.breadcrumb = [{
        name: 'home',
        url: '/products'
    }, {
        name: 'men',
        url: '/products'
    }];

    $scope.$on('searchProducts', function (data, object) {
        vm.selectedPage = 1;
        vm.searchTerm = object;
    });
    $scope.$on('categoryChanged', function (data, object) {
        vm.selectedCategory = object;

        if (!object) {
            vm.selectedCategory = null;
            vm.manufacturerChanged = '';
            vm.colorChanged = '';
            vm.tagChanged = null;
            vm.slider = {
                min: 25,
                max: 400,
            }
            
        }

    });


    activate();

    function activate() {
        return getProducts().then(function () {
            return getSideMenuData();
        });
    }

    function getProducts() {
        return dataService.getProducts()
            .then(function (data) {
                vm.products = data;
                $rootScope.$broadcast('products', vm.products);
                return vm.products;
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
        return vm.selectedPage == page ? vm.pagingActiveClass : vm.pagingInactiveClass;
    };

    function selectCategory(newCategory) {
        vm.selectedCategory = newCategory;
        vm.selectedPage = 1;
    }

    function categoryFilterFn(product) {
        return vm.selectedCategory == null ||
            product.category == vm.selectedCategory;
    };

    function selectManufacturer(manufacturer) {
        vm.selectedPage = 1;
        vm.manufacturerChanged = manufacturer;
    }

    function selectColor(color) {
        vm.selectedPage = 1;
        vm.colorChanged = color;
    }

    function filterTags(tag) {
        vm.selectedPage = 1;
        vm.tagChanged = tag;

    }

    function getCategoryClass(category) {
        return vm.selectedCategory == category ? vm.productListActiveClass : vm.productListInactiveClass;
    };

    function getFilterClass(item, type) {
        switch (type) {
            case 'color':
                return vm.colorChanged == item ? vm.productListActiveClass : vm.productListInactiveClass;
                break;

            case 'manufacturer':
                return vm.manufacturerChanged == item ? vm.productListActiveClass : vm.productListInactiveClass;
                break;

            default:
                break;
        }

    }

    function getTagClass(item) {
        return (vm.tagChanged == item) ? vm.tagActiveClass : vm.tagInactiveClass;
    }

    function changeSize(size) {
        vm.selectedPage = 1;
    }

    function numberOfProds(item) {
        var arr = $filter('filter')(vm.products, {
            "manufacturer": item.name
        });
        return arr.length || 0;
    }
    function numberOfColors(item) {
        var arr = $filter('filter')(vm.products, {
            "color": item.name
        });
        return arr.length || 0;
    }



}