;(function () {

    'use strict';

    angular
        .module('app.header_language', [])
        .directive('headerLanguageBlock', headerLanguageBlock);

    headerLanguageBlock.$inject = [];

    function headerLanguageBlock() {
        return {
            bindToController: true,
            controller: 'headerLanguageBlockController',
            controllerAs: 'vm',
            templateUrl: 'directives/header_language_block/header_language_block.html',
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