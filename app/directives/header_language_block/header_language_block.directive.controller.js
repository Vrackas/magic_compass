;(function () {

    'use strict';

    angular
        .module('app')
        .controller('headerLanguageBlockController', headerLanguageBlockController);

    headerLanguageBlockController.$inject = ['$state'];

    function headerLanguageBlockController($state) {
        let vm = this;


        vm.openLang = openLang;

        function openLang(style) {
            console.log($(style));
            $(style).addClass('active');

            $(document).mouseup(function (e) {
                let container = $(style);
                if (container.has(e.target).length === 0){
                    container.removeClass('active');
                }
            });
        }
    }
})();
