;(function () {
    'use strict';

    angular.module('app')
        .controller('CareerController', CareerController);


    CareerController.$inject = ['$scope'];

    function CareerController($scope) {
        let vm = this;


        $(document).ready(function () {

            // accordion effect

            let acc = document.getElementsByClassName("accordion");
            let i;

            for (i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function () {
                    this.classList.toggle("active");
                    let panel = this.nextElementSibling;
                    if (panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                    } else {
                        panel.style.maxHeight = panel.scrollHeight + "px";
                    }
                });
            }

        });

    }
})();