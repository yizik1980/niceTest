var config = require('./conf.js').config;
var helpers = require('./config-helpers.js');

config.capabilities = {
    browserName: 'chrome',
	loggingPrefs: {
      driver: 'WARNING',
      server: 'WARNING',
      browser: 'DEBUG'
    },
    chromeOptions: {
        w3c: false,
        args: [
            '--disable-web-security',
            '--ignore-certificate-errors',
            '--test-type',
            '--disable-extensions',
            '--disable-infobars',
            '--disable-gpu',
            '--headless',
            'lang=en-US'
        ],
        prefs: {
            'password_manager_enabled': false,
            'profile.password_manager_enabled': false,
            'credentials_enable_service': false
        }
    }
};

helpers.setupSharding(config.capabilities);

exports.config = config;
