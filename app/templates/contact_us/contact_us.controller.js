;(function () {
    'use strict';

    angular.module('app')
        .controller('ContactUsController', ContactUsController);


    ContactUsController.$inject = ['$scope', 'http', 'toastr'];

    function ContactUsController($scope, http, toastr) {
        let vm = this;
        vm.send = send;

        function send(data) {
            return http.get("https://www.tjglobal.org/mail.php", data).then(
                function (res) {
                    // debugger
                    console.log(res);
                    // debugger
                    if (res) {
                        toastr.success("Message sent")
                    }

                }

            );
        }


    }
})();