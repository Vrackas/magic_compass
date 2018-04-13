;(function () {
    'use strict';

    angular.module('app')
        .controller('TradingAccountsController', HomepageController);


    HomepageController.$inject = [];

    function HomepageController() {
        let vm = this;

        vm.selected = [];

        vm.query = {
            order: 'name',
            limit: 5,
            page: 1
        };

        vm.desserts=[

        ]
        function success(desserts) {
            vm.desserts = desserts;
        }

        vm.getDesserts = function () {
            // vm.promise = $nutrition.desserts.get($scope.query, success).$promise;
        };

    }
})();