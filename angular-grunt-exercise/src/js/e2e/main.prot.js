describe('main page e2e test', () => {
    'use strict';

    it('verify h1 is correct', () => {
        browser.get('#/main');
        expect(element.all(by.css('h1')).getText()).toContain('AngularJS Grunt boilerplate');
    });
});
