(function() {
    'use strict';

    angular
        .module('uglymona')
        .controller('VlogController', VlogController);

    /** @ngInject */
    function VlogController() {
        var vm = this;
        vm.items = [1, 2, 3, 4];

    }
})();