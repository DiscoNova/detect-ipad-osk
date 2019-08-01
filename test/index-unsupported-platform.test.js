'use strict';

const detectMobileOSK = require('../src/index.js');

describe('on an unsupported platform', () => {
    test('exports absolutely nothing', () => {
        expect(detectMobileOSK).not.toBeDefined();
    });
    test('doesn\'t even try to do anything', () => {
        expect(window.oskDetectionEnabled).not.toBeDefined();
    });
});
