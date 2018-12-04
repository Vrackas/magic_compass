;(function () {

    'use strict';

    angular
        .module('app')
        .controller('headerLanguageBlockController', headerLanguageBlockController);

    headerLanguageBlockController.$inject = ['$state', '$translate'];

    function headerLanguageBlockController($state , $translate) {
        let vm = this;


        vm.openLang = openLang;
        vm.changeLang = changeLang;

        /**
         *
         * @param style
         */

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


        /**
         *
         * @param lang
         */

        function changeLang(lang) {
            $translate.use(lang)
                // .then(function () {
                // $localStorage.langKey = lang
            // });
        }
    }
})();
