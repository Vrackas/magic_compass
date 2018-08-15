;(function () {
    'use strict';

    angular.module('app')
        .controller('HomepageController', HomepageController);


    HomepageController.$inject = [];

    function HomepageController() {
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
        vm.feedback_list = [
            {
                img:'content/img/homepage/home_15.png',
                text:'812',
                title:'Successful Investments',
                subtitle:'Market leading experience'
            },
            {
                img:'content/img/homepage/home_16.png',
                text:'238',
                title:'Hardworking people',
                subtitle:'Market leading experience'
            },
            {
                img:'content/img/homepage/home_17.png',
                text:'10',
                title:'Years of experience',
                subtitle:'Market leading experience'
            },
            {
                img:'content/img/homepage/home_18.png',
                text:'168',
                title:'Happy Clients',
                subtitle:'Market leading experience'
            },
        ]
    }
})();