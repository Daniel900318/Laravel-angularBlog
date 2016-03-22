(function() {
    'use strict';

    angular
        .module('uglymona')
        .controller('VlogController', VlogController);

    /** @ngInject */
    function VlogController(PagerService) {
        var vm = this;
        var vm = this;
        vm.dummyItems = _.range(1, 151); // dummy array of items to be paged
        vm.pager = {};
        vm.setPage = setPage;

        initController();

        function initController() {
            // initialize to page 1
            vm.setPage(1);
        }

        function setPage(page) {
            if (page < 1 || page > vm.pager.totalPages) {
                return;
            }

            // get pager object from service
            vm.pager = PagerService.GetPager(vm.dummyItems.length, page, 4);

            // get current page of items
            vm.items = vm.dummyItems.slice(vm.pager.startIndex, vm.pager.endIndex);
        }

    }
})();