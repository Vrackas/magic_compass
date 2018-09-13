;(function () {

    'use strict';

    angular
        .module('app.header_slider_block', ['angular-carousel'])
        .directive('headerSliderBlock', headerSliderBlock);

    headerSliderBlock.$inject = [];

    function headerSliderBlock() {
        return {
            bindToController: true,
            controller: 'headerSliderBlockController',
            controllerAs: 'vm',
            templateUrl: 'directives/header_slider/header_slider_block.html',
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