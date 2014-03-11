"use strict";

// TODO rewrite so that angular can inject storageService - angular bootstrap tie-in?
chrome.runtime.onMessage.addListener (function (request, sender, sendResponse) {
    var injector = angular.injector (["AutoDaytonMls", "ng"]);
    var storageService = injector.get ("storageService");
    var scrapeService = injector.get("scrapeService");

    if (request.action === "consumeCriteria") {
        storageService.consumeCriteria (sender.tab.id).then (function (criteria) {
             sendResponse(criteria);
        });
        return true; // this keeps the message channel open for asynchronous response
    }

    if (request.action === "consumeScrapeToken") {
        storageService.consumeScrapeToken (sender.tab.id).then (function (scrape) {
            sendResponse (scrape === true);
        });
        return true; // this keeps the message channel open for asynchronous response
    }

    if (request.action === "processListing") {
        scrapeService.processListing(request.listing);
        return false;
    }

    return false;
});