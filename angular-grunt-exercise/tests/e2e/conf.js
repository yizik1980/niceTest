var fs = require('fs');
var helpers = require('./config-helpers.js');
var seleniumPort = process.env.DOCKER_SELENIUM_PORT || 4444;
var suiteDir = process.env.SUITE_DIR || 'target/chrome-reports';
var seleniumServerURL = process.env.SELENIUM_SERVER_URL || 'http://localhost:';
var failFast = require('jasmine-fail-fast');

exports.config = {
    getFastFailObject: function() {
        return failFast;
    },

    seleniumAddress: seleniumServerURL + seleniumPort + '/wd/hub',
    baseUrl: 'http://localhost:9000/',
    specs: ['../../src/js/e2e/**/*.prot.js'],

    onPrepare: function() {
        // helpers.disableAnimations();

        var defer = protractor.promise.defer();

        var webdriverRemote = require('selenium-webdriver/remote');
        browser.setFileDetector(new webdriverRemote.FileDetector());

        jasmine.getEnv().addReporter(failFast.init());
        helpers.setWindowDimensions().then(function() {
            helpers.setupDefaultReporters(suiteDir).then(function() {
                defer.fulfill();
            });
        });

        return defer.promise;
    },

    afterLaunch: function(exitCode) {
        return helpers.mergeJUnitReports(suiteDir, exitCode);
    },

    allScriptsTimeout: 600000,
    getPageTimeout: 300000,
    framework: 'jasmine2',

    jasmineNodeOpts: {
        onComplete: null,
        isVerbose: true,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 180000,
        silent: true,
        print: function() {}
    }
};