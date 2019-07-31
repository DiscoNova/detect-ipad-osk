'use strict';

// Assert whether we're even theoretically able to execute detection
const isSupportedBrowser = (
    // First - let's do a feature-check to see that we actually have
    // everything we will need available. And they are what they are
    (
        window &&
        (typeof window) === 'object' &&
        window.RegExp &&
        (typeof window.RegExp) === 'function' &&
        window.navigator &&
        (typeof window.navigator) === 'object' &&
        window.document &&
        (typeof window.document) === 'object' &&
        window.document.getElementsByName &&
        (typeof window.document.getElementsByName) === 'function' &&
        window.document.activeElement &&
        (typeof window.document.activeElement) === 'object' &&


        true // If we got here, everything else is as supposed to be :)
    ) &&
    // Second, check that the client says it is one of the supported ones
    (new RegExp('iPad|iPhone|iPod', 'u')).test(window.navigator.userAgent) &&
    // Finally, weed out the ones that are known to lie on previous check
    !window.MSStream
);

if (!isSupportedBrowser) {
    delete module.exports; // eslint-disable-line prefer-reflect
} else {
    window.oskDetectionEnabled = true;
    // TODO ... it actually might work :)
}
