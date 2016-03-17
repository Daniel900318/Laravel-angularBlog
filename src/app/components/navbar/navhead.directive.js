(function() {
    'use strict';

    angular
        .module('uglymona')
        .directive('uglyHead', uglyHead);

    /** @ngInject */
    function uglyHead() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/navbar/navhead.html',
            scope: {
                creationDate: '='
            },
            controller: NavbarController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function NavbarController(moment) {
            var vm = this;

            // "vm.creation" is avaible by directive option "bindToController: true"
            vm.relativeDate = moment(vm.creationDate).fromNow();
        }
    }

})();
