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
            if (top === '#section') {
                top = top - 250;
                $('body,html').animate({scrollTop: top}, 1000);
            }

            $('body,html').animate({scrollTop: top}, 1000);

        }






    }
})();
