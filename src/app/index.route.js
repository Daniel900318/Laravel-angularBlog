(function() {
    'use strict';

    angular
        .module('uglymona')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('landing', {
                url: '/',
                templateUrl: 'app/patial/landing/landing.html',
                controller: 'LandingController',
                controllerAs: 'landing'
            })
            .state('home', {
                url: '/home',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
            .state('home.beauty', {
                url: '/beauty',
                templateUrl: 'app/patial//beauty/beauty.html',
                controller: 'BeautyController',
                controllerAs: 'beauty'
            })
            .state('home.flip', {
                url: '/flip',
                templateUrl: 'app/patial/flip/flip.html',
                controller: 'FlipController',
                controllerAs: 'flip'
            })
            .state('home.home', {
                url: '/home',
                templateUrl: 'app/patial/home/home.html',
                controller: 'HomeController',
                controllerAs: 'home'
            })        
            .state('home.life', {
                url: '/life',
                templateUrl: 'app/patial/life/life.html',
                controller: 'LifeController',
                controllerAs: 'life'
            })
            .state('home.photograph', {
                url: '/photograph',
                templateUrl: 'app/patial/photograph/photograph.html',
                controller: 'PhotographController',
                controllerAs: 'photo'
            })
            .state('home.romantic', {
                url: '/romantic',
                templateUrl: 'app/patial/romantic/romantic.html',
                controller: 'RomanticController',
                controllerAs: 'romantic'
            })
            .state('home.vlog', {
                url: '/vlog',
                templateUrl: 'app/patial/vlog/vlog.html',
                controller: 'VlogController',
                controllerAs: 'vlog'
            });
        $urlRouterProvider.otherwise('/');
    }

})();
