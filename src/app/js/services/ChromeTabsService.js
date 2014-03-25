﻿"use strict";

/*
 * handles chrome tabs
 */
app.factory ("browserTabsService", function ($q) {

    return {

        getAppUrl: function (relativeUrl) {
            return chrome.runtime.getURL (relativeUrl);
        },

        checkCurrentTabUrlMatches: function (url) {
            var deferred = $q.defer ();

            chrome.tabs.query ({ url: url, active: true, currentWindow: true }, function (tabs) {
                deferred.resolve (Utils.isDefinedAndNotNull (tabs) && tabs.length > 0);
            });

            return deferred.promise;
        },

        updateCurrentTabUrl: function (url) {
            var deferred = $q.defer ();

            chrome.tabs.query ({ active: true, currentWindow: true }, function (tabs) {
                chrome.tabs.update (tabs[0].id, { url: url });
                deferred.resolve ();
            });

            return deferred.promise;
        },

        openNewTab: function (url) {
            var deferred = $q.defer ();

            chrome.tabs.create ({ url: url }, function (_) {
                deferred.resolve ();
            });

            return deferred.promise;
        },

        sendMessageToCurrentPage: function (message) {
            var deferred = $q.defer ();

            chrome.tabs.query ({ currentWindow: true, active: true }, function (tabs) {
                if (!Utils.isDefinedAndNotNull (tabs) || tabs.length === 0) {
                    deferred.resolve ();
                    return;
                }

                chrome.tabs.sendMessage (tabs[0].id, message, function (response) {
                    deferred.resolve (response);
                });
            });

            return deferred.promise;
        }
 
    };

});