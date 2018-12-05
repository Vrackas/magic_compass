;(function () {
    angular
        .module('app')
        .config(mainConfig);


    mainConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider','$translateProvider'];

    function mainConfig($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider) {


        // $localStorage.langKey = 'en';

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
            .state('input_withdrawal', {
                url: '/input_withdrawal',
                templateUrl: 'templates/input_withdrawal/input_withdrawal.html',
                controller: 'InputWithdrawalController',
                controllerAs: 'vm',
            })
            .state('mt5', {
                url: '/mt5',
                templateUrl: 'templates/mt5/mt5.html',
                controller: 'MT5Controller',
                controllerAs: 'vm',
            })
            .state('leverage', {
                url: '/leverage',
                templateUrl: 'templates/leverage/leverage.html',
                controller: 'LeverageController',
                controllerAs: 'vm',
            })
            .state('become_manager', {
                url: '/become_manager',
                templateUrl: 'templates/become_manager/become_manager.html',
                controller: 'BecomeManagerController',
                controllerAs: 'vm',
            })
            .state('invest_pamm', {
                url: '/invest_pamm',
                templateUrl: 'templates/invest_pamm/invest_pamm.html',
                controller: 'InvestPAMMController',
                controllerAs: 'vm',
            })
            .state('pamm_mam', {
                url: '/pamm_mam',
                templateUrl: 'templates/pamm_mam/pamm_mam.html',
                controller: 'PAMMMAMController',
                controllerAs: 'vm',
            })
            .state('economic_calendar', {
                url: '/economic_calendar',
                templateUrl: 'templates/economic_calendar/economic_calendar.html',
                controller: 'EconimicCalendarController',
                controllerAs: 'vm',
            })
            .state('regional_representation', {
                url: '/regional_representation',
                templateUrl: 'templates/regional_representation/regional_representation.html',
                controller: 'RegionalRepresentationController',
                controllerAs: 'vm',
            })
            .state('mt5_white_label', {
                url: '/mt5_white_label',
                templateUrl: 'templates/mt5_white_label/mt5_white_label.html',
                controller: 'MT5WhiteLabelController',
                controllerAs: 'vm',
            })
            .state('agent', {
                url: '/agent',
                templateUrl: 'templates/agent/agent.html',
                controller: 'AgentController',
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
            });



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

