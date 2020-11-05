# angularjs-grunt-exercise

## Prequisites
- nodejs (<=v10)
- grunt (npm install -g grunt)


## Install

npm install
bower install

## run
grunt


## E2E running
note: E2E tests are running in Chrome.

Keep the app live with the 'Grunt' command
Start webdriver manager - `webdriver-manager start`
In case the Chrome version specified in the webdriver-manager output in the terminal is not the same as your browser run the command `webdriver-manager update --versions.chrome <YOUR BROWSER EXACT VERSION>`
followed by `webdriver-manager start`

Setup a new run configuration(in IntelliJ) for Protractor, specify the conf.js file in the path `/tests/e2e/conf.js`


In case of issues you can use the resources in this website to run Protractor - https://www.protractortest.org/#/getting-started
