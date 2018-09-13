;(function () {

    'use strict';

    angular
        .module('app')
        .controller('HeaderBlockController', HeaderBlockController);

    HeaderBlockController.$inject = ['$state', '$timeout'];

    function HeaderBlockController($state, $timeout) {
        let vm = this;

        vm.contentActive = false;

        vm.open = open;
        vm.subOpen = subOpen;
        vm.headerWrapperOpen = headerWrapperOpen;
        vm.headerWrapperClose = headerWrapperClose;

        function open(style) {
            console.log($(style));
            $(style).addClass('active');

            $(document).mouseup(function (e) {
                let container = $(style);
                if (container.has(e.target).length === 0){
                    container.removeClass('active');
                }
            });
        }

        function subOpen(li) {

            $(li).addClass('active');
            $(document).mouseup(function (e) {
                let container = $(li);
                if (container.has(e.target).length === 0){
                    container.removeClass('active');
                }
            });

            if(li.classList.contains('active')){
                li.removeClass('active');
            }
        }

        function headerWrapperOpen() {
            $('.header_wrapper').addClass('active');
            $(document).mouseup(function (e) {
                let container = $('.header_wrapper');
                if (container.has(e.target).length === 0){
                    container.removeClass('active');
                }
            });
        }
        function headerWrapperClose() {
            $('.header_wrapper').removeClass('active');
        }
        $(document).ready(function () {
            $('body,html').animate({scrollTop: 0}, 1);})

    }
})();
