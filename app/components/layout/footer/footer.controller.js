angular
        .module('app')
        .controller('FooterController', FooterController);

        FooterController.$inject = ['dataService'];

    function FooterController(dataService) {
        var vm = this;
        vm.footer = {};

        activate();

        function activate() {
            return getFooterData().then(function () {
                console.log('calling service', vm.footer.about);
               
                // logger.info('Activated Products View');
            });
        }

        function getFooterData() {
            return dataService.getFooterData()
                .then(function (data) {
                    console.log(data);
                    vm.footer = data;
                    return vm.footer;
                });
        }

    }
