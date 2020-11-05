var screenshotReporter;
var specReporter;
var junitReporter;
var DEFAULT_SUITE_DIR = 'target/chrome-reports';

function getShardInstanceCount() {
    var shardInstanceCount = 0;

    if (process.env.SHARD_INSTANCE_COUNT) {
        shardInstanceCount = parseInt(process.env.SHARD_INSTANCE_COUNT, 10);
        if (isNaN(shardInstanceCount) || typeof shardInstanceCount !== 'number' || shardInstanceCount < 0) {
            shardInstanceCount = 0;
        }
    }

    return shardInstanceCount;
}

module.exports = {
    setWindowDimensions: function() {
        var window = browser.manage().window(),
            minWindowWidth = 1300,
            minWindowHeight = 800;

        var defer = protractor.promise.defer();

        window.getSize().then(function(dimensions) {
            var width = Math.max(dimensions.width, minWindowWidth),
                height = Math.max(dimensions.height, minWindowHeight);

            return window.setSize(width, height);
        }).then(function() {
            return window.getSize();
        }).then(function(dimensions) {
            console.log('*** Browser dimensions: ', dimensions.width, ' x ', dimensions.height);
            defer.fulfill();
        });

        return defer.promise;
    },

    setWindowDimensions: function() {
        var window = browser.manage().window(),
            minWindowWidth = 1300,
            minWindowHeight = 800;

        var defer = protractor.promise.defer();

        window.getSize().then(function(dimensions) {
            var width = Math.max(dimensions.width, minWindowWidth),
                height = Math.max(dimensions.height, minWindowHeight);

            return window.setSize(width, height);
        }).then(function() {
            return window.getSize();
        }).then(function(dimensions) {
            console.log('*** Browser dimensions: ', dimensions.width, ' x ', dimensions.height);
            defer.fulfill();
        });

        return defer.promise;
    },

    setupDefaultReporters: function(suiteDirectory) {
        return browser.getSession().then(function(session) {
            var HtmlScreenshotReporter =  require('protractor-angular-screenshot-reporter');
            var SpecReporter = require('jasmine-spec-reporter/src/jasmine-spec-reporter.js');
            var jasmineReporters = require('jasmine-reporters');
            var suiteDir = suiteDirectory || DEFAULT_SUITE_DIR;

            if (!junitReporter) {
                var junitReportFile = 'xml-results-' + session.getId()  + '-' + Date.now() + '-';
                console.log('JUnit reporter using file: ', junitReportFile);
                junitReporter = new jasmineReporters.JUnitXmlReporter({
                    savePath: suiteDir,
                    filePrefix: junitReportFile,
                    consolidateAll: false,
                    consolidate: true,
                    // Use space instead of dot to separate suite names
                    useDotNotation: false,
                    // Include a timestamp in suite names to make them unique in case of duplicate names
                    modifySuiteName: function(suiteName, suite) {
                        return suiteName + ' ' + Date.now();
                    }
                });
            }

            if (!screenshotReporter) {
                screenshotReporter = new HtmlScreenshotReporter({
                    baseDirectory: suiteDir + '/screenshots',
                    docName: 'chrome-summary-results.html',
                    takeScreenShotsOnlyForFailedSpecs: true,
                    docTitle: 'Protractor Tests Report - Chrome',
                    preserveDirectory: false
                }).getJasmine2Reporter();
            }

            if (!specReporter) {
                specReporter = new SpecReporter({displayStacktrace: 'all'});
            }

            jasmine.getEnv().addReporter(junitReporter);
            jasmine.getEnv().addReporter(screenshotReporter);
            jasmine.getEnv().addReporter(specReporter);
        });
    },

    mergeJUnitReports: function(suiteDirectory, exitCode) {
        console.log('Merging JUnit reports...');
        var suiteDir = suiteDirectory || DEFAULT_SUITE_DIR;
        var destinationFile = suiteDir + '/xml-results.xml';

        var fs = require('fs');
        var sourceFiles = fs.readdirSync(suiteDir)
            .filter(function(filename) {
                return filename.match(/^xml-results-.*.xml$/);
            })
            .map(function(filename) {
                return suiteDir + '/' + filename;
            });

        console.log('Source JUnit report files: ', sourceFiles);
        console.log('Destination JUnit report file: ', destinationFile);

        var fs = require('fs');
        var startTag = '<testsuites>';
        var endTag = '</testsuites>';
        var result = '<?xml version="1.0" encoding="UTF-8" ?>' + startTag;

        sourceFiles.forEach(function(sourcePath) {
            var contents = fs.readFileSync(sourcePath, 'utf8');
            var startIndex = contents.indexOf(startTag) + startTag.length;
            var endIndex = contents.indexOf(endTag);
            var suites = contents.substring(startIndex, endIndex);
            result += suites;
        });

        result += endTag;

        fs.writeFileSync(destinationFile, result, 'utf8');
        console.log('JUnit reports merged into file: ', destinationFile);
        return exitCode;
    },

    disableAnimations: function() {
        var disableNgAnimate = function() {
            angular.module('disableNgAnimate', []).run(['$animate', function($animate) {
                $animate.enabled(false);
            }]);
        };

        var disableCssAnimate = function() {
            angular.module('disableCssAnimate', []).run(function() {
                var style = document.createElement('style');
                style.type = 'text/css';
                style.innerHTML = '* {' +
                '-webkit-transition: none !important;' +
                '-moz-transition: none !important' +
                '-o-transition: none !important' +
                '-ms-transition: none !important' +
                'transition: none !important' +
                '}';
                document.getElementsByTagName('head')[0].appendChild(style);
            });
        };

        browser.addMockModule('disableNgAnimate', disableNgAnimate);
        browser.addMockModule('disableCssAnimate', disableCssAnimate);
    },

    getShardInstanceCount: getShardInstanceCount,

    setupSharding: function(configCapabilities) {
        var shardInstanceCount = getShardInstanceCount();

        if (shardInstanceCount > 1) {
            configCapabilities.shardTestFiles = true;
            configCapabilities.maxInstances = shardInstanceCount;
        }
    }
};
