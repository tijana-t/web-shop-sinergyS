(function() {
    'use strict';

    angular
        .module('app')
        .directive('breadcrumb', breadcrumb);

    breadcrumb.$inject = ['$rootScope'];

    function breadcrumb($rootScope) {
        var directive = {
            restrict: 'EA',
            templateUrl: '/app/directives/breadcrumb/breadcrumb.template.html',
            link: link,
            scope: {
                data: '=breadcrumb'
            }
        };
        return directive;

        function link($scope, element, attrs) {
        }
    }
})();