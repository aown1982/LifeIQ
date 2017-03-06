(function () {
    'use strict';

    angular.module('iqApp')
        .config([
            '$routeProvider', function($routeProvider) {
                $routeProvider.when('/',
                    {
                        templateUrl: '/App/Templates/Contact/Index.html',
                        requiresLogin: true,
                        controller: 'ContactController'
                    })
                    .when('/Account/Login',
                    {
                        templateUrl: '/App/Templates/Account/Login.html',
                        controller: 'LoginController'
                    })
                    .when('/Account/Register',
                    {
                        templateUrl: '/App/Templates/Account/Register.html',
                        controller: 'RegisterController'
                    })
                    .otherwise({
                        templateUrl: '/App/Templates/Shared/_404.html'
                    });
            }
        ]);
       
})();