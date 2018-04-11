;(function () {

    'use strict';

    angular
        .module('app')
        .controller('MobileMenuController', MobileMenuController);

    MobileMenuController.$inject = ['$state'];

    function MobileMenuController($state) {
        let vm = this;

        vm.company = company;
        vm.banks = banks;
        vm.about = about;
        vm.contacts = contacts;

        function company() {
            $state.go('')
        };
        function banks() {
            $state.go('')
        };
        function about() {
            $state.go('')
        };
        function contacts() {
            $state.go('')
        };
    }
})();
