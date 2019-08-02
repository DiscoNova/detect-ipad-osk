'use strict';

beforeAll(() => {
    require.cache = {};
});

const detectMobileOSK = require('../src/index.js');

describe('on an unsupported platform', () => {
    test('exports absolutely nothing (outside of "the test stuff")', () => {
        expect(detectMobileOSK).toBeDefined();

        const { __test, ...anyOtherExportedStuff } = detectMobileOSK;

        expect(anyOtherExportedStuff).toEqual({});
        expect(Object.keys(__test)).toEqual(['refresh']);
        expect(() => __test.refresh && __test.refresh()).toThrow();
    });

    test('doesn\'t even try to do anything', () => {
        expect(window.oskDetectionEnabled).not.toBeDefined();
    });
});
