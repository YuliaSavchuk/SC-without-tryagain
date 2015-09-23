﻿define(function (require) {
    return {
        getCollection: function () {
            return [
                require('bootstrapping/browserSupportTask'),
                require('bootstrapping/viewLocatorTask'),
                require('bootstrapping/knockoutBindingTask'),
                require('bootstrapping/binderTask'),
                require('bootstrapping/routingTask')
            ];
        }
    };
})