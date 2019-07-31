'use strict';

const detectMobileOSK = require('../src/index.js');

describe('detectMobileOSK', () => {

    describe('on an unsupported platform', () => {
        test('exports absolutely nothing', () => {
            expect(detectMobileOSK).toBeDefined();
        });
        test('doesn\'t even try to do anything', () => {
            expect(detectMobileOSK).toBeDefined();
        });
    });
});
