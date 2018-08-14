/* ========================================================

   ** Browser Normalizer **

   This file is responsible for normalizing the browser environment before
   the application starts. Doing this allows us to safely use modern language
   features even when the end user is running an older browser.

   The following polyfills are included by default:

   1) Object.assign
   2) Promise
   3) Fetch

   ====================================================== */

// 1) Object.assign
// ------------------------------------
// We can't rely on Object.assign being a function since it may be buggy, so
// defer to `object-assign`. If our Object.assign implementation is correct
// (determined by `object-assign` internally) the polyfill will be discarded
// and the native implementation used.
Object.assign = require('object-assign');

// 2) Promise
// ------------------------------------
if (typeof Promise === 'undefined') {
  require('promise/lib/rejection-tracking').enable();
  window.Promise = require('promise/lib/es6-extensions.js');
}

// 3) Fetch
// ------------------------------------
// Fetch polyfill depends on a Promise implementation, so it must come after
// the feature check / polyfill above.
if (typeof window.fetch === 'undefined') {
  require('whatwg-fetch');
}

// IE: support for 'includes' method
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    enumerable: false,
    value: function(obj) {
      var newArr = this.filter(function(el) {
        return el == obj;
      });
      return newArr.length > 0;
    },
  });
}

// IE: support for Startwith
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  };
}
