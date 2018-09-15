;(function () {

    'use strict';

    angular
        .module('app')
        .controller('WhyTradeBlockController', WhyTradeBlockController);

    WhyTradeBlockController.$inject = ['$state'];

    function WhyTradeBlockController($state) {
        let vm = this;

        vm.why_trade_list = [
            {
                img: 'content/img/homepage/1.png',
                text: 'why_trade_item1'
            },
            {
                img: 'content/img/homepage/2.png',
                text: 'why_trade_item2'
            },
            {
                img: 'content/img/homepage/3.png',
                text: 'why_trade_item3'
            },
            {
                img: 'content/img/homepage/4.png',
                text: 'why_trade_item4'
            },
            {
                img: 'content/img/homepage/5.png',
                text: 'why_trade_item5'
            },
            {
                img: 'content/img/homepage/6.png',
                text: 'why_trade_item6'
            },
        ]

    }
})();
