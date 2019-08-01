'use strict';

// Collect details about runtime environment
const hasWindow = window && (typeof window) === 'object';
const hasRegExp = hasWindow && window.RegExp && (typeof window.RegExp) === 'function';
const hasNavigator = hasWindow && window.navigator && (typeof window.navigator) === 'object';
const hasDocument = hasWindow && window.document && (typeof window.document) === 'object';
const hasGetElementsByName = hasDocument && window.document.getElementsByName && (typeof window.document.getElementsByName) === 'function';
const hasActiveElement = hasDocument && window.document.activeElement && (typeof window.document.activeElement) === 'object';
const hasProperUserAgent = hasRegExp && hasNavigator && (new RegExp('iPad|iPhone|iPod', 'u')).test((window.testNavigator || {}).userAgent || window.navigator.userAgent);
const isLiar = hasWindow && hasProperUserAgent && window.MSStream;

// Assert whether we're even theoretically able to execute detection
const isSupportedBrowser = (
    // First - let's do a feature-check to see that we actually have
    // everything available we will need to check "everything" up...
    (
        hasWindow &&
        hasRegExp &&
        hasNavigator &&
        hasDocument &&
        hasGetElementsByName &&
        hasActiveElement &&

        true // If we got here, everything else is as supposed to be :)
    ) &&
    // Second, check that the client says it is one of the supported ones
    hasProperUserAgent &&
    // Finally, weed out the ones that are known to lie on previous check
    !isLiar
);

delete module.exports; // eslint-disable-line prefer-reflect

if (isSupportedBrowser && !window.oskDetectionEnabled) {
    window.oskDetectionEnabled = true;
    // TODO ... at this point, it actually might be able to work :)
}
