;(function () {

    'use strict';

    angular
        .module('app.get_started_block', [])
        .directive('getStartedBlock', getStartedBlock);

    getStartedBlock.$inject = [];

    function getStartedBlock() {
        return {
            bindToController: true,
            controller: 'GetStartedBlockController',
            controllerAs: 'vm',
            templateUrl: 'directives/get_started_block/get_started_block.html',
            link: link,
            restrict: 'AE',
            scope: {
                model: '='
            }
        };


        function link(scope, element, attrs) {

        }
    }
})();