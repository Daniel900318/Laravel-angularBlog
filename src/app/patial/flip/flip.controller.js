(function() {
    'use strict';

    angular
        .module('uglymona')
        .controller('FlipController', FlipController);

    /** @ngInject */
    function FlipController($rootScope) {
        var vm = this;
        vm.items = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
        vm.goBook = function(){
            $rootScope.isCover = false;
        }
        vm.goCover = function(){
            $rootScope.isCover = true;
        }
        // vm.dummyItems = _.range(1, 151); // dummy array of items to be paged
        // vm.pager = {};
        // vm.setPage = setPage;

        // initController();

        // function initController() {
        //     // initialize to page 1
        //     vm.setPage(1);
        // }

        // function setPage(page) {
        //     if (page < 1 || page > vm.pager.totalPages) {
        //         return;
        //     }

        //     // get pager object from service
        //     vm.pager = PagerService.GetPager(vm.dummyItems.length, page, 4);

        //     // get current page of items
        //     vm.items = vm.dummyItems.slice(vm.pager.startIndex, vm.pager.endIndex);
        // }

    }
})();
