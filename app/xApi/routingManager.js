﻿    define(['plugins/router', './configuration/routes'],
    function (router, routes) {

        "use strict";

        var
            existingGuard = null,

            mapRoutes = function () {
                router.map(routes);
            },

            removeRoutes = function () {
                removeGuard();
            },

            createGuard = function (moduleInitializer, guardView) {
                existingGuard = router.guardRoute;

                router.guardRoute = function (model, route) {
                    if (route.config.route == guardView) {
                        return moduleInitializer.isActivated() ? '' : true;
                    }
                    if (!moduleInitializer.isActivated()) {
                        return route.queryString ? guardView + '?' + route.queryString : guardView;
                    }
                    if (_.isFunction(existingGuard)) {
                        return existingGuard(model, route);
                    }
                    return true;
                };
            },

            removeGuard = function () {
                router.guardRoute = existingGuard;
            };

        return {
            mapRoutes: mapRoutes,
            removeRoutes: removeRoutes,
            createGuard: createGuard
        };

    }
);