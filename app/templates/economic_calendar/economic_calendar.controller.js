;(function () {
    'use strict';

    angular.module('app')
        .controller('EconimicCalendarController', EconimicCalendarController);


    EconimicCalendarController.$inject = ['$scope'];

    function EconimicCalendarController($scope) {
        let vm = this;
        vm.lang = 'en'

        $scope.$on('changeLang', function (event, data) {
            console.log(data);
            vm.lang = data;

        });

    }
})();