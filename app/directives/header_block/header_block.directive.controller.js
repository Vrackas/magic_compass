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

    }
})();
