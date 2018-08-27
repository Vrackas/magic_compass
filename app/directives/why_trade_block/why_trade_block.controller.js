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
                img: 'content/img/homepage/home_1.png',
                text: 'EU regulation'
            },
            {
                img: 'content/img/homepage/home_2.png',
                text: 'competitive pricing'
            },
            {
                img: 'content/img/homepage/home_3.png',
                text: 'excellent execution'
            },
            {
                img: 'content/img/homepage/home_4.png',
                text: '4 asset classes'
            },
            {
                img: 'content/img/homepage/home_5.png',
                text: 'negative balance protection'
            },
            {
                img: 'content/img/homepage/home_6.png',
                text: '24/5 support'
            },
        ]

    }
})();
