;(function () {

    'use strict';

    angular
        .module('app')
        .controller('scrollButtonController', scrollButtonController);

    scrollButtonController.$inject = ['$state'];

    function scrollButtonController($state) {
        var vm = this;

        vm.scroll = scroll;

        function scroll() {
            event.preventDefault();

            var top = $('#section').offset().top;
            var height = top - 150;
            if (top === '#section') {

                $('body,html').animate({scrollTop: height}, 1000);
            }

            $('body,html').animate({scrollTop: height}, 1000);

        }






    }
})();
