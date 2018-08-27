;(function () {

    'use strict';

    angular
        .module('app.why_trade_block', [])
        .directive('whyTradeBlock', whyTradeBlock);

    whyTradeBlock.$inject = [];

    function whyTradeBlock() {
        return {
            bindToController: true,
            controller: 'WhyTradeBlockController',
            controllerAs: 'vm',
            templateUrl: 'directives/why_trade_block/why_trade_block.html',
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