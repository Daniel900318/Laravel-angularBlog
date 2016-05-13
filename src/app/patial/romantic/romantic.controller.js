(function() {
    'use strict';

    angular
        .module('uglymona')
        .controller('RomanticController', RomanticController);

    /** @ngInject */
    function RomanticController() {
        var vm = this;
        vm.tags = ['thread', 'gentlmans', 'ladies', 'gods', 'Alar', 'Bit of My Own']
        vm.items = [1, 2, 3, 4]
        
    }
})();
