(function() {
    'use strict';

    angular
        .module('uglymona')
        .controller('LandingController', LandingController);

    /** @ngInject */
    function LandingController($state) {
        var vm = this;

        vm.goHome = function () {            
            setTimeout(function(){ 
                $state.go('home.home')
            }, 700);
        }        
    }
})();
