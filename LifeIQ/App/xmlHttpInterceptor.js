(function () {
    'use strict';

    angular
        .module('iqApp')
        .factory('xmlHttpInteceptor', xmlHttpInteceptor);

    xmlHttpInteceptor.$inject = ['$q', '$window', 'errorHandler', 'constants'];

    function xmlHttpInteceptor($q, $window, errorHandler, constants) {

        var _request = function (config) {
            config.headers = config.headers || {};
            // if we have a token stored, append it to the headers as an Authorization bearer header
                config.headers.Authorization = 'Bearer ' + constants.TOKEN;
            return config;
        };

        var _requestError = function (rejection) {
            var status = rejection.status;

            if (status === 401) {
                errorHandler.logError(status, 'Not authorized.', rejection);
            } else {
                errorHandler.logError(status, 'Unhandled error.', rejection);
            };

            return $q.reject(rejection);
        };

        var _response = function (response) {
            if (response.status === 401) {
                errorHandler.logError(status, 'Not authorized.');
            };
            return response || $q.when(response);
        };

        var _responseError = function (rejection) {
            var status = rejection.status;

            if (status === 401) {
                errorHandler.logError(status, 'Not authorized.', rejection);
            } else {
                errorHandler.logError(status, 'Unhandled error.', rejection);
            };

            return $q.reject(rejection);
        };

        return {
            request: _request,
            requestError: _requestError,
            response: _response,
            responseError: _responseError
        };
    };
})();