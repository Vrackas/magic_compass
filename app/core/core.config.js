;(function () {
    angular
        .module('app')
        .config(mainConfig)
    // .config(['$mdIconProvider', function ($mdIconProvider) {
    //     $mdIconProvider
    //         .iconSet('social', 'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-content-symbol.svg', 24)
    //         .defaultIconSet('bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-content-symbol.svg', 24);
    // }]);

    mainConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider','$translateProvider'];

    function mainConfig($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider) {


        $urlRouterProvider.otherwise('/home');

        $stateProvider

            .state('home', {
                url: '/home',
                templateUrl: 'templates/homepage/homepage.html',
                controller: 'HomepageController',
                controllerAs: 'vm',

            })
            .state('partners', {
                url: '/partners',
                templateUrl: 'templates/partners/partners.html',
                controller: 'PartnersController',
                controllerAs: 'vm',

            })
            .state('trading_accounts', {
                url: '/trading_accounts',
                templateUrl: 'templates/trading_accounts/trading_accounts.html',
                controller: 'TradingAccountsController',
                controllerAs: 'vm',
            });

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

