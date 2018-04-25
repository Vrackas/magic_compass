;(function () {

    'use strict';

    angular
        .module('app.header_slider_block', ['angular-carousel'])
        .directive('headerSliderBlock', headerLanguageBlock);

    headerLanguageBlock.$inject = [];

    function headerLanguageBlock() {
        return {
            controller: function ($scope) {
                $scope.sportImages = [
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
            },
            templateUrl: 'directives/header_slider/header_slider_block.html',
            link: link,
            restrict: 'AE',
        };


        function link(scope, element, attrs) {

        }
    }
})();