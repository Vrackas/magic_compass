;(function () {

    'use strict';

    angular
        .module('app.header_slider_block', ['angular-carousel'])
        .directive('headerSliderBlock', headerSliderBlock);

    headerSliderBlock.$inject = ['$rootScope'];

    function headerSliderBlock($rootScope) {
        return {
            bindToController: true,
            controller: 'headerSliderBlockController',
            controllerAs: 'vm',
            templateUrl: 'directives/header_slider/header_slider_block.html',
            link: link,
            restrict: 'AE',
            scope: {
                background: '=',
                model: '='
            }
        };


        function link(scope, element, attrs) {
            console.log(scope.vm);
            $rootScope.$broadcast('background', scope.vm.background);
        }
    }
})();