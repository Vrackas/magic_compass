;(function () {

    'use strict';

    angular
        .module('app.scroll_button', [])
        .directive('scrollButton', scrollButton);

    scrollButton.$inject = [];

    function scrollButton() {
        return {
            bindToController: true,
            controller: 'scrollButtonController',
            controllerAs: 'vm',
            templateUrl: 'directives/scroll_button/scroll_button.html',
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