(function() {
    'use strict';

    angular
        .module('uglymona')
        .config(config);

    /** @ngInject */
    function config($logProvider) {
        // Enable log
        $logProvider.debugEnabled(true);
        
    }
    
})();
