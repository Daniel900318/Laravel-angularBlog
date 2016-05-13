(function() {
    'use strict';

    angular
        .module('uglymona')
        .run(runBlock);

    /** @ngInject */
    function runBlock($log, $rootScope, $state) {

        $log.debug('runBlock end');
        $rootScope.isCover = true;
        $rootScope.isActive = function(state){
        	if($state.current.name == state){
        		return true
        	}else{
        		return false
        	}
        }
    }

})();
