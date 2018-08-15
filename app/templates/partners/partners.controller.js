;(function () {
    'use strict';

    angular.module('app')
        .controller('PartnersController', PartnersController);


    PartnersController.$inject = [];

    function PartnersController() {
        let vm = this;

        vm.why_partner_list = [
            {
                img: 'content/img/partner/partner_4.png',
                text: 'EU regulation'
            },
            {
                img: 'content/img/partner/partner_5.png',
                text: 'Competitive Commission Plans'
            },
            {
                img: 'content/img/partner/partner_2.png',
                text: 'Payments on Time'
            },
            {
                img: 'content/img/partner/partner_3.png',
                text: 'Negative Balance Protection'
            },
            {
                img: 'content/img/partner/partner_1.png',
                text: 'Personal Account Managers'
            },
            {
                img: 'content/img/partner/partner_6.png',
                text: '24/7 support'
            },]

    }
})();