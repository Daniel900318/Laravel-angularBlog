(function() {
    'use strict';

    angular
        .module('uglymona')
        .controller('PhotographController', PhotographController);

    /** @ngInject */
    function PhotographController() {
        var vm = this;
        vm.items = [1, 2, 3, 4]
    }
})();
