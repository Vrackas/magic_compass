;(function () {

    'use strict';

    angular
        .module('app')
        .controller('headerSliderBlockController', headerSliderBlockController);

    headerSliderBlockController.$inject = ['$state', '$translate', '$timeout', '$rootScope'];

    function headerSliderBlockController($state, $translate, $timeout, $rootScope) {
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

        // = background;

        $rootScope.$on('background', function (event, obj) {
            vm.background = obj;
            // console.log( vm.background);
        });

        $(document).ready(function () {
            // $('.header_slider_block').addClass('home');
            //
            //
            // if (vm.background === 'about') {
            //     $('.header_slider_block').removeClass('home');
            //     $('.header_slider_block').addClass('about');
            // }


            // debugger
            $timeout(function () {
                switch (vm.background) {
                    case "home":
                        $('.header_slider_block').addClass('home');
                        $('.header_slider_block').removeClass('trading');
                        $('.header_slider_block').removeClass('investments');
                        $('.header_slider_block').removeClass('competitions');
                        $('.header_slider_block').removeClass('partners');
                        $('.header_slider_block').removeClass('about');
                        break;
                    case "trading":
                        $('.header_slider_block').removeClass('home');
                        $('.header_slider_block').addClass('trading');
                        $('.header_slider_block').removeClass('investments');
                        $('.header_slider_block').removeClass('competitions');
                        $('.header_slider_block').removeClass('partners');
                        $('.header_slider_block').removeClass('about');
                        break;
                    case "investments":
                        $('.header_slider_block').removeClass('home');
                        $('.header_slider_block').removeClass('trading');
                        $('.header_slider_block').addClass('investments');
                        $('.header_slider_block').removeClass('competitions');
                        $('.header_slider_block').removeClass('partners');
                        $('.header_slider_block').removeClass('about');
                        break;
                    case "competitions":
                        $('.header_slider_block').removeClass('home');
                        $('.header_slider_block').removeClass('trading');
                        $('.header_slider_block').removeClass('investments');
                        $('.header_slider_block').addClass('competitions');
                        $('.header_slider_block').removeClass('partners');
                        $('.header_slider_block').removeClass('about');
                        break;
                    case "partners":
                        $('.header_slider_block').removeClass('home');
                        $('.header_slider_block').removeClass('trading');
                        $('.header_slider_block').removeClass('investments');
                        $('.header_slider_block').removeClass('competitions');
                        $('.header_slider_block').addClass('partners');
                        $('.header_slider_block').removeClass('about');
                        break;
                    case "about":
                        console.log('56');
                        $('.header_slider_block').removeClass('home');
                        $('.header_slider_block').addClass('about');
                        break;

                }
            }, 10)
        })

    }
})();
