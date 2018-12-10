;(function () {
    'use strict';

    angular.module('app')
        .controller('ContactUsController', ContactUsController);


    ContactUsController.$inject = ['$scope', 'http'];

    function ContactUsController($scope, http) {
        let vm = this;
        vm.send = send;

        function send(data) {
            return http.get("https://www.tjglobal.org/mail.php", data).then(
                function (res) {
                    // debugger
                    console.log(res);
                    // debugger
                    if (res) {
                        tostr.success("Message sent")
                    }

                }

            );
        }


    }
})();