angular.module("app").config(config);

function config($routeProvider, $locationProvider) {

    // $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
    // $locationProvider.html5Mode({
    //     enabled: true,
    //     requireBase: true
    //   });

    $routeProvider
        .when('/products', {
            templateUrl: './components/product-list/product-list.html',
            controller: 'ProductListController',
            controllerAs: 'vm',
        });
    $routeProvider
        .when('/products/:id', {
            templateUrl: './components/product-details/product-details.html',
            controller: 'ProductDetailsController',
            controllerAs: 'vm'
        });
    $routeProvider
        .otherwise({
            templateUrl: "./components/product-list/product-list.html",
            controller: 'ProductListController',
            controllerAs: 'vm',
        });

    



}


// ]).config(function ($routeProvider) {
//     $routeProvider.when("/details", {
//         templateUrl: "/views/productDetails.html",
//     });
//     $routeProvider.when("/products", {
//         templateUrl: "/views/productList.html"
//     });
//     $routeProvider.otherwise({
//         templateUrl: "/views/productList.html"
//     });
// })
// .config(['$locationProvider', function ($locationProvider) {
//     $locationProvider.hashPrefix('');
// }]);