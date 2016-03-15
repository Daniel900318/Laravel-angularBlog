(function() {
  'use strict';

  angular
    .module('uglymona')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
