'use strict';

const uaMock = require('jest-useragent-mock');
const { clear, mockUserAgent } = uaMock;

describe('on a supported (faked during testing) platform', () => {
    const IPAD = 'Mozilla/5.0 (iPad; CPU OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/16A5288q Safari/605.1.15';

    // Since we're going to be faking the environment during test run, we need to create this slightly differently
    // than we would for the "unsupported platform" test suite... For the record; I hate "let" :)
    let detectMobileOSK;

    beforeEach(() => {
        mockUserAgent(IPAD);
        // Thankfully, the test files each *do* have their own require-cache :)
        detectMobileOSK = require('../src/index.js'); // eslint-disable-line global-require
        expect(detectMobileOSK).toBeDefined();

        const { __test, ...anyOtherExportedStuff } = detectMobileOSK;

        expect(anyOtherExportedStuff).toEqual({});
        expect(Object.keys(__test)).toEqual(['refresh']);
        expect(() => __test.refresh && __test.refresh()).not.toThrow();

        expect(window.navigator.userAgent).toEqual(IPAD);
        expect(window.oskDetectionEnabled).toBeDefined();
    });

    afterEach(() => {
        clear();
        expect(window.navigator.userAgent).not.toEqual(IPAD);
    });

    test('exports absolutely nothing (outside of "the test stuff")', () => {
        const { __test, ...anyOtherExportedStuff } = detectMobileOSK;

        expect(anyOtherExportedStuff).toEqual({});
        expect(Object.keys(__test)).toEqual(['refresh']);
    });

    test('tries to do something', () => {
        expect(window.oskDetectionEnabled).toBeDefined();
    });
});
