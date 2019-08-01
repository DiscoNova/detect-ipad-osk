'use strict';

describe('on a supported (faked during testing) platform', () => {

    window.testNavigator = { userAgent: 'Mozilla/5.0 (iPad; CPU OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/16A5288q Safari/605.1.15' };
    const detectMobileOSK = require('../src/index.js'); // eslint-disable-line global-require

    test('exports absolutely nothing', () => {
        expect(detectMobileOSK).not.toBeDefined();
    });

    test('tries to do something', () => {
        expect(window.oskDetectionEnabled).toBeDefined();
    });

    delete window.testNavigator;
});
