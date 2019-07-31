'use strict';

const detectMobileOSK = require('../src/index.js');

describe('on a supported (faked during testing) platform', () => {
    test('exports absolutely nothing', () => {
        expect(detectMobileOSK).not.toBeDefined();
    });
    test('tries to do something', () => {
        expect((window || {}).oskDetectionEnabled).toBeDefined();
    });
});
