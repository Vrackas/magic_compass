;(function () {

    'use strict';

    angular
        .module('app')
        .controller('headerSliderBlockController', headerSliderBlockController);

    headerSliderBlockController.$inject = ['$state', '$translate'];

    function headerSliderBlockController($state , $translate) {
        let vm = this;

        vm.sportImages = [
            {
                src: 'content/img/Magic compass_ver 04_index_banner01.png'
            }, {
                src: 'content/img/Magic compass_ver 04_index_banner02.png'
            }, {
                src: 'content/img/Magic compass_ver 04_index_banner03.png'
            }, {
                src: 'content/img/Magic compass_ver 04_index_banner04.png'
            }, {
                src: 'content/img/Magic compass_ver 04_index_banner05.png'
            },
        ];

    }
})();
