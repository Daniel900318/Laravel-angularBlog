(function() {
    'use strict';

    angular
        .module('uglymona')
        .directive('uglyFooter', uglyFooter);

    /** @ngInject */
    function uglyFooter() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/navbar/footer.html',
            scope: {
                creationDate: '='
            },
            controller: NavbarController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
    }

    function NavbarController(moment) {
        var vm = this;

        // "vm.creation" is avaible by directive option "bindToController: true"
        vm.relativeDate = moment(vm.creationDate).fromNow();
    }

})();
