﻿define([],
    function () {

        var verbs = {
            started: {
                id: "http://adlnet.gov/expapi/verbs/launched",
                display: {
                    "en-US": "started"
                }
            },
            stopped: {
                id: "http://adlnet.gov/expapi/verbs/exited",
                display: {
                    "en-US": "stopped"
                }
            },
            passed: {
                id: "http://adlnet.gov/expapi/verbs/passed",
                display: {
                    "en-US": "passed"
                }
            },
            failed: {
                id: "http://adlnet.gov/expapi/verbs/failed",
                display: {
                    "en-US": "failed"
                }
            },
            experienced: {
                id: "http://adlnet.gov/expapi/verbs/experienced",
                display: {
                    "en-US": "experienced"
                }
            },
            answered: {
                id: "http://adlnet.gov/expapi/verbs/answered",
                display: {
                    "en-US": "answered"
                }
            },
            mastered: {
                id: "http://adlnet.gov/expapi/verbs/mastered",
                display: {
                    "en-US": "mastered"
                }
            }
        };

        var interactionTypes = {
            choice: "choice",
            fillIn: "fill-in",
            matching: "matching",
            dragAndDrop: "dragAndDrop",
            hotspot: "hotspot",
            other: "other"
        };

        var extenstionKeys = {
            courseId: "http://easygenerator/expapi/course/id"
        };

        var patterns = {
            email: /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,63})+)$/,
            isoDuration: /^PT[0-9]{1,2}H[0-9]{1,2}M[0-9]{1,2}S$/
        };

        return {
            verbs: verbs,
            interactionTypes: interactionTypes,
            extenstionKeys: extenstionKeys,
            patterns: patterns
        };
    }
);