(function() {
    'use strict';

    angular
        .module('uglymona')
        .directive('uglyNavbar', uglyNavbar);

    /** @ngInject */
    function uglyNavbar() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/navbar/navbar.html',
            scope: {
                creationDate: '='
            },
            controller: NavbarController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function NavbarController(moment, $state, $location, $log) {
            var vm = this;

            // "vm.creation" is avaible by directive option "bindToController: true"
            vm.relativeDate = moment(vm.creationDate).fromNow();
            vm.tabMenu = ['Home', 'Beauty In The City', 'The Romantic Power of Movies', 'Vlog Romance', 'Photographs and Love', 'Life In New York City', 'Flipbook']
            vm.currentTab = 0;
            vm.goTab = function(index){
                vm.currentTab = index
                switch(index){
                    case 0 : $state.go('home.home'); break;
                    case 1 : $state.go('home.beauty'); break;
                    case 2 : $state.go('home.romantic'); break;
                    case 3 : $state.go('home.vlog'); break;
                    case 4 : $state.go('home.photograph'); break;
                    case 5 : $state.go('home.life'); break;
                    case 6 : $state.go('home.flip'); break;
                    default : $state.go('home.home') 
                }
            }

            vm.isActive = function(index){
                // if(vm.currentTab == index) {
                //     return true
                // } else return false
            }            
            vm.curentActive = function(index){
                var path = $location.path()
                // $log.log('path-->', path)
                if(path == '/home/home'){
                    if(index == 0) return true
                }
                if(path == '/home/beauty'){
                    if(index == 1) return true
                }
                if(path == '/home/romantic'){
                    if(index == 2) return true
                }
                if(path == '/home/vlog'){
                    if(index == 3) return true
                }
                if(path == '/home/photograph'){
                    if(index == 4) return true
                }
                if(path == '/home/life'){
                    if(index == 5) return true
                }
                if(path == '/home/flip'){
                    if(index == 6) return true
                }
            }
            vm.curentActive()
        }
    }

})();
