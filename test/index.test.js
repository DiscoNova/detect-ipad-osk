'use strict';

const detectMobileOSK = require('../src/index.js');

describe('detectMobileOSK', () => {

    describe('on a supported platform (faked during testing)', () => {
        // TODO
    });

    describe('on an unsupported platform (like Node, where the test is running)', () => {
        test('exports absolutely nothing', () => {
            expect(detectMobileOSK).not.toBeDefined();
        });
        test('and doesn\'t even try to do anything', () => {
            expect((window || {}).oskDetectionEnabled).not.toBeDefined();
        });
    });
});
