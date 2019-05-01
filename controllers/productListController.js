angular.module("sportsStore")
    .constant("productListActiveClass", "active-class")
    .constant("productListInactiveClass","inactive-class")
    .constant("productListPageCount", 3)
    // pisemo konstante da ne bi morali na vise mjesta da mijenjamo, ako dodje do neke promjene
    .controller("productListCtrl", function ($scope, $filter, 
        productListActiveClass, productListInactiveClass, productListPageCount) {
        var selectedCategory = null;

        // pagination
        $scope.selectedPage = 1;
        $scope.pageSize = productListPageCount;

        $scope.selectPage = function (newPage) {
            $scope.selectedPage = newPage;            
        }
        $scope.getPageClass = function (page) {
            return $scope.selectedPage == page ? productListActiveClass : productListInactiveClass;
         };
        // pagination

        $scope.selectCategory = function (newCategory) {
            selectedCategory = newCategory;
            $scope.selectedPage = 1;
            //svaki put kad promijenimo kategoriju, na pocetak se vraca
        }
        $scope.categoryFilterFn = function (product) {

            return selectedCategory == null ||
                product.category == selectedCategory;
        };
        $scope.getCategoryClass = function (category) {
           return selectedCategory == category ? productListActiveClass : productListInactiveClass;
        };
        
    });