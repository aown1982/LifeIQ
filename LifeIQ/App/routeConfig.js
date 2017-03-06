(function () {
    'use strict';

    angular.module('iqApp')
        .config([
            '$routeProvider', function($routeProvider) {
                $routeProvider.when('/',
                    {
                        templateUrl: '/App/Merchant/Index.html',
                        controller: 'MerchantController',
                        controllerAs: 'merchant'
                    })
                    .otherwise({
                        templateUrl: '/App/Templates/Shared/_404.html'
                    });
            }
        ]);
       
})();