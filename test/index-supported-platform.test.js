'use strict';

const detectMobileOSK = require('../src/index.js');

describe('on a supported (faked during testing) platform', () => {
    test('doesn\'t even try to do anything', () => {
        expect((window || {}).oskDetectionEnabled).not.toBeDefined();
        // TODO: It actually should try to do something :)
    });
    test('exports absolutely nothing', () => {
        expect(detectMobileOSK).not.toBeDefined();
        // TODO: It actually should try to export something?
    });
});
