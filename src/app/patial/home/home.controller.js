(function() {
    'use strict';

    angular
        .module('uglymona')
        .controller('HomeController', HomeController);

    /** @ngInject */
    function HomeController() {
        var vm = this;
        vm.items = [1, 2, 3, 4];
        
    }

    

})();
