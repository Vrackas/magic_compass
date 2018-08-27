;(function () {
    'use strict';

    angular.module('app')
        .controller('HomepageController', HomepageController);


    HomepageController.$inject = [];

    function HomepageController() {
        let vm = this;


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