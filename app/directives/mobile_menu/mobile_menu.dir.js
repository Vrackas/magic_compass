;(function () {

    'use strict';

    angular
        .module('app.mobile_menu', [])
        .directive('mobileMenu', mobileMenu);

    mobileMenu.$inject = [];

    function mobileMenu() {
        return {
            bindToController: true,
            controller: 'MobileMenuController',
            controllerAs: 'vm',
            templateUrl: 'directives/mobile_menu/mobile_menu.html',
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