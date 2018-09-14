;(function () {
    angular
        .module('app')
        .config(mainConfig);


    mainConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider','$translateProvider'];

    function mainConfig($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider) {


        $urlRouterProvider.otherwise('/');

        $stateProvider

            .state('home', {
                url: '/',
                templateUrl: 'templates/homepage/homepage.html',
                controller: 'HomepageController',
                controllerAs: 'vm',

            })
            .state('account_type', {
                url: '/account_type',
                templateUrl: 'templates/account_type/account_type.html',
                controller: 'AccountTypeController',
                controllerAs: 'vm',
            })
            .state('general_information', {
                url: '/general_information',
                templateUrl: 'templates/general_information/general_information.html',
                controller: 'GeneralInformationController',
                controllerAs: 'vm',
            })
            .state('career', {
                url: '/career',
                templateUrl: 'templates/career/career.html',
                controller: 'CareerController',
                controllerAs: 'vm',
            })
            .state('funds_security', {
                url: '/funds_security',
                templateUrl: 'templates/funds_security/funds_security.html',
                controller: 'FundsSecurityController',
                controllerAs: 'vm',
            })
            .state('regulation', {
                url: '/regulation',
                templateUrl: 'templates/regulation/regulation.html',
                controller: 'RegulationController',
                controllerAs: 'vm',
            })


        // $locationProvider.html5Mode(true);


        $translateProvider.registerAvailableLanguageKeys(['en', 'ru'], {
            'en-*': 'en',
            'ru-*': 'ru'
        });


        $translateProvider.useStaticFilesLoader({
            prefix: 'language/',
            suffix: '.json'
        });

        $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy(null);
    }


})();

