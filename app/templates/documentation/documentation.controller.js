;(function () {
    'use strict';

    angular.module('app')
        .controller('DocumentationController', DocumentationController);


    DocumentationController.$inject = [];

    function DocumentationController() {
        let vm = this;
        vm.person_doc = true
    }
})();