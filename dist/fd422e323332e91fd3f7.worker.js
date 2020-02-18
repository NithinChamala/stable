/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/ng-annotate-loader/loader.js?ngAnnotate=ng-annotate-patched!./node_modules/babel-loader/lib/index.js?!./node_modules/source-map-loader/index.js!../core-ui/core-ui/app/data-services/analytics/analytics-worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../core-ui/core-ui/node_modules/component-emitter/index.js":
/*!******************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/component-emitter/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Expose `Emitter`.
 */

if (true) {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }

  // Remove event specific arrays for event types that no
  // one is subscribed for to avoid memory leak.
  if (callbacks.length === 0) {
    delete this._callbacks['$' + event];
  }

  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};

  var args = new Array(arguments.length - 1)
    , callbacks = this._callbacks['$' + event];

  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),

/***/ "../core-ui/core-ui/node_modules/fast-safe-stringify/index.js":
/*!********************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/fast-safe-stringify/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = stringify
stringify.default = stringify
stringify.stable = deterministicStringify
stringify.stableStringify = deterministicStringify

var arr = []
var replacerStack = []

// Regular stringify
function stringify (obj, replacer, spacer) {
  decirc(obj, '', [], undefined)
  var res
  if (replacerStack.length === 0) {
    res = JSON.stringify(obj, replacer, spacer)
  } else {
    res = JSON.stringify(obj, replaceGetterValues(replacer), spacer)
  }
  while (arr.length !== 0) {
    var part = arr.pop()
    if (part.length === 4) {
      Object.defineProperty(part[0], part[1], part[3])
    } else {
      part[0][part[1]] = part[2]
    }
  }
  return res
}
function decirc (val, k, stack, parent) {
  var i
  if (typeof val === 'object' && val !== null) {
    for (i = 0; i < stack.length; i++) {
      if (stack[i] === val) {
        var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k)
        if (propertyDescriptor.get !== undefined) {
          if (propertyDescriptor.configurable) {
            Object.defineProperty(parent, k, { value: '[Circular]' })
            arr.push([parent, k, val, propertyDescriptor])
          } else {
            replacerStack.push([val, k])
          }
        } else {
          parent[k] = '[Circular]'
          arr.push([parent, k, val])
        }
        return
      }
    }
    stack.push(val)
    // Optimize for Arrays. Big arrays could kill the performance otherwise!
    if (Array.isArray(val)) {
      for (i = 0; i < val.length; i++) {
        decirc(val[i], i, stack, val)
      }
    } else {
      var keys = Object.keys(val)
      for (i = 0; i < keys.length; i++) {
        var key = keys[i]
        decirc(val[key], key, stack, val)
      }
    }
    stack.pop()
  }
}

// Stable-stringify
function compareFunction (a, b) {
  if (a < b) {
    return -1
  }
  if (a > b) {
    return 1
  }
  return 0
}

function deterministicStringify (obj, replacer, spacer) {
  var tmp = deterministicDecirc(obj, '', [], undefined) || obj
  var res
  if (replacerStack.length === 0) {
    res = JSON.stringify(tmp, replacer, spacer)
  } else {
    res = JSON.stringify(tmp, replaceGetterValues(replacer), spacer)
  }
  while (arr.length !== 0) {
    var part = arr.pop()
    if (part.length === 4) {
      Object.defineProperty(part[0], part[1], part[3])
    } else {
      part[0][part[1]] = part[2]
    }
  }
  return res
}

function deterministicDecirc (val, k, stack, parent) {
  var i
  if (typeof val === 'object' && val !== null) {
    for (i = 0; i < stack.length; i++) {
      if (stack[i] === val) {
        var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k)
        if (propertyDescriptor.get !== undefined) {
          if (propertyDescriptor.configurable) {
            Object.defineProperty(parent, k, { value: '[Circular]' })
            arr.push([parent, k, val, propertyDescriptor])
          } else {
            replacerStack.push([val, k])
          }
        } else {
          parent[k] = '[Circular]'
          arr.push([parent, k, val])
        }
        return
      }
    }
    if (typeof val.toJSON === 'function') {
      return
    }
    stack.push(val)
    // Optimize for Arrays. Big arrays could kill the performance otherwise!
    if (Array.isArray(val)) {
      for (i = 0; i < val.length; i++) {
        deterministicDecirc(val[i], i, stack, val)
      }
    } else {
      // Create a temporary object in the required way
      var tmp = {}
      var keys = Object.keys(val).sort(compareFunction)
      for (i = 0; i < keys.length; i++) {
        var key = keys[i]
        deterministicDecirc(val[key], key, stack, val)
        tmp[key] = val[key]
      }
      if (parent !== undefined) {
        arr.push([parent, k, val])
        parent[k] = tmp
      } else {
        return tmp
      }
    }
    stack.pop()
  }
}

// wraps replacer function to handle values we couldn't replace
// and mark them as [Circular]
function replaceGetterValues (replacer) {
  replacer = replacer !== undefined ? replacer : function (k, v) { return v }
  return function (key, val) {
    if (replacerStack.length > 0) {
      for (var i = 0; i < replacerStack.length; i++) {
        var part = replacerStack[i]
        if (part[1] === key && part[0] === val) {
          val = '[Circular]'
          replacerStack.splice(i, 1)
          break
        }
      }
    }
    return replacer.call(this, key, val)
  }
}


/***/ }),

/***/ "../core-ui/core-ui/node_modules/promise-polyfill/src/finally.js":
/*!***********************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/promise-polyfill/src/finally.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @this {Promise}
 */
function finallyConstructor(callback) {
  var constructor = this.constructor;
  return this.then(
    function(value) {
      // @ts-ignore
      return constructor.resolve(callback()).then(function() {
        return value;
      });
    },
    function(reason) {
      // @ts-ignore
      return constructor.resolve(callback()).then(function() {
        // @ts-ignore
        return constructor.reject(reason);
      });
    }
  );
}

/* harmony default export */ __webpack_exports__["default"] = (finallyConstructor);


/***/ }),

/***/ "../core-ui/core-ui/node_modules/promise-polyfill/src/index.js":
/*!*********************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/promise-polyfill/src/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony import */ var _finally__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finally */ "../core-ui/core-ui/node_modules/promise-polyfill/src/finally.js");


// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = setTimeout;

function isArray(x) {
  return Boolean(x && typeof x.length !== 'undefined');
}

function noop() {}

// Polyfill for Function.prototype.bind
function bind(fn, thisArg) {
  return function() {
    fn.apply(thisArg, arguments);
  };
}

/**
 * @constructor
 * @param {Function} fn
 */
function Promise(fn) {
  if (!(this instanceof Promise))
    throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');
  /** @type {!number} */
  this._state = 0;
  /** @type {!boolean} */
  this._handled = false;
  /** @type {Promise|undefined} */
  this._value = undefined;
  /** @type {!Array<!Function>} */
  this._deferreds = [];

  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }
  if (self._state === 0) {
    self._deferreds.push(deferred);
    return;
  }
  self._handled = true;
  Promise._immediateFn(function() {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }
    var ret;
    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }
    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self)
      throw new TypeError('A promise cannot be resolved with itself.');
    if (
      newValue &&
      (typeof newValue === 'object' || typeof newValue === 'function')
    ) {
      var then = newValue.then;
      if (newValue instanceof Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }
    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function() {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }
  self._deferreds = null;
}

/**
 * @constructor
 */
function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, self) {
  var done = false;
  try {
    fn(
      function(value) {
        if (done) return;
        done = true;
        resolve(self, value);
      },
      function(reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      }
    );
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}

Promise.prototype['catch'] = function(onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function(onFulfilled, onRejected) {
  // @ts-ignore
  var prom = new this.constructor(noop);

  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.prototype['finally'] = _finally__WEBPACK_IMPORTED_MODULE_0__["default"];

Promise.all = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!isArray(arr)) {
      return reject(new TypeError('Promise.all accepts an array'));
    }

    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then;
          if (typeof then === 'function') {
            then.call(
              val,
              function(val) {
                res(i, val);
              },
              reject
            );
            return;
          }
        }
        args[i] = val;
        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.resolve = function(value) {
  if (value && typeof value === 'object' && value.constructor === Promise) {
    return value;
  }

  return new Promise(function(resolve) {
    resolve(value);
  });
};

Promise.reject = function(value) {
  return new Promise(function(resolve, reject) {
    reject(value);
  });
};

Promise.race = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!isArray(arr)) {
      return reject(new TypeError('Promise.race accepts an array'));
    }

    for (var i = 0, len = arr.length; i < len; i++) {
      Promise.resolve(arr[i]).then(resolve, reject);
    }
  });
};

// Use polyfill for setImmediate for performance gains
Promise._immediateFn =
  // @ts-ignore
  (typeof setImmediate === 'function' &&
    function(fn) {
      // @ts-ignore
      setImmediate(fn);
    }) ||
  function(fn) {
    setTimeoutFunc(fn, 0);
  };

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Promise);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../garuda/node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "../core-ui/core-ui/node_modules/promise-polyfill/src/polyfill.js":
/*!************************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/promise-polyfill/src/polyfill.js ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "../core-ui/core-ui/node_modules/promise-polyfill/src/index.js");
/* harmony import */ var _finally__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finally */ "../core-ui/core-ui/node_modules/promise-polyfill/src/finally.js");



/** @suppress {undefinedVars} */
var globalNS = (function() {
  // the only reliable means to get the global object is
  // `Function('return this')()`
  // However, this causes CSP violations in Chrome apps.
  if (typeof self !== 'undefined') {
    return self;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof global !== 'undefined') {
    return global;
  }
  throw new Error('unable to locate global object');
})();

if (!('Promise' in globalNS)) {
  globalNS['Promise'] = _index__WEBPACK_IMPORTED_MODULE_0__["default"];
} else if (!globalNS.Promise.prototype['finally']) {
  globalNS.Promise.prototype['finally'] = _finally__WEBPACK_IMPORTED_MODULE_1__["default"];
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../garuda/node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../core-ui/core-ui/node_modules/superagent/lib/agent-base.js":
/*!********************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/superagent/lib/agent-base.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function Agent() {
  this._defaults = [];
}

['use', 'on', 'once', 'set', 'query', 'type', 'accept', 'auth', 'withCredentials', 'sortQuery', 'retry', 'ok', 'redirects', 'timeout', 'buffer', 'serialize', 'parse', 'ca', 'key', 'pfx', 'cert', 'disableTLSCerts'].forEach(function (fn) {
  // Default setting for all requests from this agent
  Agent.prototype[fn] = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    this._defaults.push({
      fn: fn,
      args: args
    });

    return this;
  };
});

Agent.prototype._setDefaults = function (req) {
  this._defaults.forEach(function (def) {
    req[def.fn].apply(req, _toConsumableArray(def.args));
  });
};

module.exports = Agent;

/***/ }),

/***/ "../core-ui/core-ui/node_modules/superagent/lib/client.js":
/*!****************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/superagent/lib/client.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}
/**
 * Root reference for iframes.
 */


var root;

if (typeof window !== 'undefined') {
  // Browser window
  root = window;
} else if (typeof self === 'undefined') {
  // Other environments
  console.warn('Using browser-only version of superagent in non-browser environment');
  root = void 0;
} else {
  // Web Worker
  root = self;
}

var Emitter = __webpack_require__(/*! component-emitter */ "../core-ui/core-ui/node_modules/component-emitter/index.js");

var safeStringify = __webpack_require__(/*! fast-safe-stringify */ "../core-ui/core-ui/node_modules/fast-safe-stringify/index.js");

var RequestBase = __webpack_require__(/*! ./request-base */ "../core-ui/core-ui/node_modules/superagent/lib/request-base.js");

var isObject = __webpack_require__(/*! ./is-object */ "../core-ui/core-ui/node_modules/superagent/lib/is-object.js");

var ResponseBase = __webpack_require__(/*! ./response-base */ "../core-ui/core-ui/node_modules/superagent/lib/response-base.js");

var Agent = __webpack_require__(/*! ./agent-base */ "../core-ui/core-ui/node_modules/superagent/lib/agent-base.js");
/**
 * Noop.
 */


function noop() {}
/**
 * Expose `request`.
 */


module.exports = function (method, url) {
  // callback
  if (typeof url === 'function') {
    return new exports.Request('GET', method).end(url);
  } // url first


  if (arguments.length === 1) {
    return new exports.Request('GET', method);
  }

  return new exports.Request(method, url);
};

exports = module.exports;
var request = exports;
exports.Request = Request;
/**
 * Determine XHR.
 */

request.getXHR = function () {
  if (root.XMLHttpRequest && (!root.location || root.location.protocol !== 'file:' || !root.ActiveXObject)) {
    return new XMLHttpRequest();
  }

  try {
    return new ActiveXObject('Microsoft.XMLHTTP');
  } catch (_unused) {}

  try {
    return new ActiveXObject('Msxml2.XMLHTTP.6.0');
  } catch (_unused2) {}

  try {
    return new ActiveXObject('Msxml2.XMLHTTP.3.0');
  } catch (_unused3) {}

  try {
    return new ActiveXObject('Msxml2.XMLHTTP');
  } catch (_unused4) {}

  throw new Error('Browser-only version of superagent could not find XHR');
};
/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */


var trim = ''.trim ? function (s) {
  return s.trim();
} : function (s) {
  return s.replace(/(^\s*|\s*$)/g, '');
};
/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj) {
  if (!isObject(obj)) return obj;
  var pairs = [];

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) pushEncodedKeyValuePair(pairs, key, obj[key]);
  }

  return pairs.join('&');
}
/**
 * Helps 'serialize' with serializing arrays.
 * Mutates the pairs array.
 *
 * @param {Array} pairs
 * @param {String} key
 * @param {Mixed} val
 */


function pushEncodedKeyValuePair(pairs, key, val) {
  if (val === undefined) return;

  if (val === null) {
    pairs.push(encodeURIComponent(key));
    return;
  }

  if (Array.isArray(val)) {
    val.forEach(function (v) {
      pushEncodedKeyValuePair(pairs, key, v);
    });
  } else if (isObject(val)) {
    for (var subkey in val) {
      if (Object.prototype.hasOwnProperty.call(val, subkey)) pushEncodedKeyValuePair(pairs, "".concat(key, "[").concat(subkey, "]"), val[subkey]);
    }
  } else {
    pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(val));
  }
}
/**
 * Expose serialization method.
 */


request.serializeObject = serialize;
/**
 * Parse the given x-www-form-urlencoded `str`.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var pair;
  var pos;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    pos = pair.indexOf('=');

    if (pos === -1) {
      obj[decodeURIComponent(pair)] = '';
    } else {
      obj[decodeURIComponent(pair.slice(0, pos))] = decodeURIComponent(pair.slice(pos + 1));
    }
  }

  return obj;
}
/**
 * Expose parser.
 */


request.parseString = parseString;
/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'text/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  form: 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};
/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

request.serialize = {
  'application/x-www-form-urlencoded': serialize,
  'application/json': safeStringify
};
/**
 * Default parsers.
 *
 *     superagent.parse['application/xml'] = function(str){
 *       return { object parsed from str };
 *     };
 *
 */

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse
};
/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');

    if (index === -1) {
      // could be empty line, just skip it
      continue;
    }

    field = line.slice(0, index).toLowerCase();
    val = trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}
/**
 * Check if `mime` is json or has +json structured syntax suffix.
 *
 * @param {String} mime
 * @return {Boolean}
 * @api private
 */


function isJSON(mime) {
  // should match /json or +json
  // but not /json-seq
  return /[/+]json($|[^-\w])/.test(mime);
}
/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */


function Response(req) {
  this.req = req;
  this.xhr = this.req.xhr; // responseText is accessible only if responseType is '' or 'text' and on older browsers

  this.text = this.req.method !== 'HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text') || typeof this.xhr.responseType === 'undefined' ? this.xhr.responseText : null;
  this.statusText = this.req.xhr.statusText;
  var status = this.xhr.status; // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request

  if (status === 1223) {
    status = 204;
  }

  this._setStatusProperties(status);

  this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  this.header = this.headers; // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.

  this.header['content-type'] = this.xhr.getResponseHeader('content-type');

  this._setHeaderProperties(this.header);

  if (this.text === null && req._responseType) {
    this.body = this.xhr.response;
  } else {
    this.body = this.req.method === 'HEAD' ? null : this._parseBody(this.text ? this.text : this.xhr.response);
  }
} // eslint-disable-next-line new-cap


ResponseBase(Response.prototype);
/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype._parseBody = function (str) {
  var parse = request.parse[this.type];

  if (this.req._parser) {
    return this.req._parser(this, str);
  }

  if (!parse && isJSON(this.type)) {
    parse = request.parse['application/json'];
  }

  return parse && str && (str.length > 0 || str instanceof Object) ? parse(str) : null;
};
/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */


Response.prototype.toError = function () {
  var req = this.req;
  var method = req.method;
  var url = req.url;
  var msg = "cannot ".concat(method, " ").concat(url, " (").concat(this.status, ")");
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;
  return err;
};
/**
 * Expose `Response`.
 */


request.Response = Response;
/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method, url) {
  var self = this;
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {}; // preserves header name case

  this._header = {}; // coerces header names to lowercase

  this.on('end', function () {
    var err = null;
    var res = null;

    try {
      res = new Response(self);
    } catch (err_) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = err_; // issue #675: return the raw response if the response parsing fails

      if (self.xhr) {
        // ie9 doesn't have 'response' property
        err.rawResponse = typeof self.xhr.responseType === 'undefined' ? self.xhr.responseText : self.xhr.response; // issue #876: return the http status code if the response parsing fails

        err.status = self.xhr.status ? self.xhr.status : null;
        err.statusCode = err.status; // backwards-compat only
      } else {
        err.rawResponse = null;
        err.status = null;
      }

      return self.callback(err);
    }

    self.emit('response', res);
    var new_err;

    try {
      if (!self._isResponseOK(res)) {
        new_err = new Error(res.statusText || res.text || 'Unsuccessful HTTP response');
      }
    } catch (err_) {
      new_err = err_; // ok() callback can throw
    } // #1000 don't catch errors from the callback to avoid double calling it


    if (new_err) {
      new_err.original = err;
      new_err.response = res;
      new_err.status = res.status;
      self.callback(new_err, res);
    } else {
      self.callback(null, res);
    }
  });
}
/**
 * Mixin `Emitter` and `RequestBase`.
 */
// eslint-disable-next-line new-cap


Emitter(Request.prototype); // eslint-disable-next-line new-cap

RequestBase(Request.prototype);
/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function (type) {
  this.set('Content-Type', request.types[type] || type);
  return this;
};
/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.accept = function (type) {
  this.set('Accept', request.types[type] || type);
  return this;
};
/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} [pass] optional in case of using 'bearer' as type
 * @param {Object} options with 'type' property 'auto', 'basic' or 'bearer' (default 'basic')
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.auth = function (user, pass, options) {
  if (arguments.length === 1) pass = '';

  if (_typeof(pass) === 'object' && pass !== null) {
    // pass is optional and can be replaced with options
    options = pass;
    pass = '';
  }

  if (!options) {
    options = {
      type: typeof btoa === 'function' ? 'basic' : 'auto'
    };
  }

  var encoder = function encoder(string) {
    if (typeof btoa === 'function') {
      return btoa(string);
    }

    throw new Error('Cannot use basic auth, btoa is not a function');
  };

  return this._auth(user, pass, options, encoder);
};
/**
 * Add query-string `val`.
 *
 * Examples:
 *
 *   request.get('/shoes')
 *     .query('size=10')
 *     .query({ color: 'blue' })
 *
 * @param {Object|String} val
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.query = function (val) {
  if (typeof val !== 'string') val = serialize(val);
  if (val) this._query.push(val);
  return this;
};
/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `options` (or filename).
 *
 * ``` js
 * request.post('/upload')
 *   .attach('content', new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String|Object} options
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.attach = function (field, file, options) {
  if (file) {
    if (this._data) {
      throw new Error("superagent can't mix .send() and .attach()");
    }

    this._getFormData().append(field, file, options || file.name);
  }

  return this;
};

Request.prototype._getFormData = function () {
  if (!this._formData) {
    this._formData = new root.FormData();
  }

  return this._formData;
};
/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */


Request.prototype.callback = function (err, res) {
  if (this._shouldRetry(err, res)) {
    return this._retry();
  }

  var fn = this._callback;
  this.clearTimeout();

  if (err) {
    if (this._maxRetries) err.retries = this._retries - 1;
    this.emit('error', err);
  }

  fn(err, res);
};
/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */


Request.prototype.crossDomainError = function () {
  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
  err.crossDomain = true;
  err.status = this.status;
  err.method = this.method;
  err.url = this.url;
  this.callback(err);
}; // This only warns, because the request is still likely to work


Request.prototype.agent = function () {
  console.warn('This is not supported in browser version of superagent');
  return this;
};

Request.prototype.ca = Request.prototype.agent;
Request.prototype.buffer = Request.prototype.ca; // This throws, because it can't send/receive data as expected

Request.prototype.write = function () {
  throw new Error('Streaming is not supported in browser version of superagent');
};

Request.prototype.pipe = Request.prototype.write;
/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * @param {Object} obj host object
 * @return {Boolean} is a host object
 * @api private
 */

Request.prototype._isHost = function (obj) {
  // Native objects stringify to [object File], [object Blob], [object FormData], etc.
  return obj && _typeof(obj) === 'object' && !Array.isArray(obj) && Object.prototype.toString.call(obj) !== '[object Object]';
};
/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.end = function (fn) {
  if (this._endCalled) {
    console.warn('Warning: .end() was called twice. This is not supported in superagent');
  }

  this._endCalled = true; // store callback

  this._callback = fn || noop; // querystring

  this._finalizeQueryString();

  this._end();
};

Request.prototype._setUploadTimeout = function () {
  var self = this; // upload timeout it's wokrs only if deadline timeout is off

  if (this._uploadTimeout && !this._uploadTimeoutTimer) {
    this._uploadTimeoutTimer = setTimeout(function () {
      self._timeoutError('Upload timeout of ', self._uploadTimeout, 'ETIMEDOUT');
    }, this._uploadTimeout);
  }
}; // eslint-disable-next-line complexity


Request.prototype._end = function () {
  if (this._aborted) return this.callback(new Error('The request has been aborted even before .end() was called'));
  var self = this;
  this.xhr = request.getXHR();
  var xhr = this.xhr;
  var data = this._formData || this._data;

  this._setTimeouts(); // state change


  xhr.onreadystatechange = function () {
    var readyState = xhr.readyState;

    if (readyState >= 2 && self._responseTimeoutTimer) {
      clearTimeout(self._responseTimeoutTimer);
    }

    if (readyState !== 4) {
      return;
    } // In IE9, reads to any property (e.g. status) off of an aborted XHR will
    // result in the error "Could not complete the operation due to error c00c023f"


    var status;

    try {
      status = xhr.status;
    } catch (_unused5) {
      status = 0;
    }

    if (!status) {
      if (self.timedout || self._aborted) return;
      return self.crossDomainError();
    }

    self.emit('end');
  }; // progress


  var handleProgress = function handleProgress(direction, e) {
    if (e.total > 0) {
      e.percent = e.loaded / e.total * 100;

      if (e.percent === 100) {
        clearTimeout(self._uploadTimeoutTimer);
      }
    }

    e.direction = direction;
    self.emit('progress', e);
  };

  if (this.hasListeners('progress')) {
    try {
      xhr.addEventListener('progress', handleProgress.bind(null, 'download'));

      if (xhr.upload) {
        xhr.upload.addEventListener('progress', handleProgress.bind(null, 'upload'));
      }
    } catch (_unused6) {// Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
      // Reported here:
      // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
    }
  }

  if (xhr.upload) {
    this._setUploadTimeout();
  } // initiate request


  try {
    if (this.username && this.password) {
      xhr.open(this.method, this.url, true, this.username, this.password);
    } else {
      xhr.open(this.method, this.url, true);
    }
  } catch (err) {
    // see #1149
    return this.callback(err);
  } // CORS


  if (this._withCredentials) xhr.withCredentials = true; // body

  if (!this._formData && this.method !== 'GET' && this.method !== 'HEAD' && typeof data !== 'string' && !this._isHost(data)) {
    // serialize stuff
    var contentType = this._header['content-type'];

    var _serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];

    if (!_serialize && isJSON(contentType)) {
      _serialize = request.serialize['application/json'];
    }

    if (_serialize) data = _serialize(data);
  } // set header fields


  for (var field in this.header) {
    if (this.header[field] === null) continue;
    if (Object.prototype.hasOwnProperty.call(this.header, field)) xhr.setRequestHeader(field, this.header[field]);
  }

  if (this._responseType) {
    xhr.responseType = this._responseType;
  } // send stuff


  this.emit('request', this); // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
  // We need null here if data is undefined

  xhr.send(typeof data === 'undefined' ? null : data);
};

request.agent = function () {
  return new Agent();
};

['GET', 'POST', 'OPTIONS', 'PATCH', 'PUT', 'DELETE'].forEach(function (method) {
  Agent.prototype[method.toLowerCase()] = function (url, fn) {
    var req = new request.Request(method, url);

    this._setDefaults(req);

    if (fn) {
      req.end(fn);
    }

    return req;
  };
});
Agent.prototype.del = Agent.prototype["delete"];
/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.get = function (url, data, fn) {
  var req = request('GET', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */


request.head = function (url, data, fn) {
  var req = request('HEAD', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * OPTIONS query to `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */


request.options = function (url, data, fn) {
  var req = request('OPTIONS', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * DELETE `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */


function del(url, data, fn) {
  var req = request('DELETE', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
}

request.del = del;
request["delete"] = del;
/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.patch = function (url, data, fn) {
  var req = request('PATCH', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */


request.post = function (url, data, fn) {
  var req = request('POST', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */


request.put = function (url, data, fn) {
  var req = request('PUT', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/***/ }),

/***/ "../core-ui/core-ui/node_modules/superagent/lib/is-object.js":
/*!*******************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/superagent/lib/is-object.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}
/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */


function isObject(obj) {
  return obj !== null && _typeof(obj) === 'object';
}

module.exports = isObject;

/***/ }),

/***/ "../core-ui/core-ui/node_modules/superagent/lib/request-base.js":
/*!**********************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/superagent/lib/request-base.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}
/**
 * Module of mixed-in functions shared between node and client code
 */


var isObject = __webpack_require__(/*! ./is-object */ "../core-ui/core-ui/node_modules/superagent/lib/is-object.js");
/**
 * Expose `RequestBase`.
 */


module.exports = RequestBase;
/**
 * Initialize a new `RequestBase`.
 *
 * @api public
 */

function RequestBase(obj) {
  if (obj) return mixin(obj);
}
/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */


function mixin(obj) {
  for (var key in RequestBase.prototype) {
    if (Object.prototype.hasOwnProperty.call(RequestBase.prototype, key)) obj[key] = RequestBase.prototype[key];
  }

  return obj;
}
/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.clearTimeout = function () {
  clearTimeout(this._timer);
  clearTimeout(this._responseTimeoutTimer);
  clearTimeout(this._uploadTimeoutTimer);
  delete this._timer;
  delete this._responseTimeoutTimer;
  delete this._uploadTimeoutTimer;
  return this;
};
/**
 * Override default response body parser
 *
 * This function will be called to convert incoming data into request.body
 *
 * @param {Function}
 * @api public
 */


RequestBase.prototype.parse = function (fn) {
  this._parser = fn;
  return this;
};
/**
 * Set format of binary response body.
 * In browser valid formats are 'blob' and 'arraybuffer',
 * which return Blob and ArrayBuffer, respectively.
 *
 * In Node all values result in Buffer.
 *
 * Examples:
 *
 *      req.get('/')
 *        .responseType('blob')
 *        .end(callback);
 *
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.responseType = function (val) {
  this._responseType = val;
  return this;
};
/**
 * Override default request body serializer
 *
 * This function will be called to convert data set via .send or .attach into payload to send
 *
 * @param {Function}
 * @api public
 */


RequestBase.prototype.serialize = function (fn) {
  this._serializer = fn;
  return this;
};
/**
 * Set timeouts.
 *
 * - response timeout is time between sending request and receiving the first byte of the response. Includes DNS and connection time.
 * - deadline is the time from start of the request to receiving response body in full. If the deadline is too short large files may not load at all on slow connections.
 * - upload is the time  since last bit of data was sent or received. This timeout works only if deadline timeout is off
 *
 * Value of 0 or false means no timeout.
 *
 * @param {Number|Object} ms or {response, deadline}
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.timeout = function (options) {
  if (!options || _typeof(options) !== 'object') {
    this._timeout = options;
    this._responseTimeout = 0;
    this._uploadTimeout = 0;
    return this;
  }

  for (var option in options) {
    if (Object.prototype.hasOwnProperty.call(options, option)) {
      switch (option) {
        case 'deadline':
          this._timeout = options.deadline;
          break;

        case 'response':
          this._responseTimeout = options.response;
          break;

        case 'upload':
          this._uploadTimeout = options.upload;
          break;

        default:
          console.warn('Unknown timeout option', option);
      }
    }
  }

  return this;
};
/**
 * Set number of retry attempts on error.
 *
 * Failed requests will be retried 'count' times if timeout or err.code >= 500.
 *
 * @param {Number} count
 * @param {Function} [fn]
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.retry = function (count, fn) {
  // Default to 1 if no count passed or true
  if (arguments.length === 0 || count === true) count = 1;
  if (count <= 0) count = 0;
  this._maxRetries = count;
  this._retries = 0;
  this._retryCallback = fn;
  return this;
};

var ERROR_CODES = ['ECONNRESET', 'ETIMEDOUT', 'EADDRINFO', 'ESOCKETTIMEDOUT'];
/**
 * Determine if a request should be retried.
 * (Borrowed from segmentio/superagent-retry)
 *
 * @param {Error} err an error
 * @param {Response} [res] response
 * @returns {Boolean} if segment should be retried
 */

RequestBase.prototype._shouldRetry = function (err, res) {
  if (!this._maxRetries || this._retries++ >= this._maxRetries) {
    return false;
  }

  if (this._retryCallback) {
    try {
      var override = this._retryCallback(err, res);

      if (override === true) return true;
      if (override === false) return false; // undefined falls back to defaults
    } catch (err_) {
      console.error(err_);
    }
  }

  if (res && res.status && res.status >= 500 && res.status !== 501) return true;

  if (err) {
    if (err.code && ERROR_CODES.includes(err.code)) return true; // Superagent timeout

    if (err.timeout && err.code === 'ECONNABORTED') return true;
    if (err.crossDomain) return true;
  }

  return false;
};
/**
 * Retry request
 *
 * @return {Request} for chaining
 * @api private
 */


RequestBase.prototype._retry = function () {
  this.clearTimeout(); // node

  if (this.req) {
    this.req = null;
    this.req = this.request();
  }

  this._aborted = false;
  this.timedout = false;
  this.timedoutError = null;
  return this._end();
};
/**
 * Promise support
 *
 * @param {Function} resolve
 * @param {Function} [reject]
 * @return {Request}
 */


RequestBase.prototype.then = function (resolve, reject) {
  var _this = this;

  if (!this._fullfilledPromise) {
    var self = this;

    if (this._endCalled) {
      console.warn('Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises');
    }

    this._fullfilledPromise = new Promise(function (resolve, reject) {
      self.on('abort', function () {
        if (_this.timedout && _this.timedoutError) {
          reject(_this.timedoutError);
          return;
        }

        var err = new Error('Aborted');
        err.code = 'ABORTED';
        err.status = _this.status;
        err.method = _this.method;
        err.url = _this.url;
        reject(err);
      });
      self.end(function (err, res) {
        if (err) reject(err);else resolve(res);
      });
    });
  }

  return this._fullfilledPromise.then(resolve, reject);
};

RequestBase.prototype["catch"] = function (cb) {
  return this.then(undefined, cb);
};
/**
 * Allow for extension
 */


RequestBase.prototype.use = function (fn) {
  fn(this);
  return this;
};

RequestBase.prototype.ok = function (cb) {
  if (typeof cb !== 'function') throw new Error('Callback required');
  this._okCallback = cb;
  return this;
};

RequestBase.prototype._isResponseOK = function (res) {
  if (!res) {
    return false;
  }

  if (this._okCallback) {
    return this._okCallback(res);
  }

  return res.status >= 200 && res.status < 300;
};
/**
 * Get request header `field`.
 * Case-insensitive.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */


RequestBase.prototype.get = function (field) {
  return this._header[field.toLowerCase()];
};
/**
 * Get case-insensitive header `field` value.
 * This is a deprecated internal API. Use `.get(field)` instead.
 *
 * (getHeader is no longer used internally by the superagent code base)
 *
 * @param {String} field
 * @return {String}
 * @api private
 * @deprecated
 */


RequestBase.prototype.getHeader = RequestBase.prototype.get;
/**
 * Set header `field` to `val`, or multiple fields with one object.
 * Case-insensitive.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.set = function (field, val) {
  if (isObject(field)) {
    for (var key in field) {
      if (Object.prototype.hasOwnProperty.call(field, key)) this.set(key, field[key]);
    }

    return this;
  }

  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};
/**
 * Remove header `field`.
 * Case-insensitive.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field field name
 */


RequestBase.prototype.unset = function (field) {
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};
/**
 * Write the field `name` and `val`, or multiple fields with one object
 * for "multipart/form-data" request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 *
 * request.post('/upload')
 *   .field({ foo: 'bar', baz: 'qux' })
 *   .end(callback);
 * ```
 *
 * @param {String|Object} name name of field
 * @param {String|Blob|File|Buffer|fs.ReadStream} val value of field
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.field = function (name, val) {
  // name should be either a string or an object.
  if (name === null || undefined === name) {
    throw new Error('.field(name, val) name can not be empty');
  }

  if (this._data) {
    throw new Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObject(name)) {
    for (var key in name) {
      if (Object.prototype.hasOwnProperty.call(name, key)) this.field(key, name[key]);
    }

    return this;
  }

  if (Array.isArray(val)) {
    for (var i in val) {
      if (Object.prototype.hasOwnProperty.call(val, i)) this.field(name, val[i]);
    }

    return this;
  } // val should be defined now


  if (val === null || undefined === val) {
    throw new Error('.field(name, val) val can not be empty');
  }

  if (typeof val === 'boolean') {
    val = String(val);
  }

  this._getFormData().append(name, val);

  return this;
};
/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request} request
 * @api public
 */


RequestBase.prototype.abort = function () {
  if (this._aborted) {
    return this;
  }

  this._aborted = true;
  if (this.xhr) this.xhr.abort(); // browser

  if (this.req) this.req.abort(); // node

  this.clearTimeout();
  this.emit('abort');
  return this;
};

RequestBase.prototype._auth = function (user, pass, options, base64Encoder) {
  switch (options.type) {
    case 'basic':
      this.set('Authorization', "Basic ".concat(base64Encoder("".concat(user, ":").concat(pass))));
      break;

    case 'auto':
      this.username = user;
      this.password = pass;
      break;

    case 'bearer':
      // usage would be .auth(accessToken, { type: 'bearer' })
      this.set('Authorization', "Bearer ".concat(user));
      break;

    default:
      break;
  }

  return this;
};
/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */


RequestBase.prototype.withCredentials = function (on) {
  // This is browser-only functionality. Node side is no-op.
  if (on === undefined) on = true;
  this._withCredentials = on;
  return this;
};
/**
 * Set the max redirects to `n`. Does nothing in browser XHR implementation.
 *
 * @param {Number} n
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.redirects = function (n) {
  this._maxRedirects = n;
  return this;
};
/**
 * Maximum size of buffered response body, in bytes. Counts uncompressed size.
 * Default 200MB.
 *
 * @param {Number} n number of bytes
 * @return {Request} for chaining
 */


RequestBase.prototype.maxResponseSize = function (n) {
  if (typeof n !== 'number') {
    throw new TypeError('Invalid argument');
  }

  this._maxResponseSize = n;
  return this;
};
/**
 * Convert to a plain javascript object (not JSON string) of scalar properties.
 * Note as this method is designed to return a useful non-this value,
 * it cannot be chained.
 *
 * @return {Object} describing method, url, and data of this request
 * @api public
 */


RequestBase.prototype.toJSON = function () {
  return {
    method: this.method,
    url: this.url,
    data: this._data,
    headers: this._header
  };
};
/**
 * Send `data` as the request body, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"}')
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
 *      request.post('/user')
 *        .send('name=tobi')
 *        .send('species=ferret')
 *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */
// eslint-disable-next-line complexity


RequestBase.prototype.send = function (data) {
  var isObj = isObject(data);
  var type = this._header['content-type'];

  if (this._formData) {
    throw new Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObj && !this._data) {
    if (Array.isArray(data)) {
      this._data = [];
    } else if (!this._isHost(data)) {
      this._data = {};
    }
  } else if (data && this._data && this._isHost(this._data)) {
    throw new Error("Can't merge these send calls");
  } // merge


  if (isObj && isObject(this._data)) {
    for (var key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) this._data[key] = data[key];
    }
  } else if (typeof data === 'string') {
    // default to x-www-form-urlencoded
    if (!type) this.type('form');
    type = this._header['content-type'];

    if (type === 'application/x-www-form-urlencoded') {
      this._data = this._data ? "".concat(this._data, "&").concat(data) : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!isObj || this._isHost(data)) {
    return this;
  } // default to json


  if (!type) this.type('json');
  return this;
};
/**
 * Sort `querystring` by the sort function
 *
 *
 * Examples:
 *
 *       // default order
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery()
 *         .end(callback)
 *
 *       // customized sort function
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery(function(a, b){
 *           return a.length - b.length;
 *         })
 *         .end(callback)
 *
 *
 * @param {Function} sort
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.sortQuery = function (sort) {
  // _sort default to true but otherwise can be a function or boolean
  this._sort = typeof sort === 'undefined' ? true : sort;
  return this;
};
/**
 * Compose querystring to append to req.url
 *
 * @api private
 */


RequestBase.prototype._finalizeQueryString = function () {
  var query = this._query.join('&');

  if (query) {
    this.url += (this.url.includes('?') ? '&' : '?') + query;
  }

  this._query.length = 0; // Makes the call idempotent

  if (this._sort) {
    var index = this.url.indexOf('?');

    if (index >= 0) {
      var queryArr = this.url.slice(index + 1).split('&');

      if (typeof this._sort === 'function') {
        queryArr.sort(this._sort);
      } else {
        queryArr.sort();
      }

      this.url = this.url.slice(0, index) + '?' + queryArr.join('&');
    }
  }
}; // For backwards compat only


RequestBase.prototype._appendQueryString = function () {
  console.warn('Unsupported');
};
/**
 * Invoke callback with timeout error.
 *
 * @api private
 */


RequestBase.prototype._timeoutError = function (reason, timeout, errno) {
  if (this._aborted) {
    return;
  }

  var err = new Error("".concat(reason + timeout, "ms exceeded"));
  err.timeout = timeout;
  err.code = 'ECONNABORTED';
  err.errno = errno;
  this.timedout = true;
  this.timedoutError = err;
  this.abort();
  this.callback(err);
};

RequestBase.prototype._setTimeouts = function () {
  var self = this; // deadline

  if (this._timeout && !this._timer) {
    this._timer = setTimeout(function () {
      self._timeoutError('Timeout of ', self._timeout, 'ETIME');
    }, this._timeout);
  } // response timeout


  if (this._responseTimeout && !this._responseTimeoutTimer) {
    this._responseTimeoutTimer = setTimeout(function () {
      self._timeoutError('Response timeout of ', self._responseTimeout, 'ETIMEDOUT');
    }, this._responseTimeout);
  }
};

/***/ }),

/***/ "../core-ui/core-ui/node_modules/superagent/lib/response-base.js":
/*!***********************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/superagent/lib/response-base.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Module dependencies.
 */

var utils = __webpack_require__(/*! ./utils */ "../core-ui/core-ui/node_modules/superagent/lib/utils.js");
/**
 * Expose `ResponseBase`.
 */


module.exports = ResponseBase;
/**
 * Initialize a new `ResponseBase`.
 *
 * @api public
 */

function ResponseBase(obj) {
  if (obj) return mixin(obj);
}
/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */


function mixin(obj) {
  for (var key in ResponseBase.prototype) {
    if (Object.prototype.hasOwnProperty.call(ResponseBase.prototype, key)) obj[key] = ResponseBase.prototype[key];
  }

  return obj;
}
/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */


ResponseBase.prototype.get = function (field) {
  return this.header[field.toLowerCase()];
};
/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */


ResponseBase.prototype._setHeaderProperties = function (header) {
  // TODO: moar!
  // TODO: make this a util
  // content-type
  var ct = header['content-type'] || '';
  this.type = utils.type(ct); // params

  var params = utils.params(ct);

  for (var key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) this[key] = params[key];
  }

  this.links = {}; // links

  try {
    if (header.link) {
      this.links = utils.parseLinks(header.link);
    }
  } catch (_unused) {// ignore
  }
};
/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */


ResponseBase.prototype._setStatusProperties = function (status) {
  var type = status / 100 | 0; // status / class

  this.statusCode = status;
  this.status = this.statusCode;
  this.statusType = type; // basics

  this.info = type === 1;
  this.ok = type === 2;
  this.redirect = type === 3;
  this.clientError = type === 4;
  this.serverError = type === 5;
  this.error = type === 4 || type === 5 ? this.toError() : false; // sugar

  this.created = status === 201;
  this.accepted = status === 202;
  this.noContent = status === 204;
  this.badRequest = status === 400;
  this.unauthorized = status === 401;
  this.notAcceptable = status === 406;
  this.forbidden = status === 403;
  this.notFound = status === 404;
  this.unprocessableEntity = status === 422;
};

/***/ }),

/***/ "../core-ui/core-ui/node_modules/superagent/lib/utils.js":
/*!***************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/superagent/lib/utils.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

exports.type = function (str) {
  return str.split(/ *; */).shift();
};
/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */


exports.params = function (str) {
  return str.split(/ *; */).reduce(function (obj, str) {
    var parts = str.split(/ *= */);
    var key = parts.shift();
    var val = parts.shift();
    if (key && val) obj[key] = val;
    return obj;
  }, {});
};
/**
 * Parse Link header fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */


exports.parseLinks = function (str) {
  return str.split(/ *, */).reduce(function (obj, str) {
    var parts = str.split(/ *; */);
    var url = parts[0].slice(1, -1);
    var rel = parts[1].split(/ *= */)[1].slice(1, -1);
    obj[rel] = url;
    return obj;
  }, {});
};
/**
 * Strip content related fields from `header`.
 *
 * @param {Object} header
 * @return {Object} header
 * @api private
 */


exports.cleanHeader = function (header, changesOrigin) {
  delete header['content-type'];
  delete header['content-length'];
  delete header['transfer-encoding'];
  delete header.host; // secuirty

  if (changesOrigin) {
    delete header.authorization;
    delete header.cookie;
  }

  return header;
};

/***/ }),

/***/ "../core-ui/core-ui/node_modules/xmlbuilder/lib/DocumentPosition.js":
/*!**************************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/xmlbuilder/lib/DocumentPosition.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Generated by CoffeeScript 2.4.1
(function () {
  module.exports = {
    Disconnected: 1,
    Preceding: 2,
    Following: 4,
    Contains: 8,
    ContainedBy: 16,
    ImplementationSpecific: 32
  };
}).call(void 0);

/***/ }),

/***/ "../core-ui/core-ui/node_modules/xmlbuilder/lib/NodeType.js":
/*!******************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/xmlbuilder/lib/NodeType.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Generated by CoffeeScript 2.4.1
(function () {
  module.exports = {
    Element: 1,
    Attribute: 2,
    Text: 3,
    CData: 4,
    EntityReference: 5,
    EntityDeclaration: 6,
    ProcessingInstruction: 7,
    Comment: 8,
    Document: 9,
    DocType: 10,
    DocumentFragment: 11,
    NotationDeclaration: 12,
    // Numeric codes up to 200 are reserved to W3C for possible future use.
    // Following are types internal to this library:
    Declaration: 201,
    Raw: 202,
    AttributeDeclaration: 203,
    ElementDeclaration: 204,
    Dummy: 205
  };
}).call(void 0);

/***/ }),

/***/ "../core-ui/core-ui/node_modules/xmlbuilder/lib/Utility.js":
/*!*****************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/xmlbuilder/lib/Utility.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Generated by CoffeeScript 2.4.1
(function () {
  // Copies all enumerable own properties from `sources` to `target`
  var assign,
      getValue,
      isArray,
      isEmpty,
      isFunction,
      isObject,
      isPlainObject,
      hasProp = {}.hasOwnProperty;

  assign = function assign(target) {
    for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    var i, key, len, source;

    if (isFunction(Object.assign)) {
      Object.assign.apply(null, arguments);
    } else {
      for (i = 0, len = sources.length; i < len; i++) {
        source = sources[i];

        if (source != null) {
          for (key in source) {
            if (!hasProp.call(source, key)) continue;
            target[key] = source[key];
          }
        }
      }
    }

    return target;
  }; // Determines if `val` is a Function object


  isFunction = function isFunction(val) {
    return !!val && Object.prototype.toString.call(val) === '[object Function]';
  }; // Determines if `val` is an Object


  isObject = function isObject(val) {
    var ref;
    return !!val && ((ref = _typeof(val)) === 'function' || ref === 'object');
  }; // Determines if `val` is an Array


  isArray = function isArray(val) {
    if (isFunction(Array.isArray)) {
      return Array.isArray(val);
    } else {
      return Object.prototype.toString.call(val) === '[object Array]';
    }
  }; // Determines if `val` is an empty Array or an Object with no own properties


  isEmpty = function isEmpty(val) {
    var key;

    if (isArray(val)) {
      return !val.length;
    } else {
      for (key in val) {
        if (!hasProp.call(val, key)) continue;
        return false;
      }

      return true;
    }
  }; // Determines if `val` is a plain Object


  isPlainObject = function isPlainObject(val) {
    var ctor, proto;
    return isObject(val) && (proto = Object.getPrototypeOf(val)) && (ctor = proto.constructor) && typeof ctor === 'function' && ctor instanceof ctor && Function.prototype.toString.call(ctor) === Function.prototype.toString.call(Object);
  }; // Gets the primitive value of an object


  getValue = function getValue(obj) {
    if (isFunction(obj.valueOf)) {
      return obj.valueOf();
    } else {
      return obj;
    }
  };

  module.exports.assign = assign;
  module.exports.isFunction = isFunction;
  module.exports.isObject = isObject;
  module.exports.isArray = isArray;
  module.exports.isEmpty = isEmpty;
  module.exports.isPlainObject = isPlainObject;
  module.exports.getValue = getValue;
}).call(void 0);

/***/ }),

/***/ "../core-ui/core-ui/node_modules/xmlbuilder/lib/WriterState.js":
/*!*********************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/xmlbuilder/lib/WriterState.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Generated by CoffeeScript 2.4.1
(function () {
  module.exports = {
    None: 0,
    OpenTag: 1,
    InsideTag: 2,
    CloseTag: 3
  };
}).call(void 0);

/***/ }),

/***/ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLAttribute.js":
/*!**********************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLAttribute.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Generated by CoffeeScript 2.4.1
(function () {
  var NodeType, XMLAttribute, XMLNode;
  NodeType = __webpack_require__(/*! ./NodeType */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/NodeType.js");
  XMLNode = __webpack_require__(/*! ./XMLNode */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLNode.js"); // Represents an attribute

  module.exports = XMLAttribute = function () {
    var XMLAttribute =
    /*#__PURE__*/
    function () {
      // Initializes a new instance of `XMLAttribute`
      // `parent` the parent node
      // `name` attribute target
      // `value` attribute value
      function XMLAttribute(parent, name, value) {
        _classCallCheck(this, XMLAttribute);

        this.parent = parent;

        if (this.parent) {
          this.options = this.parent.options;
          this.stringify = this.parent.stringify;
        }

        if (name == null) {
          throw new Error("Missing attribute name. " + this.debugInfo(name));
        }

        this.name = this.stringify.name(name);
        this.value = this.stringify.attValue(value);
        this.type = NodeType.Attribute; // DOM level 3

        this.isId = false;
        this.schemaTypeInfo = null;
      } // Creates and returns a deep clone of `this`


      _createClass(XMLAttribute, [{
        key: "clone",
        value: function clone() {
          return Object.create(this);
        } // Converts the XML fragment to string
        // `options.pretty` pretty prints the result
        // `options.indent` indentation for pretty print
        // `options.offset` how many indentations to add to every line for pretty print
        // `options.newline` newline sequence for pretty print

      }, {
        key: "toString",
        value: function toString(options) {
          return this.options.writer.attribute(this, this.options.writer.filterOptions(options));
        } // Returns debug string for this node

      }, {
        key: "debugInfo",
        value: function debugInfo(name) {
          name = name || this.name;

          if (name == null) {
            return "parent: <" + this.parent.name + ">";
          } else {
            return "attribute: {" + name + "}, parent: <" + this.parent.name + ">";
          }
        }
      }, {
        key: "isEqualNode",
        value: function isEqualNode(node) {
          if (node.namespaceURI !== this.namespaceURI) {
            return false;
          }

          if (node.prefix !== this.prefix) {
            return false;
          }

          if (node.localName !== this.localName) {
            return false;
          }

          if (node.value !== this.value) {
            return false;
          }

          return true;
        }
      }]);

      return XMLAttribute;
    }();

    ; // DOM level 1

    Object.defineProperty(XMLAttribute.prototype, 'nodeType', {
      get: function get() {
        return this.type;
      }
    });
    Object.defineProperty(XMLAttribute.prototype, 'ownerElement', {
      get: function get() {
        return this.parent;
      }
    }); // DOM level 3

    Object.defineProperty(XMLAttribute.prototype, 'textContent', {
      get: function get() {
        return this.value;
      },
      set: function set(value) {
        return this.value = value || '';
      }
    }); // DOM level 4

    Object.defineProperty(XMLAttribute.prototype, 'namespaceURI', {
      get: function get() {
        return '';
      }
    });
    Object.defineProperty(XMLAttribute.prototype, 'prefix', {
      get: function get() {
        return '';
      }
    });
    Object.defineProperty(XMLAttribute.prototype, 'localName', {
      get: function get() {
        return this.name;
      }
    });
    Object.defineProperty(XMLAttribute.prototype, 'specified', {
      get: function get() {
        return true;
      }
    });
    return XMLAttribute;
  }.call(this);
}).call(void 0);

/***/ }),

/***/ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLCData.js":
/*!******************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLCData.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Generated by CoffeeScript 2.4.1
(function () {
  var NodeType, XMLCData, XMLCharacterData;
  NodeType = __webpack_require__(/*! ./NodeType */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/NodeType.js");
  XMLCharacterData = __webpack_require__(/*! ./XMLCharacterData */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLCharacterData.js"); // Represents a  CDATA node

  module.exports = XMLCData =
  /*#__PURE__*/
  function (_XMLCharacterData) {
    _inherits(XMLCData, _XMLCharacterData);

    // Initializes a new instance of `XMLCData`
    // `text` CDATA text
    function XMLCData(parent, text) {
      var _this;

      _classCallCheck(this, XMLCData);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(XMLCData).call(this, parent));

      if (text == null) {
        throw new Error("Missing CDATA text. " + _this.debugInfo());
      }

      _this.name = "#cdata-section";
      _this.type = NodeType.CData;
      _this.value = _this.stringify.cdata(text);
      return _this;
    } // Creates and returns a deep clone of `this`


    _createClass(XMLCData, [{
      key: "clone",
      value: function clone() {
        return Object.create(this);
      } // Converts the XML fragment to string
      // `options.pretty` pretty prints the result
      // `options.indent` indentation for pretty print
      // `options.offset` how many indentations to add to every line for pretty print
      // `options.newline` newline sequence for pretty print

    }, {
      key: "toString",
      value: function toString(options) {
        return this.options.writer.cdata(this, this.options.writer.filterOptions(options));
      }
    }]);

    return XMLCData;
  }(XMLCharacterData);
}).call(void 0);

/***/ }),

/***/ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLCharacterData.js":
/*!**************************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLCharacterData.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Generated by CoffeeScript 2.4.1
(function () {
  var XMLCharacterData, XMLNode;
  XMLNode = __webpack_require__(/*! ./XMLNode */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLNode.js"); // Represents a character data node

  module.exports = XMLCharacterData = function () {
    var XMLCharacterData =
    /*#__PURE__*/
    function (_XMLNode) {
      _inherits(XMLCharacterData, _XMLNode);

      // Initializes a new instance of `XMLCharacterData`
      function XMLCharacterData(parent) {
        var _this;

        _classCallCheck(this, XMLCharacterData);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(XMLCharacterData).call(this, parent));
        _this.value = '';
        return _this;
      } // Creates and returns a deep clone of `this`


      _createClass(XMLCharacterData, [{
        key: "clone",
        value: function clone() {
          return Object.create(this);
        } // DOM level 1 functions to be implemented later

      }, {
        key: "substringData",
        value: function substringData(offset, count) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "appendData",
        value: function appendData(arg) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "insertData",
        value: function insertData(offset, arg) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "deleteData",
        value: function deleteData(offset, count) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "replaceData",
        value: function replaceData(offset, count, arg) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "isEqualNode",
        value: function isEqualNode(node) {
          if (!_get(_getPrototypeOf(XMLCharacterData.prototype), "isEqualNode", this).call(this, node)) {
            return false;
          }

          if (node.data !== this.data) {
            return false;
          }

          return true;
        }
      }]);

      return XMLCharacterData;
    }(XMLNode);

    ; // DOM level 1

    Object.defineProperty(XMLCharacterData.prototype, 'data', {
      get: function get() {
        return this.value;
      },
      set: function set(value) {
        return this.value = value || '';
      }
    });
    Object.defineProperty(XMLCharacterData.prototype, 'length', {
      get: function get() {
        return this.value.length;
      }
    }); // DOM level 3

    Object.defineProperty(XMLCharacterData.prototype, 'textContent', {
      get: function get() {
        return this.value;
      },
      set: function set(value) {
        return this.value = value || '';
      }
    });
    return XMLCharacterData;
  }.call(this);
}).call(void 0);

/***/ }),

/***/ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLComment.js":
/*!********************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLComment.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Generated by CoffeeScript 2.4.1
(function () {
  var NodeType, XMLCharacterData, XMLComment;
  NodeType = __webpack_require__(/*! ./NodeType */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/NodeType.js");
  XMLCharacterData = __webpack_require__(/*! ./XMLCharacterData */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLCharacterData.js"); // Represents a comment node

  module.exports = XMLComment =
  /*#__PURE__*/
  function (_XMLCharacterData) {
    _inherits(XMLComment, _XMLCharacterData);

    // Initializes a new instance of `XMLComment`
    // `text` comment text
    function XMLComment(parent, text) {
      var _this;

      _classCallCheck(this, XMLComment);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(XMLComment).call(this, parent));

      if (text == null) {
        throw new Error("Missing comment text. " + _this.debugInfo());
      }

      _this.name = "#comment";
      _this.type = NodeType.Comment;
      _this.value = _this.stringify.comment(text);
      return _this;
    } // Creates and returns a deep clone of `this`


    _createClass(XMLComment, [{
      key: "clone",
      value: function clone() {
        return Object.create(this);
      } // Converts the XML fragment to string
      // `options.pretty` pretty prints the result
      // `options.indent` indentation for pretty print
      // `options.offset` how many indentations to add to every line for pretty print
      // `options.newline` newline sequence for pretty print

    }, {
      key: "toString",
      value: function toString(options) {
        return this.options.writer.comment(this, this.options.writer.filterOptions(options));
      }
    }]);

    return XMLComment;
  }(XMLCharacterData);
}).call(void 0);

/***/ }),

/***/ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDOMConfiguration.js":
/*!*****************************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDOMConfiguration.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Generated by CoffeeScript 2.4.1
(function () {
  var XMLDOMConfiguration, XMLDOMErrorHandler, XMLDOMStringList;
  XMLDOMErrorHandler = __webpack_require__(/*! ./XMLDOMErrorHandler */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDOMErrorHandler.js");
  XMLDOMStringList = __webpack_require__(/*! ./XMLDOMStringList */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDOMStringList.js"); // Implements the DOMConfiguration interface

  module.exports = XMLDOMConfiguration = function () {
    var XMLDOMConfiguration =
    /*#__PURE__*/
    function () {
      function XMLDOMConfiguration() {
        _classCallCheck(this, XMLDOMConfiguration);

        var clonedSelf;
        this.defaultParams = {
          "canonical-form": false,
          "cdata-sections": false,
          "comments": false,
          "datatype-normalization": false,
          "element-content-whitespace": true,
          "entities": true,
          "error-handler": new XMLDOMErrorHandler(),
          "infoset": true,
          "validate-if-schema": false,
          "namespaces": true,
          "namespace-declarations": true,
          "normalize-characters": false,
          "schema-location": '',
          "schema-type": '',
          "split-cdata-sections": true,
          "validate": false,
          "well-formed": true
        };
        this.params = clonedSelf = Object.create(this.defaultParams);
      } // Gets the value of a parameter.
      // `name` name of the parameter


      _createClass(XMLDOMConfiguration, [{
        key: "getParameter",
        value: function getParameter(name) {
          if (this.params.hasOwnProperty(name)) {
            return this.params[name];
          } else {
            return null;
          }
        } // Checks if setting a parameter to a specific value is supported.
        // `name` name of the parameter
        // `value` parameter value

      }, {
        key: "canSetParameter",
        value: function canSetParameter(name, value) {
          return true;
        } // Sets the value of a parameter.
        // `name` name of the parameter
        // `value` new value or null if the user wishes to unset the parameter

      }, {
        key: "setParameter",
        value: function setParameter(name, value) {
          if (value != null) {
            return this.params[name] = value;
          } else {
            return delete this.params[name];
          }
        }
      }]);

      return XMLDOMConfiguration;
    }();

    ; // Returns the list of parameter names

    Object.defineProperty(XMLDOMConfiguration.prototype, 'parameterNames', {
      get: function get() {
        return new XMLDOMStringList(Object.keys(this.defaultParams));
      }
    });
    return XMLDOMConfiguration;
  }.call(this);
}).call(void 0);

/***/ }),

/***/ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDOMErrorHandler.js":
/*!****************************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDOMErrorHandler.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Generated by CoffeeScript 2.4.1
(function () {
  // Represents the error handler for DOM operations
  var XMLDOMErrorHandler;

  module.exports = XMLDOMErrorHandler =
  /*#__PURE__*/
  function () {
    // Initializes a new instance of `XMLDOMErrorHandler`
    function XMLDOMErrorHandler() {
      _classCallCheck(this, XMLDOMErrorHandler);
    } // Called on the error handler when an error occurs.
    // `error` the error message as a string


    _createClass(XMLDOMErrorHandler, [{
      key: "handleError",
      value: function handleError(error) {
        throw new Error(error);
      }
    }]);

    return XMLDOMErrorHandler;
  }();
}).call(void 0);

/***/ }),

/***/ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDOMImplementation.js":
/*!******************************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDOMImplementation.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Generated by CoffeeScript 2.4.1
(function () {
  // Implements the DOMImplementation interface
  var XMLDOMImplementation;

  module.exports = XMLDOMImplementation =
  /*#__PURE__*/
  function () {
    function XMLDOMImplementation() {
      _classCallCheck(this, XMLDOMImplementation);
    }

    _createClass(XMLDOMImplementation, [{
      key: "hasFeature",
      // Tests if the DOM implementation implements a specific feature.
      // `feature` package name of the feature to test. In Level 1, the
      //           legal values are "HTML" and "XML" (case-insensitive).
      // `version` version number of the package name to test. 
      //           In Level 1, this is the string "1.0". If the version is 
      //           not specified, supporting any version of the feature will 
      //           cause the method to return true.
      value: function hasFeature(feature, version) {
        return true;
      } // Creates a new document type declaration.
      // `qualifiedName` qualified name of the document type to be created
      // `publicId` public identifier of the external subset
      // `systemId` system identifier of the external subset

    }, {
      key: "createDocumentType",
      value: function createDocumentType(qualifiedName, publicId, systemId) {
        throw new Error("This DOM method is not implemented.");
      } // Creates a new document.
      // `namespaceURI` namespace URI of the document element to create
      // `qualifiedName` the qualified name of the document to be created
      // `doctype` the type of document to be created or null

    }, {
      key: "createDocument",
      value: function createDocument(namespaceURI, qualifiedName, doctype) {
        throw new Error("This DOM method is not implemented.");
      } // Creates a new HTML document.
      // `title` document title

    }, {
      key: "createHTMLDocument",
      value: function createHTMLDocument(title) {
        throw new Error("This DOM method is not implemented.");
      } // Returns a specialized object which implements the specialized APIs 
      // of the specified feature and version.
      // `feature` name of the feature requested.
      // `version` version number of the feature to test

    }, {
      key: "getFeature",
      value: function getFeature(feature, version) {
        throw new Error("This DOM method is not implemented.");
      }
    }]);

    return XMLDOMImplementation;
  }();
}).call(void 0);

/***/ }),

/***/ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDOMStringList.js":
/*!**************************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDOMStringList.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Generated by CoffeeScript 2.4.1
(function () {
  // Represents a list of string entries
  var XMLDOMStringList;

  module.exports = XMLDOMStringList = function () {
    var XMLDOMStringList =
    /*#__PURE__*/
    function () {
      // Initializes a new instance of `XMLDOMStringList`
      // This is just a wrapper around an ordinary
      // JS array.
      // `arr` the array of string values
      function XMLDOMStringList(arr) {
        _classCallCheck(this, XMLDOMStringList);

        this.arr = arr || [];
      } // Returns the indexth item in the collection.
      // `index` index into the collection


      _createClass(XMLDOMStringList, [{
        key: "item",
        value: function item(index) {
          return this.arr[index] || null;
        } // Test if a string is part of this DOMStringList.
        // `str` the string to look for

      }, {
        key: "contains",
        value: function contains(str) {
          return this.arr.indexOf(str) !== -1;
        }
      }]);

      return XMLDOMStringList;
    }();

    ; // Returns the number of strings in the list.

    Object.defineProperty(XMLDOMStringList.prototype, 'length', {
      get: function get() {
        return this.arr.length;
      }
    });
    return XMLDOMStringList;
  }.call(this);
}).call(void 0);

/***/ }),

/***/ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDTDAttList.js":
/*!***********************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDTDAttList.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Generated by CoffeeScript 2.4.1
(function () {
  var NodeType, XMLDTDAttList, XMLNode;
  XMLNode = __webpack_require__(/*! ./XMLNode */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLNode.js");
  NodeType = __webpack_require__(/*! ./NodeType */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/NodeType.js"); // Represents an attribute list

  module.exports = XMLDTDAttList =
  /*#__PURE__*/
  function (_XMLNode) {
    _inherits(XMLDTDAttList, _XMLNode);

    // Initializes a new instance of `XMLDTDAttList`
    // `parent` the parent `XMLDocType` element
    // `elementName` the name of the element containing this attribute
    // `attributeName` attribute name
    // `attributeType` type of the attribute
    // `defaultValueType` default value type (either #REQUIRED, #IMPLIED,
    //                    #FIXED or #DEFAULT)
    // `defaultValue` default value of the attribute
    //                (only used for #FIXED or #DEFAULT)
    function XMLDTDAttList(parent, elementName, attributeName, attributeType, defaultValueType, defaultValue) {
      var _this;

      _classCallCheck(this, XMLDTDAttList);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(XMLDTDAttList).call(this, parent));

      if (elementName == null) {
        throw new Error("Missing DTD element name. " + _this.debugInfo());
      }

      if (attributeName == null) {
        throw new Error("Missing DTD attribute name. " + _this.debugInfo(elementName));
      }

      if (!attributeType) {
        throw new Error("Missing DTD attribute type. " + _this.debugInfo(elementName));
      }

      if (!defaultValueType) {
        throw new Error("Missing DTD attribute default. " + _this.debugInfo(elementName));
      }

      if (defaultValueType.indexOf('#') !== 0) {
        defaultValueType = '#' + defaultValueType;
      }

      if (!defaultValueType.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)) {
        throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. " + _this.debugInfo(elementName));
      }

      if (defaultValue && !defaultValueType.match(/^(#FIXED|#DEFAULT)$/)) {
        throw new Error("Default value only applies to #FIXED or #DEFAULT. " + _this.debugInfo(elementName));
      }

      _this.elementName = _this.stringify.name(elementName);
      _this.type = NodeType.AttributeDeclaration;
      _this.attributeName = _this.stringify.name(attributeName);
      _this.attributeType = _this.stringify.dtdAttType(attributeType);

      if (defaultValue) {
        _this.defaultValue = _this.stringify.dtdAttDefault(defaultValue);
      }

      _this.defaultValueType = defaultValueType;
      return _this;
    } // Converts the XML fragment to string
    // `options.pretty` pretty prints the result
    // `options.indent` indentation for pretty print
    // `options.offset` how many indentations to add to every line for pretty print
    // `options.newline` newline sequence for pretty print


    _createClass(XMLDTDAttList, [{
      key: "toString",
      value: function toString(options) {
        return this.options.writer.dtdAttList(this, this.options.writer.filterOptions(options));
      }
    }]);

    return XMLDTDAttList;
  }(XMLNode);
}).call(void 0);

/***/ }),

/***/ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDTDElement.js":
/*!***********************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDTDElement.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Generated by CoffeeScript 2.4.1
(function () {
  var NodeType, XMLDTDElement, XMLNode;
  XMLNode = __webpack_require__(/*! ./XMLNode */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLNode.js");
  NodeType = __webpack_require__(/*! ./NodeType */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/NodeType.js"); // Represents an attribute

  module.exports = XMLDTDElement =
  /*#__PURE__*/
  function (_XMLNode) {
    _inherits(XMLDTDElement, _XMLNode);

    // Initializes a new instance of `XMLDTDElement`
    // `parent` the parent `XMLDocType` element
    // `name` element name
    // `value` element content (defaults to #PCDATA)
    function XMLDTDElement(parent, name, value) {
      var _this;

      _classCallCheck(this, XMLDTDElement);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(XMLDTDElement).call(this, parent));

      if (name == null) {
        throw new Error("Missing DTD element name. " + _this.debugInfo());
      }

      if (!value) {
        value = '(#PCDATA)';
      }

      if (Array.isArray(value)) {
        value = '(' + value.join(',') + ')';
      }

      _this.name = _this.stringify.name(name);
      _this.type = NodeType.ElementDeclaration;
      _this.value = _this.stringify.dtdElementValue(value);
      return _this;
    } // Converts the XML fragment to string
    // `options.pretty` pretty prints the result
    // `options.indent` indentation for pretty print
    // `options.offset` how many indentations to add to every line for pretty print
    // `options.newline` newline sequence for pretty print


    _createClass(XMLDTDElement, [{
      key: "toString",
      value: function toString(options) {
        return this.options.writer.dtdElement(this, this.options.writer.filterOptions(options));
      }
    }]);

    return XMLDTDElement;
  }(XMLNode);
}).call(void 0);

/***/ }),

/***/ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDTDEntity.js":
/*!**********************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDTDEntity.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Generated by CoffeeScript 2.4.1
(function () {
  var NodeType, XMLDTDEntity, XMLNode, isObject;

  var _require = __webpack_require__(/*! ./Utility */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/Utility.js");

  isObject = _require.isObject;
  XMLNode = __webpack_require__(/*! ./XMLNode */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLNode.js");
  NodeType = __webpack_require__(/*! ./NodeType */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/NodeType.js"); // Represents an entity declaration in the DTD

  module.exports = XMLDTDEntity = function () {
    var XMLDTDEntity =
    /*#__PURE__*/
    function (_XMLNode) {
      _inherits(XMLDTDEntity, _XMLNode);

      // Initializes a new instance of `XMLDTDEntity`
      // `parent` the parent `XMLDocType` element
      // `pe` whether this is a parameter entity or a general entity
      //      defaults to `false` (general entity)
      // `name` the name of the entity
      // `value` internal entity value or an object with external entity details
      // `value.pubID` public identifier
      // `value.sysID` system identifier
      // `value.nData` notation declaration
      function XMLDTDEntity(parent, pe, name, value) {
        var _this;

        _classCallCheck(this, XMLDTDEntity);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(XMLDTDEntity).call(this, parent));

        if (name == null) {
          throw new Error("Missing DTD entity name. " + _this.debugInfo(name));
        }

        if (value == null) {
          throw new Error("Missing DTD entity value. " + _this.debugInfo(name));
        }

        _this.pe = !!pe;
        _this.name = _this.stringify.name(name);
        _this.type = NodeType.EntityDeclaration;

        if (!isObject(value)) {
          _this.value = _this.stringify.dtdEntityValue(value);
          _this.internal = true;
        } else {
          if (!value.pubID && !value.sysID) {
            throw new Error("Public and/or system identifiers are required for an external entity. " + _this.debugInfo(name));
          }

          if (value.pubID && !value.sysID) {
            throw new Error("System identifier is required for a public external entity. " + _this.debugInfo(name));
          }

          _this.internal = false;

          if (value.pubID != null) {
            _this.pubID = _this.stringify.dtdPubID(value.pubID);
          }

          if (value.sysID != null) {
            _this.sysID = _this.stringify.dtdSysID(value.sysID);
          }

          if (value.nData != null) {
            _this.nData = _this.stringify.dtdNData(value.nData);
          }

          if (_this.pe && _this.nData) {
            throw new Error("Notation declaration is not allowed in a parameter entity. " + _this.debugInfo(name));
          }
        }

        return _this;
      } // Converts the XML fragment to string
      // `options.pretty` pretty prints the result
      // `options.indent` indentation for pretty print
      // `options.offset` how many indentations to add to every line for pretty print
      // `options.newline` newline sequence for pretty print


      _createClass(XMLDTDEntity, [{
        key: "toString",
        value: function toString(options) {
          return this.options.writer.dtdEntity(this, this.options.writer.filterOptions(options));
        }
      }]);

      return XMLDTDEntity;
    }(XMLNode);

    ; // DOM level 1

    Object.defineProperty(XMLDTDEntity.prototype, 'publicId', {
      get: function get() {
        return this.pubID;
      }
    });
    Object.defineProperty(XMLDTDEntity.prototype, 'systemId', {
      get: function get() {
        return this.sysID;
      }
    });
    Object.defineProperty(XMLDTDEntity.prototype, 'notationName', {
      get: function get() {
        return this.nData || null;
      }
    }); // DOM level 3

    Object.defineProperty(XMLDTDEntity.prototype, 'inputEncoding', {
      get: function get() {
        return null;
      }
    });
    Object.defineProperty(XMLDTDEntity.prototype, 'xmlEncoding', {
      get: function get() {
        return null;
      }
    });
    Object.defineProperty(XMLDTDEntity.prototype, 'xmlVersion', {
      get: function get() {
        return null;
      }
    });
    return XMLDTDEntity;
  }.call(this);
}).call(void 0);

/***/ }),

/***/ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDTDNotation.js":
/*!************************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDTDNotation.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Generated by CoffeeScript 2.4.1
(function () {
  var NodeType, XMLDTDNotation, XMLNode;
  XMLNode = __webpack_require__(/*! ./XMLNode */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLNode.js");
  NodeType = __webpack_require__(/*! ./NodeType */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/NodeType.js"); // Represents a NOTATION entry in the DTD

  module.exports = XMLDTDNotation = function () {
    var XMLDTDNotation =
    /*#__PURE__*/
    function (_XMLNode) {
      _inherits(XMLDTDNotation, _XMLNode);

      // Initializes a new instance of `XMLDTDNotation`
      // `parent` the parent `XMLDocType` element
      // `name` the name of the notation
      // `value` an object with external entity details
      // `value.pubID` public identifier
      // `value.sysID` system identifier
      function XMLDTDNotation(parent, name, value) {
        var _this;

        _classCallCheck(this, XMLDTDNotation);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(XMLDTDNotation).call(this, parent));

        if (name == null) {
          throw new Error("Missing DTD notation name. " + _this.debugInfo(name));
        }

        if (!value.pubID && !value.sysID) {
          throw new Error("Public or system identifiers are required for an external entity. " + _this.debugInfo(name));
        }

        _this.name = _this.stringify.name(name);
        _this.type = NodeType.NotationDeclaration;

        if (value.pubID != null) {
          _this.pubID = _this.stringify.dtdPubID(value.pubID);
        }

        if (value.sysID != null) {
          _this.sysID = _this.stringify.dtdSysID(value.sysID);
        }

        return _this;
      } // Converts the XML fragment to string
      // `options.pretty` pretty prints the result
      // `options.indent` indentation for pretty print
      // `options.offset` how many indentations to add to every line for pretty print
      // `options.newline` newline sequence for pretty print


      _createClass(XMLDTDNotation, [{
        key: "toString",
        value: function toString(options) {
          return this.options.writer.dtdNotation(this, this.options.writer.filterOptions(options));
        }
      }]);

      return XMLDTDNotation;
    }(XMLNode);

    ; // DOM level 1

    Object.defineProperty(XMLDTDNotation.prototype, 'publicId', {
      get: function get() {
        return this.pubID;
      }
    });
    Object.defineProperty(XMLDTDNotation.prototype, 'systemId', {
      get: function get() {
        return this.sysID;
      }
    });
    return XMLDTDNotation;
  }.call(this);
}).call(void 0);

/***/ }),

/***/ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDeclaration.js":
/*!************************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDeclaration.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Generated by CoffeeScript 2.4.1
(function () {
  var NodeType, XMLDeclaration, XMLNode, isObject;

  var _require = __webpack_require__(/*! ./Utility */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/Utility.js");

  isObject = _require.isObject;
  XMLNode = __webpack_require__(/*! ./XMLNode */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLNode.js");
  NodeType = __webpack_require__(/*! ./NodeType */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/NodeType.js"); // Represents the XML declaration

  module.exports = XMLDeclaration =
  /*#__PURE__*/
  function (_XMLNode) {
    _inherits(XMLDeclaration, _XMLNode);

    // Initializes a new instance of `XMLDeclaration`
    // `parent` the document object
    // `version` A version number string, e.g. 1.0
    // `encoding` Encoding declaration, e.g. UTF-8
    // `standalone` standalone document declaration: true or false
    function XMLDeclaration(parent, version, encoding, standalone) {
      var _this;

      _classCallCheck(this, XMLDeclaration);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(XMLDeclaration).call(this, parent)); // arguments may also be passed as an object

      if (isObject(version)) {
        var _version = version;
        version = _version.version;
        encoding = _version.encoding;
        standalone = _version.standalone;
      }

      if (!version) {
        version = '1.0';
      }

      _this.type = NodeType.Declaration;
      _this.version = _this.stringify.xmlVersion(version);

      if (encoding != null) {
        _this.encoding = _this.stringify.xmlEncoding(encoding);
      }

      if (standalone != null) {
        _this.standalone = _this.stringify.xmlStandalone(standalone);
      }

      return _this;
    } // Converts to string
    // `options.pretty` pretty prints the result
    // `options.indent` indentation for pretty print
    // `options.offset` how many indentations to add to every line for pretty print
    // `options.newline` newline sequence for pretty print


    _createClass(XMLDeclaration, [{
      key: "toString",
      value: function toString(options) {
        return this.options.writer.declaration(this, this.options.writer.filterOptions(options));
      }
    }]);

    return XMLDeclaration;
  }(XMLNode);
}).call(void 0);

/***/ }),

/***/ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDocType.js":
/*!********************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDocType.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Generated by CoffeeScript 2.4.1
(function () {
  var NodeType, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDocType, XMLNamedNodeMap, XMLNode, isObject;

  var _require = __webpack_require__(/*! ./Utility */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/Utility.js");

  isObject = _require.isObject;
  XMLNode = __webpack_require__(/*! ./XMLNode */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLNode.js");
  NodeType = __webpack_require__(/*! ./NodeType */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/NodeType.js");
  XMLDTDAttList = __webpack_require__(/*! ./XMLDTDAttList */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDTDAttList.js");
  XMLDTDEntity = __webpack_require__(/*! ./XMLDTDEntity */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDTDEntity.js");
  XMLDTDElement = __webpack_require__(/*! ./XMLDTDElement */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDTDElement.js");
  XMLDTDNotation = __webpack_require__(/*! ./XMLDTDNotation */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDTDNotation.js");
  XMLNamedNodeMap = __webpack_require__(/*! ./XMLNamedNodeMap */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLNamedNodeMap.js"); // Represents doctype declaration

  module.exports = XMLDocType = function () {
    var XMLDocType =
    /*#__PURE__*/
    function (_XMLNode) {
      _inherits(XMLDocType, _XMLNode);

      // Initializes a new instance of `XMLDocType`
      // `parent` the document object
      // `pubID` public identifier of the external subset
      // `sysID` system identifier of the external subset
      function XMLDocType(parent, pubID, sysID) {
        var _this;

        _classCallCheck(this, XMLDocType);

        var child, i, len, ref;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(XMLDocType).call(this, parent));
        _this.type = NodeType.DocType; // set DTD name to the name of the root node

        if (parent.children) {
          ref = parent.children;

          for (i = 0, len = ref.length; i < len; i++) {
            child = ref[i];

            if (child.type === NodeType.Element) {
              _this.name = child.name;
              break;
            }
          }
        }

        _this.documentObject = parent; // arguments may also be passed as an object

        if (isObject(pubID)) {
          var _pubID = pubID;
          pubID = _pubID.pubID;
          sysID = _pubID.sysID;
        }

        if (sysID == null) {
          var _ref = [pubID, sysID];
          sysID = _ref[0];
          pubID = _ref[1];
        }

        if (pubID != null) {
          _this.pubID = _this.stringify.dtdPubID(pubID);
        }

        if (sysID != null) {
          _this.sysID = _this.stringify.dtdSysID(sysID);
        }

        return _this;
      } // Creates an element type declaration
      // `name` element name
      // `value` element content (defaults to #PCDATA)


      _createClass(XMLDocType, [{
        key: "element",
        value: function element(name, value) {
          var child;
          child = new XMLDTDElement(this, name, value);
          this.children.push(child);
          return this;
        } // Creates an attribute declaration
        // `elementName` the name of the element containing this attribute
        // `attributeName` attribute name
        // `attributeType` type of the attribute (defaults to CDATA)
        // `defaultValueType` default value type (either #REQUIRED, #IMPLIED, #FIXED or
        //                    #DEFAULT) (defaults to #IMPLIED)
        // `defaultValue` default value of the attribute
        //                (only used for #FIXED or #DEFAULT)

      }, {
        key: "attList",
        value: function attList(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
          var child;
          child = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
          this.children.push(child);
          return this;
        } // Creates a general entity declaration
        // `name` the name of the entity
        // `value` internal entity value or an object with external entity details
        // `value.pubID` public identifier
        // `value.sysID` system identifier
        // `value.nData` notation declaration

      }, {
        key: "entity",
        value: function entity(name, value) {
          var child;
          child = new XMLDTDEntity(this, false, name, value);
          this.children.push(child);
          return this;
        } // Creates a parameter entity declaration
        // `name` the name of the entity
        // `value` internal entity value or an object with external entity details
        // `value.pubID` public identifier
        // `value.sysID` system identifier

      }, {
        key: "pEntity",
        value: function pEntity(name, value) {
          var child;
          child = new XMLDTDEntity(this, true, name, value);
          this.children.push(child);
          return this;
        } // Creates a NOTATION declaration
        // `name` the name of the notation
        // `value` an object with external entity details
        // `value.pubID` public identifier
        // `value.sysID` system identifier

      }, {
        key: "notation",
        value: function notation(name, value) {
          var child;
          child = new XMLDTDNotation(this, name, value);
          this.children.push(child);
          return this;
        } // Converts to string
        // `options.pretty` pretty prints the result
        // `options.indent` indentation for pretty print
        // `options.offset` how many indentations to add to every line for pretty print
        // `options.newline` newline sequence for pretty print

      }, {
        key: "toString",
        value: function toString(options) {
          return this.options.writer.docType(this, this.options.writer.filterOptions(options));
        } // Aliases

      }, {
        key: "ele",
        value: function ele(name, value) {
          return this.element(name, value);
        }
      }, {
        key: "att",
        value: function att(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
          return this.attList(elementName, attributeName, attributeType, defaultValueType, defaultValue);
        }
      }, {
        key: "ent",
        value: function ent(name, value) {
          return this.entity(name, value);
        }
      }, {
        key: "pent",
        value: function pent(name, value) {
          return this.pEntity(name, value);
        }
      }, {
        key: "not",
        value: function not(name, value) {
          return this.notation(name, value);
        }
      }, {
        key: "up",
        value: function up() {
          return this.root() || this.documentObject;
        }
      }, {
        key: "isEqualNode",
        value: function isEqualNode(node) {
          if (!_get(_getPrototypeOf(XMLDocType.prototype), "isEqualNode", this).call(this, node)) {
            return false;
          }

          if (node.name !== this.name) {
            return false;
          }

          if (node.publicId !== this.publicId) {
            return false;
          }

          if (node.systemId !== this.systemId) {
            return false;
          }

          return true;
        }
      }]);

      return XMLDocType;
    }(XMLNode);

    ; // DOM level 1

    Object.defineProperty(XMLDocType.prototype, 'entities', {
      get: function get() {
        var child, i, len, nodes, ref;
        nodes = {};
        ref = this.children;

        for (i = 0, len = ref.length; i < len; i++) {
          child = ref[i];

          if (child.type === NodeType.EntityDeclaration && !child.pe) {
            nodes[child.name] = child;
          }
        }

        return new XMLNamedNodeMap(nodes);
      }
    });
    Object.defineProperty(XMLDocType.prototype, 'notations', {
      get: function get() {
        var child, i, len, nodes, ref;
        nodes = {};
        ref = this.children;

        for (i = 0, len = ref.length; i < len; i++) {
          child = ref[i];

          if (child.type === NodeType.NotationDeclaration) {
            nodes[child.name] = child;
          }
        }

        return new XMLNamedNodeMap(nodes);
      }
    }); // DOM level 2

    Object.defineProperty(XMLDocType.prototype, 'publicId', {
      get: function get() {
        return this.pubID;
      }
    });
    Object.defineProperty(XMLDocType.prototype, 'systemId', {
      get: function get() {
        return this.sysID;
      }
    });
    Object.defineProperty(XMLDocType.prototype, 'internalSubset', {
      get: function get() {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }
    });
    return XMLDocType;
  }.call(this);
}).call(void 0);

/***/ }),

/***/ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDocument.js":
/*!*********************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDocument.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Generated by CoffeeScript 2.4.1
(function () {
  var NodeType, XMLDOMConfiguration, XMLDOMImplementation, XMLDocument, XMLNode, XMLStringWriter, XMLStringifier, isPlainObject;

  var _require = __webpack_require__(/*! ./Utility */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/Utility.js");

  isPlainObject = _require.isPlainObject;
  XMLDOMImplementation = __webpack_require__(/*! ./XMLDOMImplementation */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDOMImplementation.js");
  XMLDOMConfiguration = __webpack_require__(/*! ./XMLDOMConfiguration */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDOMConfiguration.js");
  XMLNode = __webpack_require__(/*! ./XMLNode */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLNode.js");
  NodeType = __webpack_require__(/*! ./NodeType */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/NodeType.js");
  XMLStringifier = __webpack_require__(/*! ./XMLStringifier */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLStringifier.js");
  XMLStringWriter = __webpack_require__(/*! ./XMLStringWriter */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLStringWriter.js"); // Represents an XML builder

  module.exports = XMLDocument = function () {
    var XMLDocument =
    /*#__PURE__*/
    function (_XMLNode) {
      _inherits(XMLDocument, _XMLNode);

      // Initializes a new instance of `XMLDocument`
      // `options.keepNullNodes` whether nodes with null values will be kept
      //     or ignored: true or false
      // `options.keepNullAttributes` whether attributes with null values will be
      //     kept or ignored: true or false
      // `options.ignoreDecorators` whether decorator strings will be ignored when
      //     converting JS objects: true or false
      // `options.separateArrayItems` whether array items are created as separate
      //     nodes when passed as an object value: true or false
      // `options.noDoubleEncoding` whether existing html entities are encoded:
      //     true or false
      // `options.stringify` a set of functions to use for converting values to
      //     strings
      // `options.writer` the default XML writer to use for converting nodes to
      //     string. If the default writer is not set, the built-in XMLStringWriter
      //     will be used instead.
      function XMLDocument(options) {
        var _this;

        _classCallCheck(this, XMLDocument);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(XMLDocument).call(this, null));
        _this.name = "#document";
        _this.type = NodeType.Document;
        _this.documentURI = null;
        _this.domConfig = new XMLDOMConfiguration();
        options || (options = {});

        if (!options.writer) {
          options.writer = new XMLStringWriter();
        }

        _this.options = options;
        _this.stringify = new XMLStringifier(options);
        return _this;
      } // Ends the document and passes it to the given XML writer
      // `writer` is either an XML writer or a plain object to pass to the
      // constructor of the default XML writer. The default writer is assigned when
      // creating the XML document. Following flags are recognized by the
      // built-in XMLStringWriter:
      //   `writer.pretty` pretty prints the result
      //   `writer.indent` indentation for pretty print
      //   `writer.offset` how many indentations to add to every line for pretty print
      //   `writer.newline` newline sequence for pretty print


      _createClass(XMLDocument, [{
        key: "end",
        value: function end(writer) {
          var writerOptions;
          writerOptions = {};

          if (!writer) {
            writer = this.options.writer;
          } else if (isPlainObject(writer)) {
            writerOptions = writer;
            writer = this.options.writer;
          }

          return writer.document(this, writer.filterOptions(writerOptions));
        } // Converts the XML document to string
        // `options.pretty` pretty prints the result
        // `options.indent` indentation for pretty print
        // `options.offset` how many indentations to add to every line for pretty print
        // `options.newline` newline sequence for pretty print

      }, {
        key: "toString",
        value: function toString(options) {
          return this.options.writer.document(this, this.options.writer.filterOptions(options));
        } // DOM level 1 functions to be implemented later

      }, {
        key: "createElement",
        value: function createElement(tagName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "createDocumentFragment",
        value: function createDocumentFragment() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "createTextNode",
        value: function createTextNode(data) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "createComment",
        value: function createComment(data) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "createCDATASection",
        value: function createCDATASection(data) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "createProcessingInstruction",
        value: function createProcessingInstruction(target, data) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "createAttribute",
        value: function createAttribute(name) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "createEntityReference",
        value: function createEntityReference(name) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "getElementsByTagName",
        value: function getElementsByTagName(tagname) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        } // DOM level 2 functions to be implemented later

      }, {
        key: "importNode",
        value: function importNode(importedNode, deep) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "createElementNS",
        value: function createElementNS(namespaceURI, qualifiedName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "createAttributeNS",
        value: function createAttributeNS(namespaceURI, qualifiedName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "getElementsByTagNameNS",
        value: function getElementsByTagNameNS(namespaceURI, localName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "getElementById",
        value: function getElementById(elementId) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        } // DOM level 3 functions to be implemented later

      }, {
        key: "adoptNode",
        value: function adoptNode(source) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "normalizeDocument",
        value: function normalizeDocument() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "renameNode",
        value: function renameNode(node, namespaceURI, qualifiedName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        } // DOM level 4 functions to be implemented later

      }, {
        key: "getElementsByClassName",
        value: function getElementsByClassName(classNames) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "createEvent",
        value: function createEvent(eventInterface) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "createRange",
        value: function createRange() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "createNodeIterator",
        value: function createNodeIterator(root, whatToShow, filter) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "createTreeWalker",
        value: function createTreeWalker(root, whatToShow, filter) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }]);

      return XMLDocument;
    }(XMLNode);

    ; // DOM level 1

    Object.defineProperty(XMLDocument.prototype, 'implementation', {
      value: new XMLDOMImplementation()
    });
    Object.defineProperty(XMLDocument.prototype, 'doctype', {
      get: function get() {
        var child, i, len, ref;
        ref = this.children;

        for (i = 0, len = ref.length; i < len; i++) {
          child = ref[i];

          if (child.type === NodeType.DocType) {
            return child;
          }
        }

        return null;
      }
    });
    Object.defineProperty(XMLDocument.prototype, 'documentElement', {
      get: function get() {
        return this.rootObject || null;
      }
    }); // DOM level 3

    Object.defineProperty(XMLDocument.prototype, 'inputEncoding', {
      get: function get() {
        return null;
      }
    });
    Object.defineProperty(XMLDocument.prototype, 'strictErrorChecking', {
      get: function get() {
        return false;
      }
    });
    Object.defineProperty(XMLDocument.prototype, 'xmlEncoding', {
      get: function get() {
        if (this.children.length !== 0 && this.children[0].type === NodeType.Declaration) {
          return this.children[0].encoding;
        } else {
          return null;
        }
      }
    });
    Object.defineProperty(XMLDocument.prototype, 'xmlStandalone', {
      get: function get() {
        if (this.children.length !== 0 && this.children[0].type === NodeType.Declaration) {
          return this.children[0].standalone === 'yes';
        } else {
          return false;
        }
      }
    });
    Object.defineProperty(XMLDocument.prototype, 'xmlVersion', {
      get: function get() {
        if (this.children.length !== 0 && this.children[0].type === NodeType.Declaration) {
          return this.children[0].version;
        } else {
          return "1.0";
        }
      }
    }); // DOM level 4

    Object.defineProperty(XMLDocument.prototype, 'URL', {
      get: function get() {
        return this.documentURI;
      }
    });
    Object.defineProperty(XMLDocument.prototype, 'origin', {
      get: function get() {
        return null;
      }
    });
    Object.defineProperty(XMLDocument.prototype, 'compatMode', {
      get: function get() {
        return null;
      }
    });
    Object.defineProperty(XMLDocument.prototype, 'characterSet', {
      get: function get() {
        return null;
      }
    });
    Object.defineProperty(XMLDocument.prototype, 'contentType', {
      get: function get() {
        return null;
      }
    });
    return XMLDocument;
  }.call(this);
}).call(void 0);

/***/ }),

/***/ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDocumentCB.js":
/*!***********************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDocumentCB.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Generated by CoffeeScript 2.4.1
(function () {
  var NodeType,
      WriterState,
      XMLAttribute,
      XMLCData,
      XMLComment,
      XMLDTDAttList,
      XMLDTDElement,
      XMLDTDEntity,
      XMLDTDNotation,
      XMLDeclaration,
      XMLDocType,
      XMLDocument,
      XMLDocumentCB,
      XMLElement,
      XMLProcessingInstruction,
      XMLRaw,
      XMLStringWriter,
      XMLStringifier,
      XMLText,
      getValue,
      isFunction,
      isObject,
      isPlainObject,
      hasProp = {}.hasOwnProperty;

  var _require = __webpack_require__(/*! ./Utility */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/Utility.js");

  isObject = _require.isObject;
  isFunction = _require.isFunction;
  isPlainObject = _require.isPlainObject;
  getValue = _require.getValue;
  NodeType = __webpack_require__(/*! ./NodeType */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/NodeType.js");
  XMLDocument = __webpack_require__(/*! ./XMLDocument */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDocument.js");
  XMLElement = __webpack_require__(/*! ./XMLElement */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLElement.js");
  XMLCData = __webpack_require__(/*! ./XMLCData */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLCData.js");
  XMLComment = __webpack_require__(/*! ./XMLComment */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLComment.js");
  XMLRaw = __webpack_require__(/*! ./XMLRaw */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLRaw.js");
  XMLText = __webpack_require__(/*! ./XMLText */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLText.js");
  XMLProcessingInstruction = __webpack_require__(/*! ./XMLProcessingInstruction */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLProcessingInstruction.js");
  XMLDeclaration = __webpack_require__(/*! ./XMLDeclaration */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDeclaration.js");
  XMLDocType = __webpack_require__(/*! ./XMLDocType */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDocType.js");
  XMLDTDAttList = __webpack_require__(/*! ./XMLDTDAttList */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDTDAttList.js");
  XMLDTDEntity = __webpack_require__(/*! ./XMLDTDEntity */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDTDEntity.js");
  XMLDTDElement = __webpack_require__(/*! ./XMLDTDElement */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDTDElement.js");
  XMLDTDNotation = __webpack_require__(/*! ./XMLDTDNotation */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDTDNotation.js");
  XMLAttribute = __webpack_require__(/*! ./XMLAttribute */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLAttribute.js");
  XMLStringifier = __webpack_require__(/*! ./XMLStringifier */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLStringifier.js");
  XMLStringWriter = __webpack_require__(/*! ./XMLStringWriter */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLStringWriter.js");
  WriterState = __webpack_require__(/*! ./WriterState */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/WriterState.js"); // Represents an XML builder

  module.exports = XMLDocumentCB =
  /*#__PURE__*/
  function () {
    // Initializes a new instance of `XMLDocumentCB`
    // `options.keepNullNodes` whether nodes with null values will be kept
    //     or ignored: true or false
    // `options.keepNullAttributes` whether attributes with null values will be
    //     kept or ignored: true or false
    // `options.ignoreDecorators` whether decorator strings will be ignored when
    //     converting JS objects: true or false
    // `options.separateArrayItems` whether array items are created as separate
    //     nodes when passed as an object value: true or false
    // `options.noDoubleEncoding` whether existing html entities are encoded:
    //     true or false
    // `options.stringify` a set of functions to use for converting values to
    //     strings
    // `options.writer` the default XML writer to use for converting nodes to
    //     string. If the default writer is not set, the built-in XMLStringWriter
    //     will be used instead.
    // `onData` the function to be called when a new chunk of XML is output. The
    //          string containing the XML chunk is passed to `onData` as its first
    //          argument, and the current indentation level as its second argument.
    // `onEnd`  the function to be called when the XML document is completed with
    //          `end`. `onEnd` does not receive any arguments.
    function XMLDocumentCB(options, onData, onEnd) {
      _classCallCheck(this, XMLDocumentCB);

      var writerOptions;
      this.name = "?xml";
      this.type = NodeType.Document;
      options || (options = {});
      writerOptions = {};

      if (!options.writer) {
        options.writer = new XMLStringWriter();
      } else if (isPlainObject(options.writer)) {
        writerOptions = options.writer;
        options.writer = new XMLStringWriter();
      }

      this.options = options;
      this.writer = options.writer;
      this.writerOptions = this.writer.filterOptions(writerOptions);
      this.stringify = new XMLStringifier(options);

      this.onDataCallback = onData || function () {};

      this.onEndCallback = onEnd || function () {};

      this.currentNode = null;
      this.currentLevel = -1;
      this.openTags = {};
      this.documentStarted = false;
      this.documentCompleted = false;
      this.root = null;
    } // Creates a child element node from the given XMLNode
    // `node` the child node


    _createClass(XMLDocumentCB, [{
      key: "createChildNode",
      value: function createChildNode(node) {
        var att, attName, attributes, child, i, len, ref, ref1;

        switch (node.type) {
          case NodeType.CData:
            this.cdata(node.value);
            break;

          case NodeType.Comment:
            this.comment(node.value);
            break;

          case NodeType.Element:
            attributes = {};
            ref = node.attribs;

            for (attName in ref) {
              if (!hasProp.call(ref, attName)) continue;
              att = ref[attName];
              attributes[attName] = att.value;
            }

            this.node(node.name, attributes);
            break;

          case NodeType.Dummy:
            this.dummy();
            break;

          case NodeType.Raw:
            this.raw(node.value);
            break;

          case NodeType.Text:
            this.text(node.value);
            break;

          case NodeType.ProcessingInstruction:
            this.instruction(node.target, node.value);
            break;

          default:
            throw new Error("This XML node type is not supported in a JS object: " + node.constructor.name);
        }

        ref1 = node.children; // write child nodes recursively

        for (i = 0, len = ref1.length; i < len; i++) {
          child = ref1[i];
          this.createChildNode(child);

          if (child.type === NodeType.Element) {
            this.up();
          }
        }

        return this;
      } // Creates a dummy node

    }, {
      key: "dummy",
      value: function dummy() {
        // no-op, just return this
        return this;
      } // Creates a node
      // `name` name of the node
      // `attributes` an object containing name/value pairs of attributes
      // `text` element text

    }, {
      key: "node",
      value: function node(name, attributes, text) {
        if (name == null) {
          throw new Error("Missing node name.");
        }

        if (this.root && this.currentLevel === -1) {
          throw new Error("Document can only have one root node. " + this.debugInfo(name));
        }

        this.openCurrent();
        name = getValue(name);

        if (attributes == null) {
          attributes = {};
        }

        attributes = getValue(attributes); // swap argument order: text <-> attributes

        if (!isObject(attributes)) {
          var _ref = [attributes, text];
          text = _ref[0];
          attributes = _ref[1];
        }

        this.currentNode = new XMLElement(this, name, attributes);
        this.currentNode.children = false;
        this.currentLevel++;
        this.openTags[this.currentLevel] = this.currentNode;

        if (text != null) {
          this.text(text);
        }

        return this;
      } // Creates a child element node or an element type declaration when called
      // inside the DTD
      // `name` name of the node
      // `attributes` an object containing name/value pairs of attributes
      // `text` element text

    }, {
      key: "element",
      value: function element(name, attributes, text) {
        var child, i, len, oldValidationFlag, ref, root;

        if (this.currentNode && this.currentNode.type === NodeType.DocType) {
          this.dtdElement.apply(this, arguments);
        } else {
          if (Array.isArray(name) || isObject(name) || isFunction(name)) {
            oldValidationFlag = this.options.noValidation;
            this.options.noValidation = true;
            root = new XMLDocument(this.options).element('TEMP_ROOT');
            root.element(name);
            this.options.noValidation = oldValidationFlag;
            ref = root.children;

            for (i = 0, len = ref.length; i < len; i++) {
              child = ref[i];
              this.createChildNode(child);

              if (child.type === NodeType.Element) {
                this.up();
              }
            }
          } else {
            this.node(name, attributes, text);
          }
        }

        return this;
      } // Adds or modifies an attribute
      // `name` attribute name
      // `value` attribute value

    }, {
      key: "attribute",
      value: function attribute(name, value) {
        var attName, attValue;

        if (!this.currentNode || this.currentNode.children) {
          throw new Error("att() can only be used immediately after an ele() call in callback mode. " + this.debugInfo(name));
        }

        if (name != null) {
          name = getValue(name);
        }

        if (isObject(name)) {
          // expand if object
          for (attName in name) {
            if (!hasProp.call(name, attName)) continue;
            attValue = name[attName];
            this.attribute(attName, attValue);
          }
        } else {
          if (isFunction(value)) {
            value = value.apply();
          }

          if (this.options.keepNullAttributes && value == null) {
            this.currentNode.attribs[name] = new XMLAttribute(this, name, "");
          } else if (value != null) {
            this.currentNode.attribs[name] = new XMLAttribute(this, name, value);
          }
        }

        return this;
      } // Creates a text node
      // `value` element text

    }, {
      key: "text",
      value: function text(value) {
        var node;
        this.openCurrent();
        node = new XMLText(this, value);
        this.onData(this.writer.text(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      } // Creates a CDATA node
      // `value` element text without CDATA delimiters

    }, {
      key: "cdata",
      value: function cdata(value) {
        var node;
        this.openCurrent();
        node = new XMLCData(this, value);
        this.onData(this.writer.cdata(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      } // Creates a comment node
      // `value` comment text

    }, {
      key: "comment",
      value: function comment(value) {
        var node;
        this.openCurrent();
        node = new XMLComment(this, value);
        this.onData(this.writer.comment(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      } // Adds unescaped raw text
      // `value` text

    }, {
      key: "raw",
      value: function raw(value) {
        var node;
        this.openCurrent();
        node = new XMLRaw(this, value);
        this.onData(this.writer.raw(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      } // Adds a processing instruction
      // `target` instruction target
      // `value` instruction value

    }, {
      key: "instruction",
      value: function instruction(target, value) {
        var i, insTarget, insValue, len, node;
        this.openCurrent();

        if (target != null) {
          target = getValue(target);
        }

        if (value != null) {
          value = getValue(value);
        }

        if (Array.isArray(target)) {
          // expand if array
          for (i = 0, len = target.length; i < len; i++) {
            insTarget = target[i];
            this.instruction(insTarget);
          }
        } else if (isObject(target)) {
          // expand if object
          for (insTarget in target) {
            if (!hasProp.call(target, insTarget)) continue;
            insValue = target[insTarget];
            this.instruction(insTarget, insValue);
          }
        } else {
          if (isFunction(value)) {
            value = value.apply();
          }

          node = new XMLProcessingInstruction(this, target, value);
          this.onData(this.writer.processingInstruction(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        }

        return this;
      } // Creates the xml declaration
      // `version` A version number string, e.g. 1.0
      // `encoding` Encoding declaration, e.g. UTF-8
      // `standalone` standalone document declaration: true or false

    }, {
      key: "declaration",
      value: function declaration(version, encoding, standalone) {
        var node;
        this.openCurrent();

        if (this.documentStarted) {
          throw new Error("declaration() must be the first node.");
        }

        node = new XMLDeclaration(this, version, encoding, standalone);
        this.onData(this.writer.declaration(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      } // Creates the document type declaration
      // `root`  the name of the root node
      // `pubID` the public identifier of the external subset
      // `sysID` the system identifier of the external subset

    }, {
      key: "doctype",
      value: function doctype(root, pubID, sysID) {
        this.openCurrent();

        if (root == null) {
          throw new Error("Missing root node name.");
        }

        if (this.root) {
          throw new Error("dtd() must come before the root node.");
        }

        this.currentNode = new XMLDocType(this, pubID, sysID);
        this.currentNode.rootNodeName = root;
        this.currentNode.children = false;
        this.currentLevel++;
        this.openTags[this.currentLevel] = this.currentNode;
        return this;
      } // Creates an element type declaration
      // `name` element name
      // `value` element content (defaults to #PCDATA)

    }, {
      key: "dtdElement",
      value: function dtdElement(name, value) {
        var node;
        this.openCurrent();
        node = new XMLDTDElement(this, name, value);
        this.onData(this.writer.dtdElement(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      } // Creates an attribute declaration
      // `elementName` the name of the element containing this attribute
      // `attributeName` attribute name
      // `attributeType` type of the attribute (defaults to CDATA)
      // `defaultValueType` default value type (either #REQUIRED, #IMPLIED, #FIXED or
      //                    #DEFAULT) (defaults to #IMPLIED)
      // `defaultValue` default value of the attribute
      //                (only used for #FIXED or #DEFAULT)

    }, {
      key: "attList",
      value: function attList(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
        var node;
        this.openCurrent();
        node = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
        this.onData(this.writer.dtdAttList(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      } // Creates a general entity declaration
      // `name` the name of the entity
      // `value` internal entity value or an object with external entity details
      // `value.pubID` public identifier
      // `value.sysID` system identifier
      // `value.nData` notation declaration

    }, {
      key: "entity",
      value: function entity(name, value) {
        var node;
        this.openCurrent();
        node = new XMLDTDEntity(this, false, name, value);
        this.onData(this.writer.dtdEntity(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      } // Creates a parameter entity declaration
      // `name` the name of the entity
      // `value` internal entity value or an object with external entity details
      // `value.pubID` public identifier
      // `value.sysID` system identifier

    }, {
      key: "pEntity",
      value: function pEntity(name, value) {
        var node;
        this.openCurrent();
        node = new XMLDTDEntity(this, true, name, value);
        this.onData(this.writer.dtdEntity(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      } // Creates a NOTATION declaration
      // `name` the name of the notation
      // `value` an object with external entity details
      // `value.pubID` public identifier
      // `value.sysID` system identifier

    }, {
      key: "notation",
      value: function notation(name, value) {
        var node;
        this.openCurrent();
        node = new XMLDTDNotation(this, name, value);
        this.onData(this.writer.dtdNotation(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      } // Gets the parent node

    }, {
      key: "up",
      value: function up() {
        if (this.currentLevel < 0) {
          throw new Error("The document node has no parent.");
        }

        if (this.currentNode) {
          if (this.currentNode.children) {
            this.closeNode(this.currentNode);
          } else {
            this.openNode(this.currentNode);
          }

          this.currentNode = null;
        } else {
          this.closeNode(this.openTags[this.currentLevel]);
        }

        delete this.openTags[this.currentLevel];
        this.currentLevel--;
        return this;
      } // Ends the document

    }, {
      key: "end",
      value: function end() {
        while (this.currentLevel >= 0) {
          this.up();
        }

        return this.onEnd();
      } // Opens the current parent node

    }, {
      key: "openCurrent",
      value: function openCurrent() {
        if (this.currentNode) {
          this.currentNode.children = true;
          return this.openNode(this.currentNode);
        }
      } // Writes the opening tag of the current node or the entire node if it has
      // no child nodes

    }, {
      key: "openNode",
      value: function openNode(node) {
        var att, chunk, name, ref;

        if (!node.isOpen) {
          if (!this.root && this.currentLevel === 0 && node.type === NodeType.Element) {
            this.root = node;
          }

          chunk = '';

          if (node.type === NodeType.Element) {
            this.writerOptions.state = WriterState.OpenTag;
            chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + '<' + node.name;
            ref = node.attribs;

            for (name in ref) {
              if (!hasProp.call(ref, name)) continue;
              att = ref[name];
              chunk += this.writer.attribute(att, this.writerOptions, this.currentLevel);
            }

            chunk += (node.children ? '>' : '/>') + this.writer.endline(node, this.writerOptions, this.currentLevel);
            this.writerOptions.state = WriterState.InsideTag; // if node.type is NodeType.DocType
          } else {
            this.writerOptions.state = WriterState.OpenTag;
            chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + '<!DOCTYPE ' + node.rootNodeName; // external identifier

            if (node.pubID && node.sysID) {
              chunk += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
            } else if (node.sysID) {
              chunk += ' SYSTEM "' + node.sysID + '"';
            } // internal subset


            if (node.children) {
              chunk += ' [';
              this.writerOptions.state = WriterState.InsideTag;
            } else {
              this.writerOptions.state = WriterState.CloseTag;
              chunk += '>';
            }

            chunk += this.writer.endline(node, this.writerOptions, this.currentLevel);
          }

          this.onData(chunk, this.currentLevel);
          return node.isOpen = true;
        }
      } // Writes the closing tag of the current node

    }, {
      key: "closeNode",
      value: function closeNode(node) {
        var chunk;

        if (!node.isClosed) {
          chunk = '';
          this.writerOptions.state = WriterState.CloseTag;

          if (node.type === NodeType.Element) {
            chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + '</' + node.name + '>' + this.writer.endline(node, this.writerOptions, this.currentLevel); // if node.type is NodeType.DocType
          } else {
            chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + ']>' + this.writer.endline(node, this.writerOptions, this.currentLevel);
          }

          this.writerOptions.state = WriterState.None;
          this.onData(chunk, this.currentLevel);
          return node.isClosed = true;
        }
      } // Called when a new chunk of XML is output
      // `chunk` a string containing the XML chunk
      // `level` current indentation level

    }, {
      key: "onData",
      value: function onData(chunk, level) {
        this.documentStarted = true;
        return this.onDataCallback(chunk, level + 1);
      } // Called when the XML document is completed

    }, {
      key: "onEnd",
      value: function onEnd() {
        this.documentCompleted = true;
        return this.onEndCallback();
      } // Returns debug string

    }, {
      key: "debugInfo",
      value: function debugInfo(name) {
        if (name == null) {
          return "";
        } else {
          return "node: <" + name + ">";
        }
      } // Node aliases

    }, {
      key: "ele",
      value: function ele() {
        return this.element.apply(this, arguments);
      }
    }, {
      key: "nod",
      value: function nod(name, attributes, text) {
        return this.node(name, attributes, text);
      }
    }, {
      key: "txt",
      value: function txt(value) {
        return this.text(value);
      }
    }, {
      key: "dat",
      value: function dat(value) {
        return this.cdata(value);
      }
    }, {
      key: "com",
      value: function com(value) {
        return this.comment(value);
      }
    }, {
      key: "ins",
      value: function ins(target, value) {
        return this.instruction(target, value);
      }
    }, {
      key: "dec",
      value: function dec(version, encoding, standalone) {
        return this.declaration(version, encoding, standalone);
      }
    }, {
      key: "dtd",
      value: function dtd(root, pubID, sysID) {
        return this.doctype(root, pubID, sysID);
      }
    }, {
      key: "e",
      value: function e(name, attributes, text) {
        return this.element(name, attributes, text);
      }
    }, {
      key: "n",
      value: function n(name, attributes, text) {
        return this.node(name, attributes, text);
      }
    }, {
      key: "t",
      value: function t(value) {
        return this.text(value);
      }
    }, {
      key: "d",
      value: function d(value) {
        return this.cdata(value);
      }
    }, {
      key: "c",
      value: function c(value) {
        return this.comment(value);
      }
    }, {
      key: "r",
      value: function r(value) {
        return this.raw(value);
      }
    }, {
      key: "i",
      value: function i(target, value) {
        return this.instruction(target, value);
      } // Attribute aliases

    }, {
      key: "att",
      value: function att() {
        if (this.currentNode && this.currentNode.type === NodeType.DocType) {
          return this.attList.apply(this, arguments);
        } else {
          return this.attribute.apply(this, arguments);
        }
      }
    }, {
      key: "a",
      value: function a() {
        if (this.currentNode && this.currentNode.type === NodeType.DocType) {
          return this.attList.apply(this, arguments);
        } else {
          return this.attribute.apply(this, arguments);
        }
      } // DTD aliases
      // att() and ele() are defined above

    }, {
      key: "ent",
      value: function ent(name, value) {
        return this.entity(name, value);
      }
    }, {
      key: "pent",
      value: function pent(name, value) {
        return this.pEntity(name, value);
      }
    }, {
      key: "not",
      value: function not(name, value) {
        return this.notation(name, value);
      }
    }]);

    return XMLDocumentCB;
  }();
}).call(void 0);

/***/ }),

/***/ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDummy.js":
/*!******************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDummy.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Generated by CoffeeScript 2.4.1
(function () {
  var NodeType, XMLDummy, XMLNode;
  XMLNode = __webpack_require__(/*! ./XMLNode */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLNode.js");
  NodeType = __webpack_require__(/*! ./NodeType */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/NodeType.js"); // Represents a  raw node

  module.exports = XMLDummy =
  /*#__PURE__*/
  function (_XMLNode) {
    _inherits(XMLDummy, _XMLNode);

    // Initializes a new instance of `XMLDummy`
    // `XMLDummy` is a special node representing a node with 
    // a null value. Dummy nodes are created while recursively
    // building the XML tree. Simply skipping null values doesn't
    // work because that would break the recursive chain.
    function XMLDummy(parent) {
      var _this;

      _classCallCheck(this, XMLDummy);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(XMLDummy).call(this, parent));
      _this.type = NodeType.Dummy;
      return _this;
    } // Creates and returns a deep clone of `this`


    _createClass(XMLDummy, [{
      key: "clone",
      value: function clone() {
        return Object.create(this);
      } // Converts the XML fragment to string
      // `options.pretty` pretty prints the result
      // `options.indent` indentation for pretty print
      // `options.offset` how many indentations to add to every line for pretty print
      // `options.newline` newline sequence for pretty print

    }, {
      key: "toString",
      value: function toString(options) {
        return '';
      }
    }]);

    return XMLDummy;
  }(XMLNode);
}).call(void 0);

/***/ }),

/***/ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLElement.js":
/*!********************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLElement.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Generated by CoffeeScript 2.4.1
(function () {
  var NodeType,
      XMLAttribute,
      XMLElement,
      XMLNamedNodeMap,
      XMLNode,
      getValue,
      isFunction,
      isObject,
      hasProp = {}.hasOwnProperty;

  var _require = __webpack_require__(/*! ./Utility */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/Utility.js");

  isObject = _require.isObject;
  isFunction = _require.isFunction;
  getValue = _require.getValue;
  XMLNode = __webpack_require__(/*! ./XMLNode */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLNode.js");
  NodeType = __webpack_require__(/*! ./NodeType */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/NodeType.js");
  XMLAttribute = __webpack_require__(/*! ./XMLAttribute */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLAttribute.js");
  XMLNamedNodeMap = __webpack_require__(/*! ./XMLNamedNodeMap */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLNamedNodeMap.js"); // Represents an element of the XML document

  module.exports = XMLElement = function () {
    var XMLElement =
    /*#__PURE__*/
    function (_XMLNode) {
      _inherits(XMLElement, _XMLNode);

      // Initializes a new instance of `XMLElement`
      // `parent` the parent node
      // `name` element name
      // `attributes` an object containing name/value pairs of attributes
      function XMLElement(parent, name, attributes) {
        var _this;

        _classCallCheck(this, XMLElement);

        var child, j, len, ref;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(XMLElement).call(this, parent));

        if (name == null) {
          throw new Error("Missing element name. " + _this.debugInfo());
        }

        _this.name = _this.stringify.name(name);
        _this.type = NodeType.Element;
        _this.attribs = {};
        _this.schemaTypeInfo = null;

        if (attributes != null) {
          _this.attribute(attributes);
        } // set properties if this is the root node


        if (parent.type === NodeType.Document) {
          _this.isRoot = true;
          _this.documentObject = parent;
          parent.rootObject = _assertThisInitialized(_this); // set dtd name

          if (parent.children) {
            ref = parent.children;

            for (j = 0, len = ref.length; j < len; j++) {
              child = ref[j];

              if (child.type === NodeType.DocType) {
                child.name = _this.name;
                break;
              }
            }
          }
        }

        return _this;
      } // Creates and returns a deep clone of `this`


      _createClass(XMLElement, [{
        key: "clone",
        value: function clone() {
          var att, attName, clonedSelf, ref;
          clonedSelf = Object.create(this); // remove document element

          if (clonedSelf.isRoot) {
            clonedSelf.documentObject = null;
          } // clone attributes


          clonedSelf.attribs = {};
          ref = this.attribs;

          for (attName in ref) {
            if (!hasProp.call(ref, attName)) continue;
            att = ref[attName];
            clonedSelf.attribs[attName] = att.clone();
          } // clone child nodes


          clonedSelf.children = [];
          this.children.forEach(function (child) {
            var clonedChild;
            clonedChild = child.clone();
            clonedChild.parent = clonedSelf;
            return clonedSelf.children.push(clonedChild);
          });
          return clonedSelf;
        } // Adds or modifies an attribute
        // `name` attribute name
        // `value` attribute value

      }, {
        key: "attribute",
        value: function attribute(name, value) {
          var attName, attValue;

          if (name != null) {
            name = getValue(name);
          }

          if (isObject(name)) {
            // expand if object
            for (attName in name) {
              if (!hasProp.call(name, attName)) continue;
              attValue = name[attName];
              this.attribute(attName, attValue);
            }
          } else {
            if (isFunction(value)) {
              value = value.apply();
            }

            if (this.options.keepNullAttributes && value == null) {
              this.attribs[name] = new XMLAttribute(this, name, "");
            } else if (value != null) {
              this.attribs[name] = new XMLAttribute(this, name, value);
            }
          }

          return this;
        } // Removes an attribute
        // `name` attribute name

      }, {
        key: "removeAttribute",
        value: function removeAttribute(name) {
          var attName, j, len; // Also defined in DOM level 1
          // removeAttribute(name) removes an attribute by name.

          if (name == null) {
            throw new Error("Missing attribute name. " + this.debugInfo());
          }

          name = getValue(name);

          if (Array.isArray(name)) {
            // expand if array
            for (j = 0, len = name.length; j < len; j++) {
              attName = name[j];
              delete this.attribs[attName];
            }
          } else {
            delete this.attribs[name];
          }

          return this;
        } // Converts the XML fragment to string
        // `options.pretty` pretty prints the result
        // `options.indent` indentation for pretty print
        // `options.offset` how many indentations to add to every line for pretty print
        // `options.newline` newline sequence for pretty print
        // `options.allowEmpty` do not self close empty element tags

      }, {
        key: "toString",
        value: function toString(options) {
          return this.options.writer.element(this, this.options.writer.filterOptions(options));
        } // Aliases

      }, {
        key: "att",
        value: function att(name, value) {
          return this.attribute(name, value);
        }
      }, {
        key: "a",
        value: function a(name, value) {
          return this.attribute(name, value);
        } // DOM Level 1

      }, {
        key: "getAttribute",
        value: function getAttribute(name) {
          if (this.attribs.hasOwnProperty(name)) {
            return this.attribs[name].value;
          } else {
            return null;
          }
        }
      }, {
        key: "setAttribute",
        value: function setAttribute(name, value) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "getAttributeNode",
        value: function getAttributeNode(name) {
          if (this.attribs.hasOwnProperty(name)) {
            return this.attribs[name];
          } else {
            return null;
          }
        }
      }, {
        key: "setAttributeNode",
        value: function setAttributeNode(newAttr) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "removeAttributeNode",
        value: function removeAttributeNode(oldAttr) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "getElementsByTagName",
        value: function getElementsByTagName(name) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        } // DOM Level 2

      }, {
        key: "getAttributeNS",
        value: function getAttributeNS(namespaceURI, localName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "setAttributeNS",
        value: function setAttributeNS(namespaceURI, qualifiedName, value) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "removeAttributeNS",
        value: function removeAttributeNS(namespaceURI, localName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "getAttributeNodeNS",
        value: function getAttributeNodeNS(namespaceURI, localName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "setAttributeNodeNS",
        value: function setAttributeNodeNS(newAttr) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "getElementsByTagNameNS",
        value: function getElementsByTagNameNS(namespaceURI, localName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "hasAttribute",
        value: function hasAttribute(name) {
          return this.attribs.hasOwnProperty(name);
        }
      }, {
        key: "hasAttributeNS",
        value: function hasAttributeNS(namespaceURI, localName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        } // DOM Level 3

      }, {
        key: "setIdAttribute",
        value: function setIdAttribute(name, isId) {
          if (this.attribs.hasOwnProperty(name)) {
            return this.attribs[name].isId;
          } else {
            return isId;
          }
        }
      }, {
        key: "setIdAttributeNS",
        value: function setIdAttributeNS(namespaceURI, localName, isId) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "setIdAttributeNode",
        value: function setIdAttributeNode(idAttr, isId) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        } // DOM Level 4

      }, {
        key: "getElementsByTagName",
        value: function getElementsByTagName(tagname) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "getElementsByTagNameNS",
        value: function getElementsByTagNameNS(namespaceURI, localName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "getElementsByClassName",
        value: function getElementsByClassName(classNames) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "isEqualNode",
        value: function isEqualNode(node) {
          var i, j, ref;

          if (!_get(_getPrototypeOf(XMLElement.prototype), "isEqualNode", this).call(this, node)) {
            return false;
          }

          if (node.namespaceURI !== this.namespaceURI) {
            return false;
          }

          if (node.prefix !== this.prefix) {
            return false;
          }

          if (node.localName !== this.localName) {
            return false;
          }

          if (node.attribs.length !== this.attribs.length) {
            return false;
          }

          for (i = j = 0, ref = this.attribs.length - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
            if (!this.attribs[i].isEqualNode(node.attribs[i])) {
              return false;
            }
          }

          return true;
        }
      }]);

      return XMLElement;
    }(XMLNode);

    ; // DOM level 1

    Object.defineProperty(XMLElement.prototype, 'tagName', {
      get: function get() {
        return this.name;
      }
    }); // DOM level 4

    Object.defineProperty(XMLElement.prototype, 'namespaceURI', {
      get: function get() {
        return '';
      }
    });
    Object.defineProperty(XMLElement.prototype, 'prefix', {
      get: function get() {
        return '';
      }
    });
    Object.defineProperty(XMLElement.prototype, 'localName', {
      get: function get() {
        return this.name;
      }
    });
    Object.defineProperty(XMLElement.prototype, 'id', {
      get: function get() {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }
    });
    Object.defineProperty(XMLElement.prototype, 'className', {
      get: function get() {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }
    });
    Object.defineProperty(XMLElement.prototype, 'classList', {
      get: function get() {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }
    });
    Object.defineProperty(XMLElement.prototype, 'attributes', {
      get: function get() {
        if (!this.attributeMap || !this.attributeMap.nodes) {
          this.attributeMap = new XMLNamedNodeMap(this.attribs);
        }

        return this.attributeMap;
      }
    });
    return XMLElement;
  }.call(this);
}).call(void 0);

/***/ }),

/***/ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLNamedNodeMap.js":
/*!*************************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLNamedNodeMap.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Generated by CoffeeScript 2.4.1
(function () {
  // Represents a map of nodes accessed by a string key
  var XMLNamedNodeMap;

  module.exports = XMLNamedNodeMap = function () {
    var XMLNamedNodeMap =
    /*#__PURE__*/
    function () {
      // Initializes a new instance of `XMLNamedNodeMap`
      // This is just a wrapper around an ordinary
      // JS object.
      // `nodes` the object containing nodes.
      function XMLNamedNodeMap(nodes) {
        _classCallCheck(this, XMLNamedNodeMap);

        this.nodes = nodes;
      } // Creates and returns a deep clone of `this`


      _createClass(XMLNamedNodeMap, [{
        key: "clone",
        value: function clone() {
          // this class should not be cloned since it wraps
          // around a given object. The calling function should check
          // whether the wrapped object is null and supply a new object
          // (from the clone).
          return this.nodes = null;
        } // DOM Level 1

      }, {
        key: "getNamedItem",
        value: function getNamedItem(name) {
          return this.nodes[name];
        }
      }, {
        key: "setNamedItem",
        value: function setNamedItem(node) {
          var oldNode;
          oldNode = this.nodes[node.nodeName];
          this.nodes[node.nodeName] = node;
          return oldNode || null;
        }
      }, {
        key: "removeNamedItem",
        value: function removeNamedItem(name) {
          var oldNode;
          oldNode = this.nodes[name];
          delete this.nodes[name];
          return oldNode || null;
        }
      }, {
        key: "item",
        value: function item(index) {
          return this.nodes[Object.keys(this.nodes)[index]] || null;
        } // DOM level 2 functions to be implemented later

      }, {
        key: "getNamedItemNS",
        value: function getNamedItemNS(namespaceURI, localName) {
          throw new Error("This DOM method is not implemented.");
        }
      }, {
        key: "setNamedItemNS",
        value: function setNamedItemNS(node) {
          throw new Error("This DOM method is not implemented.");
        }
      }, {
        key: "removeNamedItemNS",
        value: function removeNamedItemNS(namespaceURI, localName) {
          throw new Error("This DOM method is not implemented.");
        }
      }]);

      return XMLNamedNodeMap;
    }();

    ; // DOM level 1

    Object.defineProperty(XMLNamedNodeMap.prototype, 'length', {
      get: function get() {
        return Object.keys(this.nodes).length || 0;
      }
    });
    return XMLNamedNodeMap;
  }.call(this);
}).call(void 0);

/***/ }),

/***/ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLNode.js":
/*!*****************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLNode.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Generated by CoffeeScript 2.4.1
(function () {
  var DocumentPosition,
      NodeType,
      XMLCData,
      XMLComment,
      XMLDeclaration,
      XMLDocType,
      XMLDummy,
      XMLElement,
      XMLNamedNodeMap,
      XMLNode,
      XMLNodeList,
      XMLProcessingInstruction,
      XMLRaw,
      XMLText,
      getValue,
      isEmpty,
      isFunction,
      isObject,
      hasProp = {}.hasOwnProperty,
      splice = [].splice;

  var _require = __webpack_require__(/*! ./Utility */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/Utility.js");

  isObject = _require.isObject;
  isFunction = _require.isFunction;
  isEmpty = _require.isEmpty;
  getValue = _require.getValue;
  XMLElement = null;
  XMLCData = null;
  XMLComment = null;
  XMLDeclaration = null;
  XMLDocType = null;
  XMLRaw = null;
  XMLText = null;
  XMLProcessingInstruction = null;
  XMLDummy = null;
  NodeType = null;
  XMLNodeList = null;
  XMLNamedNodeMap = null;
  DocumentPosition = null; // Represents a generic XMl element

  module.exports = XMLNode = function () {
    var XMLNode =
    /*#__PURE__*/
    function () {
      // Initializes a new instance of `XMLNode`
      // `parent` the parent node
      function XMLNode(parent1) {
        _classCallCheck(this, XMLNode);

        this.parent = parent1;

        if (this.parent) {
          this.options = this.parent.options;
          this.stringify = this.parent.stringify;
        }

        this.value = null;
        this.children = [];
        this.baseURI = null; // first execution, load dependencies that are otherwise
        // circular (so we can't load them at the top)

        if (!XMLElement) {
          XMLElement = __webpack_require__(/*! ./XMLElement */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLElement.js");
          XMLCData = __webpack_require__(/*! ./XMLCData */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLCData.js");
          XMLComment = __webpack_require__(/*! ./XMLComment */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLComment.js");
          XMLDeclaration = __webpack_require__(/*! ./XMLDeclaration */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDeclaration.js");
          XMLDocType = __webpack_require__(/*! ./XMLDocType */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDocType.js");
          XMLRaw = __webpack_require__(/*! ./XMLRaw */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLRaw.js");
          XMLText = __webpack_require__(/*! ./XMLText */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLText.js");
          XMLProcessingInstruction = __webpack_require__(/*! ./XMLProcessingInstruction */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLProcessingInstruction.js");
          XMLDummy = __webpack_require__(/*! ./XMLDummy */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDummy.js");
          NodeType = __webpack_require__(/*! ./NodeType */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/NodeType.js");
          XMLNodeList = __webpack_require__(/*! ./XMLNodeList */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLNodeList.js");
          XMLNamedNodeMap = __webpack_require__(/*! ./XMLNamedNodeMap */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLNamedNodeMap.js");
          DocumentPosition = __webpack_require__(/*! ./DocumentPosition */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/DocumentPosition.js");
        }
      } // Sets the parent node of this node and its children recursively
      // `parent` the parent node


      _createClass(XMLNode, [{
        key: "setParent",
        value: function setParent(parent) {
          var child, j, len, ref1, results;
          this.parent = parent;

          if (parent) {
            this.options = parent.options;
            this.stringify = parent.stringify;
          }

          ref1 = this.children;
          results = [];

          for (j = 0, len = ref1.length; j < len; j++) {
            child = ref1[j];
            results.push(child.setParent(this));
          }

          return results;
        } // Creates a child element node
        // `name` node name or an object describing the XML tree
        // `attributes` an object containing name/value pairs of attributes
        // `text` element text

      }, {
        key: "element",
        value: function element(name, attributes, text) {
          var childNode, item, j, k, key, lastChild, len, len1, val;
          lastChild = null;

          if (attributes === null && text == null) {
            attributes = {};
            text = null;
          }

          if (attributes == null) {
            attributes = {};
          }

          attributes = getValue(attributes); // swap argument order: text <-> attributes

          if (!isObject(attributes)) {
            var _ref = [attributes, text];
            text = _ref[0];
            attributes = _ref[1];
          }

          if (name != null) {
            name = getValue(name);
          } // expand if array


          if (Array.isArray(name)) {
            for (j = 0, len = name.length; j < len; j++) {
              item = name[j];
              lastChild = this.element(item);
            } // evaluate if function

          } else if (isFunction(name)) {
            lastChild = this.element(name.apply()); // expand if object
          } else if (isObject(name)) {
            for (key in name) {
              if (!hasProp.call(name, key)) continue;
              val = name[key];

              if (isFunction(val)) {
                // evaluate if function
                val = val.apply();
              } // assign attributes


              if (!this.options.ignoreDecorators && this.stringify.convertAttKey && key.indexOf(this.stringify.convertAttKey) === 0) {
                lastChild = this.attribute(key.substr(this.stringify.convertAttKey.length), val); // skip empty arrays
              } else if (!this.options.separateArrayItems && Array.isArray(val) && isEmpty(val)) {
                lastChild = this.dummy(); // empty objects produce one node
              } else if (isObject(val) && isEmpty(val)) {
                lastChild = this.element(key); // skip null and undefined nodes
              } else if (!this.options.keepNullNodes && val == null) {
                lastChild = this.dummy(); // expand list by creating child nodes
              } else if (!this.options.separateArrayItems && Array.isArray(val)) {
                for (k = 0, len1 = val.length; k < len1; k++) {
                  item = val[k];
                  childNode = {};
                  childNode[key] = item;
                  lastChild = this.element(childNode);
                } // expand child nodes under parent

              } else if (isObject(val)) {
                // if the key is #text expand child nodes under this node to support mixed content
                if (!this.options.ignoreDecorators && this.stringify.convertTextKey && key.indexOf(this.stringify.convertTextKey) === 0) {
                  lastChild = this.element(val);
                } else {
                  lastChild = this.element(key);
                  lastChild.element(val);
                }
              } else {
                // text node
                lastChild = this.element(key, val);
              }
            } // skip null nodes

          } else if (!this.options.keepNullNodes && text === null) {
            lastChild = this.dummy();
          } else {
            // text node
            if (!this.options.ignoreDecorators && this.stringify.convertTextKey && name.indexOf(this.stringify.convertTextKey) === 0) {
              lastChild = this.text(text); // cdata node
            } else if (!this.options.ignoreDecorators && this.stringify.convertCDataKey && name.indexOf(this.stringify.convertCDataKey) === 0) {
              lastChild = this.cdata(text); // comment node
            } else if (!this.options.ignoreDecorators && this.stringify.convertCommentKey && name.indexOf(this.stringify.convertCommentKey) === 0) {
              lastChild = this.comment(text); // raw text node
            } else if (!this.options.ignoreDecorators && this.stringify.convertRawKey && name.indexOf(this.stringify.convertRawKey) === 0) {
              lastChild = this.raw(text); // processing instruction
            } else if (!this.options.ignoreDecorators && this.stringify.convertPIKey && name.indexOf(this.stringify.convertPIKey) === 0) {
              lastChild = this.instruction(name.substr(this.stringify.convertPIKey.length), text);
            } else {
              // element node
              lastChild = this.node(name, attributes, text);
            }
          }

          if (lastChild == null) {
            throw new Error("Could not create any elements with: " + name + ". " + this.debugInfo());
          }

          return lastChild;
        } // Creates a child element node before the current node
        // `name` node name or an object describing the XML tree
        // `attributes` an object containing name/value pairs of attributes
        // `text` element text

      }, {
        key: "insertBefore",
        value: function insertBefore(name, attributes, text) {
          var child, i, newChild, refChild, removed; // DOM level 1
          // insertBefore(newChild, refChild) inserts the child node newChild before refChild

          if (name != null ? name.type : void 0) {
            newChild = name;
            refChild = attributes;
            newChild.setParent(this);

            if (refChild) {
              // temporarily remove children starting *with* refChild
              i = children.indexOf(refChild);
              removed = children.splice(i); // add the new child

              children.push(newChild); // add back removed children after new child

              Array.prototype.push.apply(children, removed);
            } else {
              children.push(newChild);
            }

            return newChild;
          } else {
            if (this.isRoot) {
              throw new Error("Cannot insert elements at root level. " + this.debugInfo(name));
            } // temporarily remove children starting *with* this


            i = this.parent.children.indexOf(this);
            removed = this.parent.children.splice(i); // add the new child

            child = this.parent.element(name, attributes, text); // add back removed children after new child

            Array.prototype.push.apply(this.parent.children, removed);
            return child;
          }
        } // Creates a child element node after the current node
        // `name` node name or an object describing the XML tree
        // `attributes` an object containing name/value pairs of attributes
        // `text` element text

      }, {
        key: "insertAfter",
        value: function insertAfter(name, attributes, text) {
          var child, i, removed;

          if (this.isRoot) {
            throw new Error("Cannot insert elements at root level. " + this.debugInfo(name));
          } // temporarily remove children starting *after* this


          i = this.parent.children.indexOf(this);
          removed = this.parent.children.splice(i + 1); // add the new child

          child = this.parent.element(name, attributes, text); // add back removed children after new child

          Array.prototype.push.apply(this.parent.children, removed);
          return child;
        } // Deletes a child element node

      }, {
        key: "remove",
        value: function remove() {
          var i, ref1;

          if (this.isRoot) {
            throw new Error("Cannot remove the root element. " + this.debugInfo());
          }

          i = this.parent.children.indexOf(this);
          splice.apply(this.parent.children, [i, i - i + 1].concat(ref1 = [])), ref1;
          return this.parent;
        } // Creates a node
        // `name` name of the node
        // `attributes` an object containing name/value pairs of attributes
        // `text` element text

      }, {
        key: "node",
        value: function node(name, attributes, text) {
          var child;

          if (name != null) {
            name = getValue(name);
          }

          attributes || (attributes = {});
          attributes = getValue(attributes); // swap argument order: text <-> attributes

          if (!isObject(attributes)) {
            var _ref2 = [attributes, text];
            text = _ref2[0];
            attributes = _ref2[1];
          }

          child = new XMLElement(this, name, attributes);

          if (text != null) {
            child.text(text);
          }

          this.children.push(child);
          return child;
        } // Creates a text node
        // `value` element text

      }, {
        key: "text",
        value: function text(value) {
          var child;

          if (isObject(value)) {
            this.element(value);
          }

          child = new XMLText(this, value);
          this.children.push(child);
          return this;
        } // Creates a CDATA node
        // `value` element text without CDATA delimiters

      }, {
        key: "cdata",
        value: function cdata(value) {
          var child;
          child = new XMLCData(this, value);
          this.children.push(child);
          return this;
        } // Creates a comment node
        // `value` comment text

      }, {
        key: "comment",
        value: function comment(value) {
          var child;
          child = new XMLComment(this, value);
          this.children.push(child);
          return this;
        } // Creates a comment node before the current node
        // `value` comment text

      }, {
        key: "commentBefore",
        value: function commentBefore(value) {
          var child, i, removed; // temporarily remove children starting *with* this

          i = this.parent.children.indexOf(this);
          removed = this.parent.children.splice(i); // add the new child

          child = this.parent.comment(value); // add back removed children after new child

          Array.prototype.push.apply(this.parent.children, removed);
          return this;
        } // Creates a comment node after the current node
        // `value` comment text

      }, {
        key: "commentAfter",
        value: function commentAfter(value) {
          var child, i, removed; // temporarily remove children starting *after* this

          i = this.parent.children.indexOf(this);
          removed = this.parent.children.splice(i + 1); // add the new child

          child = this.parent.comment(value); // add back removed children after new child

          Array.prototype.push.apply(this.parent.children, removed);
          return this;
        } // Adds unescaped raw text
        // `value` text

      }, {
        key: "raw",
        value: function raw(value) {
          var child;
          child = new XMLRaw(this, value);
          this.children.push(child);
          return this;
        } // Adds a dummy node

      }, {
        key: "dummy",
        value: function dummy() {
          var child;
          child = new XMLDummy(this); // Normally when a new node is created it is added to the child node collection.
          // However, dummy nodes are never added to the XML tree. They are created while
          // converting JS objects to XML nodes in order not to break the recursive function
          // chain. They can be thought of as invisible nodes. They can be traversed through
          // by using prev(), next(), up(), etc. functions but they do not exists in the tree.
          // @children.push child

          return child;
        } // Adds a processing instruction
        // `target` instruction target
        // `value` instruction value

      }, {
        key: "instruction",
        value: function instruction(target, value) {
          var insTarget, insValue, instruction, j, len;

          if (target != null) {
            target = getValue(target);
          }

          if (value != null) {
            value = getValue(value);
          }

          if (Array.isArray(target)) {
            // expand if array
            for (j = 0, len = target.length; j < len; j++) {
              insTarget = target[j];
              this.instruction(insTarget);
            }
          } else if (isObject(target)) {
            // expand if object
            for (insTarget in target) {
              if (!hasProp.call(target, insTarget)) continue;
              insValue = target[insTarget];
              this.instruction(insTarget, insValue);
            }
          } else {
            if (isFunction(value)) {
              value = value.apply();
            }

            instruction = new XMLProcessingInstruction(this, target, value);
            this.children.push(instruction);
          }

          return this;
        } // Creates a processing instruction node before the current node
        // `target` instruction target
        // `value` instruction value

      }, {
        key: "instructionBefore",
        value: function instructionBefore(target, value) {
          var child, i, removed; // temporarily remove children starting *with* this

          i = this.parent.children.indexOf(this);
          removed = this.parent.children.splice(i); // add the new child

          child = this.parent.instruction(target, value); // add back removed children after new child

          Array.prototype.push.apply(this.parent.children, removed);
          return this;
        } // Creates a processing instruction node after the current node
        // `target` instruction target
        // `value` instruction value

      }, {
        key: "instructionAfter",
        value: function instructionAfter(target, value) {
          var child, i, removed; // temporarily remove children starting *after* this

          i = this.parent.children.indexOf(this);
          removed = this.parent.children.splice(i + 1); // add the new child

          child = this.parent.instruction(target, value); // add back removed children after new child

          Array.prototype.push.apply(this.parent.children, removed);
          return this;
        } // Creates the xml declaration
        // `version` A version number string, e.g. 1.0
        // `encoding` Encoding declaration, e.g. UTF-8
        // `standalone` standalone document declaration: true or false

      }, {
        key: "declaration",
        value: function declaration(version, encoding, standalone) {
          var doc, xmldec;
          doc = this.document();
          xmldec = new XMLDeclaration(doc, version, encoding, standalone); // Replace XML declaration if exists, otherwise insert at top

          if (doc.children.length === 0) {
            doc.children.unshift(xmldec);
          } else if (doc.children[0].type === NodeType.Declaration) {
            doc.children[0] = xmldec;
          } else {
            doc.children.unshift(xmldec);
          }

          return doc.root() || doc;
        } // Creates the document type declaration
        // `pubID` the public identifier of the external subset
        // `sysID` the system identifier of the external subset

      }, {
        key: "dtd",
        value: function dtd(pubID, sysID) {
          var child, doc, doctype, i, j, k, len, len1, ref1, ref2;
          doc = this.document();
          doctype = new XMLDocType(doc, pubID, sysID);
          ref1 = doc.children; // Replace DTD if exists

          for (i = j = 0, len = ref1.length; j < len; i = ++j) {
            child = ref1[i];

            if (child.type === NodeType.DocType) {
              doc.children[i] = doctype;
              return doctype;
            }
          }

          ref2 = doc.children; // insert before root node if the root node exists

          for (i = k = 0, len1 = ref2.length; k < len1; i = ++k) {
            child = ref2[i];

            if (child.isRoot) {
              doc.children.splice(i, 0, doctype);
              return doctype;
            }
          } // otherwise append to end


          doc.children.push(doctype);
          return doctype;
        } // Gets the parent node

      }, {
        key: "up",
        value: function up() {
          if (this.isRoot) {
            throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
          }

          return this.parent;
        } // Gets the root node

      }, {
        key: "root",
        value: function root() {
          var node;
          node = this;

          while (node) {
            if (node.type === NodeType.Document) {
              return node.rootObject;
            } else if (node.isRoot) {
              return node;
            } else {
              node = node.parent;
            }
          }
        } // Gets the node representing the XML document

      }, {
        key: "document",
        value: function document() {
          var node;
          node = this;

          while (node) {
            if (node.type === NodeType.Document) {
              return node;
            } else {
              node = node.parent;
            }
          }
        } // Ends the document and converts string

      }, {
        key: "end",
        value: function end(options) {
          return this.document().end(options);
        } // Gets the previous node

      }, {
        key: "prev",
        value: function prev() {
          var i;
          i = this.parent.children.indexOf(this);

          if (i < 1) {
            throw new Error("Already at the first node. " + this.debugInfo());
          }

          return this.parent.children[i - 1];
        } // Gets the next node

      }, {
        key: "next",
        value: function next() {
          var i;
          i = this.parent.children.indexOf(this);

          if (i === -1 || i === this.parent.children.length - 1) {
            throw new Error("Already at the last node. " + this.debugInfo());
          }

          return this.parent.children[i + 1];
        } // Imports cloned root from another XML document
        // `doc` the XML document to insert nodes from

      }, {
        key: "importDocument",
        value: function importDocument(doc) {
          var child, clonedRoot, j, len, ref1;
          clonedRoot = doc.root().clone();
          clonedRoot.parent = this;
          clonedRoot.isRoot = false;
          this.children.push(clonedRoot); // set properties if imported element becomes the root node

          if (this.type === NodeType.Document) {
            clonedRoot.isRoot = true;
            clonedRoot.documentObject = this;
            this.rootObject = clonedRoot; // set dtd name

            if (this.children) {
              ref1 = this.children;

              for (j = 0, len = ref1.length; j < len; j++) {
                child = ref1[j];

                if (child.type === NodeType.DocType) {
                  child.name = clonedRoot.name;
                  break;
                }
              }
            }
          }

          return this;
        } // Returns debug string for this node

      }, {
        key: "debugInfo",
        value: function debugInfo(name) {
          var ref1, ref2;
          name = name || this.name;

          if (name == null && !((ref1 = this.parent) != null ? ref1.name : void 0)) {
            return "";
          } else if (name == null) {
            return "parent: <" + this.parent.name + ">";
          } else if (!((ref2 = this.parent) != null ? ref2.name : void 0)) {
            return "node: <" + name + ">";
          } else {
            return "node: <" + name + ">, parent: <" + this.parent.name + ">";
          }
        } // Aliases

      }, {
        key: "ele",
        value: function ele(name, attributes, text) {
          return this.element(name, attributes, text);
        }
      }, {
        key: "nod",
        value: function nod(name, attributes, text) {
          return this.node(name, attributes, text);
        }
      }, {
        key: "txt",
        value: function txt(value) {
          return this.text(value);
        }
      }, {
        key: "dat",
        value: function dat(value) {
          return this.cdata(value);
        }
      }, {
        key: "com",
        value: function com(value) {
          return this.comment(value);
        }
      }, {
        key: "ins",
        value: function ins(target, value) {
          return this.instruction(target, value);
        }
      }, {
        key: "doc",
        value: function doc() {
          return this.document();
        }
      }, {
        key: "dec",
        value: function dec(version, encoding, standalone) {
          return this.declaration(version, encoding, standalone);
        }
      }, {
        key: "e",
        value: function e(name, attributes, text) {
          return this.element(name, attributes, text);
        }
      }, {
        key: "n",
        value: function n(name, attributes, text) {
          return this.node(name, attributes, text);
        }
      }, {
        key: "t",
        value: function t(value) {
          return this.text(value);
        }
      }, {
        key: "d",
        value: function d(value) {
          return this.cdata(value);
        }
      }, {
        key: "c",
        value: function c(value) {
          return this.comment(value);
        }
      }, {
        key: "r",
        value: function r(value) {
          return this.raw(value);
        }
      }, {
        key: "i",
        value: function i(target, value) {
          return this.instruction(target, value);
        }
      }, {
        key: "u",
        value: function u() {
          return this.up();
        } // can be deprecated in a future release

      }, {
        key: "importXMLBuilder",
        value: function importXMLBuilder(doc) {
          return this.importDocument(doc);
        } // Adds or modifies an attribute.
        // `name` attribute name
        // `value` attribute value

      }, {
        key: "attribute",
        value: function attribute(name, value) {
          throw new Error("attribute() applies to element nodes only.");
        }
      }, {
        key: "att",
        value: function att(name, value) {
          return this.attribute(name, value);
        }
      }, {
        key: "a",
        value: function a(name, value) {
          return this.attribute(name, value);
        } // Removes an attribute
        // `name` attribute name

      }, {
        key: "removeAttribute",
        value: function removeAttribute(name) {
          throw new Error("attribute() applies to element nodes only.");
        } // DOM level 1 functions to be implemented later

      }, {
        key: "replaceChild",
        value: function replaceChild(newChild, oldChild) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "removeChild",
        value: function removeChild(oldChild) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "appendChild",
        value: function appendChild(newChild) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "hasChildNodes",
        value: function hasChildNodes() {
          return this.children.length !== 0;
        }
      }, {
        key: "cloneNode",
        value: function cloneNode(deep) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "normalize",
        value: function normalize() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        } // DOM level 2

      }, {
        key: "isSupported",
        value: function isSupported(feature, version) {
          return true;
        }
      }, {
        key: "hasAttributes",
        value: function hasAttributes() {
          return this.attribs.length !== 0;
        } // DOM level 3 functions to be implemented later

      }, {
        key: "compareDocumentPosition",
        value: function compareDocumentPosition(other) {
          var ref, res;
          ref = this;

          if (ref === other) {
            return 0;
          } else if (this.document() !== other.document()) {
            res = DocumentPosition.Disconnected | DocumentPosition.ImplementationSpecific;

            if (Math.random() < 0.5) {
              res |= DocumentPosition.Preceding;
            } else {
              res |= DocumentPosition.Following;
            }

            return res;
          } else if (ref.isAncestor(other)) {
            return DocumentPosition.Contains | DocumentPosition.Preceding;
          } else if (ref.isDescendant(other)) {
            return DocumentPosition.Contains | DocumentPosition.Following;
          } else if (ref.isPreceding(other)) {
            return DocumentPosition.Preceding;
          } else {
            return DocumentPosition.Following;
          }
        }
      }, {
        key: "isSameNode",
        value: function isSameNode(other) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "lookupPrefix",
        value: function lookupPrefix(namespaceURI) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "isDefaultNamespace",
        value: function isDefaultNamespace(namespaceURI) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "lookupNamespaceURI",
        value: function lookupNamespaceURI(prefix) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "isEqualNode",
        value: function isEqualNode(node) {
          var i, j, ref1;

          if (node.nodeType !== this.nodeType) {
            return false;
          }

          if (node.children.length !== this.children.length) {
            return false;
          }

          for (i = j = 0, ref1 = this.children.length - 1; 0 <= ref1 ? j <= ref1 : j >= ref1; i = 0 <= ref1 ? ++j : --j) {
            if (!this.children[i].isEqualNode(node.children[i])) {
              return false;
            }
          }

          return true;
        }
      }, {
        key: "getFeature",
        value: function getFeature(feature, version) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "setUserData",
        value: function setUserData(key, data, handler) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }, {
        key: "getUserData",
        value: function getUserData(key) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        } // Returns true if other is an inclusive descendant of node,
        // and false otherwise.

      }, {
        key: "contains",
        value: function contains(other) {
          if (!other) {
            return false;
          }

          return other === this || this.isDescendant(other);
        } // An object A is called a descendant of an object B, if either A is 
        // a child of B or A is a child of an object C that is a descendant of B.

      }, {
        key: "isDescendant",
        value: function isDescendant(node) {
          var child, isDescendantChild, j, len, ref1;
          ref1 = this.children;

          for (j = 0, len = ref1.length; j < len; j++) {
            child = ref1[j];

            if (node === child) {
              return true;
            }

            isDescendantChild = child.isDescendant(node);

            if (isDescendantChild) {
              return true;
            }
          }

          return false;
        } // An object A is called an ancestor of an object B if and only if
        // B is a descendant of A.

      }, {
        key: "isAncestor",
        value: function isAncestor(node) {
          return node.isDescendant(this);
        } // An object A is preceding an object B if A and B are in the 
        // same tree and A comes before B in tree order.

      }, {
        key: "isPreceding",
        value: function isPreceding(node) {
          var nodePos, thisPos;
          nodePos = this.treePosition(node);
          thisPos = this.treePosition(this);

          if (nodePos === -1 || thisPos === -1) {
            return false;
          } else {
            return nodePos < thisPos;
          }
        } // An object A is folllowing an object B if A and B are in the 
        // same tree and A comes after B in tree order.

      }, {
        key: "isFollowing",
        value: function isFollowing(node) {
          var nodePos, thisPos;
          nodePos = this.treePosition(node);
          thisPos = this.treePosition(this);

          if (nodePos === -1 || thisPos === -1) {
            return false;
          } else {
            return nodePos > thisPos;
          }
        } // Returns the preorder position of the given node in the tree, or -1
        // if the node is not in the tree.

      }, {
        key: "treePosition",
        value: function treePosition(node) {
          var found, pos;
          pos = 0;
          found = false;
          this.foreachTreeNode(this.document(), function (childNode) {
            pos++;

            if (!found && childNode === node) {
              return found = true;
            }
          });

          if (found) {
            return pos;
          } else {
            return -1;
          }
        } // Depth-first preorder traversal through the XML tree

      }, {
        key: "foreachTreeNode",
        value: function foreachTreeNode(node, func) {
          var child, j, len, ref1, res;
          node || (node = this.document());
          ref1 = node.children;

          for (j = 0, len = ref1.length; j < len; j++) {
            child = ref1[j];

            if (res = func(child)) {
              return res;
            } else {
              res = this.foreachTreeNode(child, func);

              if (res) {
                return res;
              }
            }
          }
        }
      }]);

      return XMLNode;
    }();

    ; // DOM level 1

    Object.defineProperty(XMLNode.prototype, 'nodeName', {
      get: function get() {
        return this.name;
      }
    });
    Object.defineProperty(XMLNode.prototype, 'nodeType', {
      get: function get() {
        return this.type;
      }
    });
    Object.defineProperty(XMLNode.prototype, 'nodeValue', {
      get: function get() {
        return this.value;
      }
    });
    Object.defineProperty(XMLNode.prototype, 'parentNode', {
      get: function get() {
        return this.parent;
      }
    });
    Object.defineProperty(XMLNode.prototype, 'childNodes', {
      get: function get() {
        if (!this.childNodeList || !this.childNodeList.nodes) {
          this.childNodeList = new XMLNodeList(this.children);
        }

        return this.childNodeList;
      }
    });
    Object.defineProperty(XMLNode.prototype, 'firstChild', {
      get: function get() {
        return this.children[0] || null;
      }
    });
    Object.defineProperty(XMLNode.prototype, 'lastChild', {
      get: function get() {
        return this.children[this.children.length - 1] || null;
      }
    });
    Object.defineProperty(XMLNode.prototype, 'previousSibling', {
      get: function get() {
        var i;
        i = this.parent.children.indexOf(this);
        return this.parent.children[i - 1] || null;
      }
    });
    Object.defineProperty(XMLNode.prototype, 'nextSibling', {
      get: function get() {
        var i;
        i = this.parent.children.indexOf(this);
        return this.parent.children[i + 1] || null;
      }
    });
    Object.defineProperty(XMLNode.prototype, 'ownerDocument', {
      get: function get() {
        return this.document() || null;
      }
    }); // DOM level 3

    Object.defineProperty(XMLNode.prototype, 'textContent', {
      get: function get() {
        var child, j, len, ref1, str;

        if (this.nodeType === NodeType.Element || this.nodeType === NodeType.DocumentFragment) {
          str = '';
          ref1 = this.children;

          for (j = 0, len = ref1.length; j < len; j++) {
            child = ref1[j];

            if (child.textContent) {
              str += child.textContent;
            }
          }

          return str;
        } else {
          return null;
        }
      },
      set: function set(value) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }
    });
    return XMLNode;
  }.call(this);
}).call(void 0);

/***/ }),

/***/ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLNodeList.js":
/*!*********************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLNodeList.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Generated by CoffeeScript 2.4.1
(function () {
  // Represents a list of nodes
  var XMLNodeList;

  module.exports = XMLNodeList = function () {
    var XMLNodeList =
    /*#__PURE__*/
    function () {
      // Initializes a new instance of `XMLNodeList`
      // This is just a wrapper around an ordinary
      // JS array.
      // `nodes` the array containing nodes.
      function XMLNodeList(nodes) {
        _classCallCheck(this, XMLNodeList);

        this.nodes = nodes;
      } // Creates and returns a deep clone of `this`


      _createClass(XMLNodeList, [{
        key: "clone",
        value: function clone() {
          // this class should not be cloned since it wraps
          // around a given array. The calling function should check
          // whether the wrapped array is null and supply a new array
          // (from the clone).
          return this.nodes = null;
        } // DOM Level 1

      }, {
        key: "item",
        value: function item(index) {
          return this.nodes[index] || null;
        }
      }]);

      return XMLNodeList;
    }();

    ; // DOM level 1

    Object.defineProperty(XMLNodeList.prototype, 'length', {
      get: function get() {
        return this.nodes.length || 0;
      }
    });
    return XMLNodeList;
  }.call(this);
}).call(void 0);

/***/ }),

/***/ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLProcessingInstruction.js":
/*!**********************************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLProcessingInstruction.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Generated by CoffeeScript 2.4.1
(function () {
  var NodeType, XMLCharacterData, XMLProcessingInstruction;
  NodeType = __webpack_require__(/*! ./NodeType */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/NodeType.js");
  XMLCharacterData = __webpack_require__(/*! ./XMLCharacterData */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLCharacterData.js"); // Represents a processing instruction

  module.exports = XMLProcessingInstruction =
  /*#__PURE__*/
  function (_XMLCharacterData) {
    _inherits(XMLProcessingInstruction, _XMLCharacterData);

    // Initializes a new instance of `XMLProcessingInstruction`
    // `parent` the parent node
    // `target` instruction target
    // `value` instruction value
    function XMLProcessingInstruction(parent, target, value) {
      var _this;

      _classCallCheck(this, XMLProcessingInstruction);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(XMLProcessingInstruction).call(this, parent));

      if (target == null) {
        throw new Error("Missing instruction target. " + _this.debugInfo());
      }

      _this.type = NodeType.ProcessingInstruction;
      _this.target = _this.stringify.insTarget(target);
      _this.name = _this.target;

      if (value) {
        _this.value = _this.stringify.insValue(value);
      }

      return _this;
    } // Creates and returns a deep clone of `this`


    _createClass(XMLProcessingInstruction, [{
      key: "clone",
      value: function clone() {
        return Object.create(this);
      } // Converts the XML fragment to string
      // `options.pretty` pretty prints the result
      // `options.indent` indentation for pretty print
      // `options.offset` how many indentations to add to every line for pretty print
      // `options.newline` newline sequence for pretty print

    }, {
      key: "toString",
      value: function toString(options) {
        return this.options.writer.processingInstruction(this, this.options.writer.filterOptions(options));
      }
    }, {
      key: "isEqualNode",
      value: function isEqualNode(node) {
        if (!_get(_getPrototypeOf(XMLProcessingInstruction.prototype), "isEqualNode", this).call(this, node)) {
          return false;
        }

        if (node.target !== this.target) {
          return false;
        }

        return true;
      }
    }]);

    return XMLProcessingInstruction;
  }(XMLCharacterData);
}).call(void 0);

/***/ }),

/***/ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLRaw.js":
/*!****************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLRaw.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Generated by CoffeeScript 2.4.1
(function () {
  var NodeType, XMLNode, XMLRaw;
  NodeType = __webpack_require__(/*! ./NodeType */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/NodeType.js");
  XMLNode = __webpack_require__(/*! ./XMLNode */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLNode.js"); // Represents a  raw node

  module.exports = XMLRaw =
  /*#__PURE__*/
  function (_XMLNode) {
    _inherits(XMLRaw, _XMLNode);

    // Initializes a new instance of `XMLRaw`
    // `text` raw text
    function XMLRaw(parent, text) {
      var _this;

      _classCallCheck(this, XMLRaw);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(XMLRaw).call(this, parent));

      if (text == null) {
        throw new Error("Missing raw text. " + _this.debugInfo());
      }

      _this.type = NodeType.Raw;
      _this.value = _this.stringify.raw(text);
      return _this;
    } // Creates and returns a deep clone of `this`


    _createClass(XMLRaw, [{
      key: "clone",
      value: function clone() {
        return Object.create(this);
      } // Converts the XML fragment to string
      // `options.pretty` pretty prints the result
      // `options.indent` indentation for pretty print
      // `options.offset` how many indentations to add to every line for pretty print
      // `options.newline` newline sequence for pretty print

    }, {
      key: "toString",
      value: function toString(options) {
        return this.options.writer.raw(this, this.options.writer.filterOptions(options));
      }
    }]);

    return XMLRaw;
  }(XMLNode);
}).call(void 0);

/***/ }),

/***/ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLStreamWriter.js":
/*!*************************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLStreamWriter.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Generated by CoffeeScript 2.4.1
(function () {
  var NodeType,
      WriterState,
      XMLStreamWriter,
      XMLWriterBase,
      hasProp = {}.hasOwnProperty;
  NodeType = __webpack_require__(/*! ./NodeType */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/NodeType.js");
  XMLWriterBase = __webpack_require__(/*! ./XMLWriterBase */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLWriterBase.js");
  WriterState = __webpack_require__(/*! ./WriterState */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/WriterState.js"); // Prints XML nodes to a stream

  module.exports = XMLStreamWriter =
  /*#__PURE__*/
  function (_XMLWriterBase) {
    _inherits(XMLStreamWriter, _XMLWriterBase);

    // Initializes a new instance of `XMLStreamWriter`
    // `stream` output stream
    // `options.pretty` pretty prints the result
    // `options.indent` indentation string
    // `options.newline` newline sequence
    // `options.offset` a fixed number of indentations to add to every line
    // `options.allowEmpty` do not self close empty element tags
    // 'options.dontPrettyTextNodes' if any text is present in node, don't indent or LF
    // `options.spaceBeforeSlash` add a space before the closing slash of empty elements
    function XMLStreamWriter(stream, options) {
      var _this;

      _classCallCheck(this, XMLStreamWriter);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(XMLStreamWriter).call(this, options));
      _this.stream = stream;
      return _this;
    }

    _createClass(XMLStreamWriter, [{
      key: "endline",
      value: function endline(node, options, level) {
        if (node.isLastRootNode && options.state === WriterState.CloseTag) {
          return '';
        } else {
          return _get(_getPrototypeOf(XMLStreamWriter.prototype), "endline", this).call(this, node, options, level);
        }
      }
    }, {
      key: "document",
      value: function document(doc, options) {
        var child, i, j, k, len1, len2, ref, ref1, results;
        ref = doc.children; // set a flag so that we don't insert a newline after the last root level node 

        for (i = j = 0, len1 = ref.length; j < len1; i = ++j) {
          child = ref[i];
          child.isLastRootNode = i === doc.children.length - 1;
        }

        options = this.filterOptions(options);
        ref1 = doc.children;
        results = [];

        for (k = 0, len2 = ref1.length; k < len2; k++) {
          child = ref1[k];
          results.push(this.writeChildNode(child, options, 0));
        }

        return results;
      }
    }, {
      key: "cdata",
      value: function cdata(node, options, level) {
        return this.stream.write(_get(_getPrototypeOf(XMLStreamWriter.prototype), "cdata", this).call(this, node, options, level));
      }
    }, {
      key: "comment",
      value: function comment(node, options, level) {
        return this.stream.write(_get(_getPrototypeOf(XMLStreamWriter.prototype), "comment", this).call(this, node, options, level));
      }
    }, {
      key: "declaration",
      value: function declaration(node, options, level) {
        return this.stream.write(_get(_getPrototypeOf(XMLStreamWriter.prototype), "declaration", this).call(this, node, options, level));
      }
    }, {
      key: "docType",
      value: function docType(node, options, level) {
        var child, j, len1, ref;
        level || (level = 0);
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        this.stream.write(this.indent(node, options, level));
        this.stream.write('<!DOCTYPE ' + node.root().name); // external identifier

        if (node.pubID && node.sysID) {
          this.stream.write(' PUBLIC "' + node.pubID + '" "' + node.sysID + '"');
        } else if (node.sysID) {
          this.stream.write(' SYSTEM "' + node.sysID + '"');
        } // internal subset


        if (node.children.length > 0) {
          this.stream.write(' [');
          this.stream.write(this.endline(node, options, level));
          options.state = WriterState.InsideTag;
          ref = node.children;

          for (j = 0, len1 = ref.length; j < len1; j++) {
            child = ref[j];
            this.writeChildNode(child, options, level + 1);
          }

          options.state = WriterState.CloseTag;
          this.stream.write(']');
        } // close tag


        options.state = WriterState.CloseTag;
        this.stream.write(options.spaceBeforeSlash + '>');
        this.stream.write(this.endline(node, options, level));
        options.state = WriterState.None;
        return this.closeNode(node, options, level);
      }
    }, {
      key: "element",
      value: function element(node, options, level) {
        var att, attLen, child, childNodeCount, firstChildNode, j, len, len1, name, prettySuppressed, r, ratt, ref, ref1, ref2, rline;
        level || (level = 0); // open tag

        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        r = this.indent(node, options, level) + '<' + node.name; // attributes

        if (options.pretty && options.width > 0) {
          len = r.length;
          ref = node.attribs;

          for (name in ref) {
            if (!hasProp.call(ref, name)) continue;
            att = ref[name];
            ratt = this.attribute(att, options, level);
            attLen = ratt.length;

            if (len + attLen > options.width) {
              rline = this.indent(node, options, level + 1) + ratt;
              r += this.endline(node, options, level) + rline;
              len = rline.length;
            } else {
              rline = ' ' + ratt;
              r += rline;
              len += rline.length;
            }
          }
        } else {
          ref1 = node.attribs;

          for (name in ref1) {
            if (!hasProp.call(ref1, name)) continue;
            att = ref1[name];
            r += this.attribute(att, options, level);
          }
        }

        this.stream.write(r);
        childNodeCount = node.children.length;
        firstChildNode = childNodeCount === 0 ? null : node.children[0];

        if (childNodeCount === 0 || node.children.every(function (e) {
          return (e.type === NodeType.Text || e.type === NodeType.Raw) && e.value === '';
        })) {
          // empty element
          if (options.allowEmpty) {
            this.stream.write('>');
            options.state = WriterState.CloseTag;
            this.stream.write('</' + node.name + '>');
          } else {
            options.state = WriterState.CloseTag;
            this.stream.write(options.spaceBeforeSlash + '/>');
          }
        } else if (options.pretty && childNodeCount === 1 && (firstChildNode.type === NodeType.Text || firstChildNode.type === NodeType.Raw) && firstChildNode.value != null) {
          // do not indent text-only nodes
          this.stream.write('>');
          options.state = WriterState.InsideTag;
          options.suppressPrettyCount++;
          prettySuppressed = true;
          this.writeChildNode(firstChildNode, options, level + 1);
          options.suppressPrettyCount--;
          prettySuppressed = false;
          options.state = WriterState.CloseTag;
          this.stream.write('</' + node.name + '>');
        } else {
          this.stream.write('>' + this.endline(node, options, level));
          options.state = WriterState.InsideTag;
          ref2 = node.children; // inner tags

          for (j = 0, len1 = ref2.length; j < len1; j++) {
            child = ref2[j];
            this.writeChildNode(child, options, level + 1);
          } // close tag


          options.state = WriterState.CloseTag;
          this.stream.write(this.indent(node, options, level) + '</' + node.name + '>');
        }

        this.stream.write(this.endline(node, options, level));
        options.state = WriterState.None;
        return this.closeNode(node, options, level);
      }
    }, {
      key: "processingInstruction",
      value: function processingInstruction(node, options, level) {
        return this.stream.write(_get(_getPrototypeOf(XMLStreamWriter.prototype), "processingInstruction", this).call(this, node, options, level));
      }
    }, {
      key: "raw",
      value: function raw(node, options, level) {
        return this.stream.write(_get(_getPrototypeOf(XMLStreamWriter.prototype), "raw", this).call(this, node, options, level));
      }
    }, {
      key: "text",
      value: function text(node, options, level) {
        return this.stream.write(_get(_getPrototypeOf(XMLStreamWriter.prototype), "text", this).call(this, node, options, level));
      }
    }, {
      key: "dtdAttList",
      value: function dtdAttList(node, options, level) {
        return this.stream.write(_get(_getPrototypeOf(XMLStreamWriter.prototype), "dtdAttList", this).call(this, node, options, level));
      }
    }, {
      key: "dtdElement",
      value: function dtdElement(node, options, level) {
        return this.stream.write(_get(_getPrototypeOf(XMLStreamWriter.prototype), "dtdElement", this).call(this, node, options, level));
      }
    }, {
      key: "dtdEntity",
      value: function dtdEntity(node, options, level) {
        return this.stream.write(_get(_getPrototypeOf(XMLStreamWriter.prototype), "dtdEntity", this).call(this, node, options, level));
      }
    }, {
      key: "dtdNotation",
      value: function dtdNotation(node, options, level) {
        return this.stream.write(_get(_getPrototypeOf(XMLStreamWriter.prototype), "dtdNotation", this).call(this, node, options, level));
      }
    }]);

    return XMLStreamWriter;
  }(XMLWriterBase);
}).call(void 0);

/***/ }),

/***/ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLStringWriter.js":
/*!*************************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLStringWriter.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Generated by CoffeeScript 2.4.1
(function () {
  var XMLStringWriter, XMLWriterBase;
  XMLWriterBase = __webpack_require__(/*! ./XMLWriterBase */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLWriterBase.js"); // Prints XML nodes as plain text

  module.exports = XMLStringWriter =
  /*#__PURE__*/
  function (_XMLWriterBase) {
    _inherits(XMLStringWriter, _XMLWriterBase);

    // Initializes a new instance of `XMLStringWriter`
    // `options.pretty` pretty prints the result
    // `options.indent` indentation string
    // `options.newline` newline sequence
    // `options.offset` a fixed number of indentations to add to every line
    // `options.allowEmpty` do not self close empty element tags
    // 'options.dontPrettyTextNodes' if any text is present in node, don't indent or LF
    // `options.spaceBeforeSlash` add a space before the closing slash of empty elements
    function XMLStringWriter(options) {
      _classCallCheck(this, XMLStringWriter);

      return _possibleConstructorReturn(this, _getPrototypeOf(XMLStringWriter).call(this, options));
    }

    _createClass(XMLStringWriter, [{
      key: "document",
      value: function document(doc, options) {
        var child, i, len, r, ref;
        options = this.filterOptions(options);
        r = '';
        ref = doc.children;

        for (i = 0, len = ref.length; i < len; i++) {
          child = ref[i];
          r += this.writeChildNode(child, options, 0);
        } // remove trailing newline


        if (options.pretty && r.slice(-options.newline.length) === options.newline) {
          r = r.slice(0, -options.newline.length);
        }

        return r;
      }
    }]);

    return XMLStringWriter;
  }(XMLWriterBase);
}).call(void 0);

/***/ }),

/***/ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLStringifier.js":
/*!************************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLStringifier.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Generated by CoffeeScript 2.4.1
(function () {
  // Converts values to strings
  var XMLStringifier,
      hasProp = {}.hasOwnProperty;

  module.exports = XMLStringifier = function () {
    var XMLStringifier =
    /*#__PURE__*/
    function () {
      // Initializes a new instance of `XMLStringifier`
      // `options.version` The version number string of the XML spec to validate against, e.g. 1.0
      // `options.noDoubleEncoding` whether existing html entities are encoded: true or false
      // `options.stringify` a set of functions to use for converting values to strings
      // `options.noValidation` whether values will be validated and escaped or returned as is
      function XMLStringifier(options) {
        _classCallCheck(this, XMLStringifier);

        var key, ref, value; // Checks whether the given string contains legal characters
        // Fails with an exception on error
        // `str` the string to check

        this.assertLegalChar = this.assertLegalChar.bind(this); // Checks whether the given string contains legal characters for a name
        // Fails with an exception on error
        // `str` the string to check

        this.assertLegalName = this.assertLegalName.bind(this);
        options || (options = {});
        this.options = options;

        if (!this.options.version) {
          this.options.version = '1.0';
        }

        ref = options.stringify || {};

        for (key in ref) {
          if (!hasProp.call(ref, key)) continue;
          value = ref[key];
          this[key] = value;
        }
      } // Defaults


      _createClass(XMLStringifier, [{
        key: "name",
        value: function name(val) {
          if (this.options.noValidation) {
            return val;
          }

          return this.assertLegalName('' + val || '');
        }
      }, {
        key: "text",
        value: function text(val) {
          if (this.options.noValidation) {
            return val;
          }

          return this.assertLegalChar(this.textEscape('' + val || ''));
        }
      }, {
        key: "cdata",
        value: function cdata(val) {
          if (this.options.noValidation) {
            return val;
          }

          val = '' + val || '';
          val = val.replace(']]>', ']]]]><![CDATA[>');
          return this.assertLegalChar(val);
        }
      }, {
        key: "comment",
        value: function comment(val) {
          if (this.options.noValidation) {
            return val;
          }

          val = '' + val || '';

          if (val.match(/--/)) {
            throw new Error("Comment text cannot contain double-hypen: " + val);
          }

          return this.assertLegalChar(val);
        }
      }, {
        key: "raw",
        value: function raw(val) {
          if (this.options.noValidation) {
            return val;
          }

          return '' + val || '';
        }
      }, {
        key: "attValue",
        value: function attValue(val) {
          if (this.options.noValidation) {
            return val;
          }

          return this.assertLegalChar(this.attEscape(val = '' + val || ''));
        }
      }, {
        key: "insTarget",
        value: function insTarget(val) {
          if (this.options.noValidation) {
            return val;
          }

          return this.assertLegalChar('' + val || '');
        }
      }, {
        key: "insValue",
        value: function insValue(val) {
          if (this.options.noValidation) {
            return val;
          }

          val = '' + val || '';

          if (val.match(/\?>/)) {
            throw new Error("Invalid processing instruction value: " + val);
          }

          return this.assertLegalChar(val);
        }
      }, {
        key: "xmlVersion",
        value: function xmlVersion(val) {
          if (this.options.noValidation) {
            return val;
          }

          val = '' + val || '';

          if (!val.match(/1\.[0-9]+/)) {
            throw new Error("Invalid version number: " + val);
          }

          return val;
        }
      }, {
        key: "xmlEncoding",
        value: function xmlEncoding(val) {
          if (this.options.noValidation) {
            return val;
          }

          val = '' + val || '';

          if (!val.match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/)) {
            throw new Error("Invalid encoding: " + val);
          }

          return this.assertLegalChar(val);
        }
      }, {
        key: "xmlStandalone",
        value: function xmlStandalone(val) {
          if (this.options.noValidation) {
            return val;
          }

          if (val) {
            return "yes";
          } else {
            return "no";
          }
        }
      }, {
        key: "dtdPubID",
        value: function dtdPubID(val) {
          if (this.options.noValidation) {
            return val;
          }

          return this.assertLegalChar('' + val || '');
        }
      }, {
        key: "dtdSysID",
        value: function dtdSysID(val) {
          if (this.options.noValidation) {
            return val;
          }

          return this.assertLegalChar('' + val || '');
        }
      }, {
        key: "dtdElementValue",
        value: function dtdElementValue(val) {
          if (this.options.noValidation) {
            return val;
          }

          return this.assertLegalChar('' + val || '');
        }
      }, {
        key: "dtdAttType",
        value: function dtdAttType(val) {
          if (this.options.noValidation) {
            return val;
          }

          return this.assertLegalChar('' + val || '');
        }
      }, {
        key: "dtdAttDefault",
        value: function dtdAttDefault(val) {
          if (this.options.noValidation) {
            return val;
          }

          return this.assertLegalChar('' + val || '');
        }
      }, {
        key: "dtdEntityValue",
        value: function dtdEntityValue(val) {
          if (this.options.noValidation) {
            return val;
          }

          return this.assertLegalChar('' + val || '');
        }
      }, {
        key: "dtdNData",
        value: function dtdNData(val) {
          if (this.options.noValidation) {
            return val;
          }

          return this.assertLegalChar('' + val || '');
        }
      }, {
        key: "assertLegalChar",
        value: function assertLegalChar(str) {
          var regex, res;

          if (this.options.noValidation) {
            return str;
          }

          regex = '';

          if (this.options.version === '1.0') {
            // Valid characters from https://www.w3.org/TR/xml/#charsets
            // any Unicode character, excluding the surrogate blocks, FFFE, and FFFF.
            // #x9 | #xA | #xD | [#x20-#xD7FF] | [#xE000-#xFFFD] | [#x10000-#x10FFFF]
            // This ES5 compatible Regexp has been generated using the "regenerate" NPM module:
            //   let xml_10_InvalidChars = regenerate()
            //     .addRange(0x0000, 0x0008)
            //     .add(0x000B, 0x000C)
            //     .addRange(0x000E, 0x001F)
            //     .addRange(0xD800, 0xDFFF)
            //     .addRange(0xFFFE, 0xFFFF)
            regex = /[\0-\x08\x0B\f\x0E-\x1F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;

            if (res = str.match(regex)) {
              throw new Error("Invalid character in string: ".concat(str, " at index ").concat(res.index));
            }
          } else if (this.options.version === '1.1') {
            // Valid characters from https://www.w3.org/TR/xml11/#charsets
            // any Unicode character, excluding the surrogate blocks, FFFE, and FFFF.
            // [#x1-#xD7FF] | [#xE000-#xFFFD] | [#x10000-#x10FFFF]
            // This ES5 compatible Regexp has been generated using the "regenerate" NPM module:
            //   let xml_11_InvalidChars = regenerate()
            //     .add(0x0000)
            //     .addRange(0xD800, 0xDFFF)
            //     .addRange(0xFFFE, 0xFFFF)
            regex = /[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;

            if (res = str.match(regex)) {
              throw new Error("Invalid character in string: ".concat(str, " at index ").concat(res.index));
            }
          }

          return str;
        }
      }, {
        key: "assertLegalName",
        value: function assertLegalName(str) {
          var regex;

          if (this.options.noValidation) {
            return str;
          }

          this.assertLegalChar(str);
          regex = /^([:A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])([\x2D\.0-:A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*$/;

          if (!str.match(regex)) {
            throw new Error("Invalid character in name");
          }

          return str;
        } // Escapes special characters in text
        // See http://www.w3.org/TR/2000/WD-xml-c14n-20000119.html#charescaping
        // `str` the string to escape

      }, {
        key: "textEscape",
        value: function textEscape(str) {
          var ampregex;

          if (this.options.noValidation) {
            return str;
          }

          ampregex = this.options.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
          return str.replace(ampregex, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\r/g, '&#xD;');
        } // Escapes special characters in attribute values
        // See http://www.w3.org/TR/2000/WD-xml-c14n-20000119.html#charescaping
        // `str` the string to escape

      }, {
        key: "attEscape",
        value: function attEscape(str) {
          var ampregex;

          if (this.options.noValidation) {
            return str;
          }

          ampregex = this.options.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
          return str.replace(ampregex, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;').replace(/\t/g, '&#x9;').replace(/\n/g, '&#xA;').replace(/\r/g, '&#xD;');
        }
      }]);

      return XMLStringifier;
    }();

    ; // strings to match while converting from JS objects

    XMLStringifier.prototype.convertAttKey = '@';
    XMLStringifier.prototype.convertPIKey = '?';
    XMLStringifier.prototype.convertTextKey = '#text';
    XMLStringifier.prototype.convertCDataKey = '#cdata';
    XMLStringifier.prototype.convertCommentKey = '#comment';
    XMLStringifier.prototype.convertRawKey = '#raw';
    return XMLStringifier;
  }.call(this);
}).call(void 0);

/***/ }),

/***/ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLText.js":
/*!*****************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLText.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Generated by CoffeeScript 2.4.1
(function () {
  var NodeType, XMLCharacterData, XMLText;
  NodeType = __webpack_require__(/*! ./NodeType */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/NodeType.js");
  XMLCharacterData = __webpack_require__(/*! ./XMLCharacterData */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLCharacterData.js"); // Represents a text node

  module.exports = XMLText = function () {
    var XMLText =
    /*#__PURE__*/
    function (_XMLCharacterData) {
      _inherits(XMLText, _XMLCharacterData);

      // Initializes a new instance of `XMLText`
      // `text` element text
      function XMLText(parent, text) {
        var _this;

        _classCallCheck(this, XMLText);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(XMLText).call(this, parent));

        if (text == null) {
          throw new Error("Missing element text. " + _this.debugInfo());
        }

        _this.name = "#text";
        _this.type = NodeType.Text;
        _this.value = _this.stringify.text(text);
        return _this;
      } // Creates and returns a deep clone of `this`


      _createClass(XMLText, [{
        key: "clone",
        value: function clone() {
          return Object.create(this);
        } // Converts the XML fragment to string
        // `options.pretty` pretty prints the result
        // `options.indent` indentation for pretty print
        // `options.offset` how many indentations to add to every line for pretty print
        // `options.newline` newline sequence for pretty print

      }, {
        key: "toString",
        value: function toString(options) {
          return this.options.writer.text(this, this.options.writer.filterOptions(options));
        } // DOM level 1 functions to be implemented later

      }, {
        key: "splitText",
        value: function splitText(offset) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        } // DOM level 3 functions to be implemented later

      }, {
        key: "replaceWholeText",
        value: function replaceWholeText(content) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }]);

      return XMLText;
    }(XMLCharacterData);

    ; // DOM level 3

    Object.defineProperty(XMLText.prototype, 'isElementContentWhitespace', {
      get: function get() {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }
    });
    Object.defineProperty(XMLText.prototype, 'wholeText', {
      get: function get() {
        var next, prev, str;
        str = '';
        prev = this.previousSibling;

        while (prev) {
          str = prev.data + str;
          prev = prev.previousSibling;
        }

        str += this.data;
        next = this.nextSibling;

        while (next) {
          str = str + next.data;
          next = next.nextSibling;
        }

        return str;
      }
    });
    return XMLText;
  }.call(this);
}).call(void 0);

/***/ }),

/***/ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLWriterBase.js":
/*!***********************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLWriterBase.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Generated by CoffeeScript 2.4.1
(function () {
  var NodeType,
      WriterState,
      XMLCData,
      XMLComment,
      XMLDTDAttList,
      XMLDTDElement,
      XMLDTDEntity,
      XMLDTDNotation,
      XMLDeclaration,
      XMLDocType,
      XMLDummy,
      XMLElement,
      XMLProcessingInstruction,
      XMLRaw,
      XMLText,
      XMLWriterBase,
      assign,
      hasProp = {}.hasOwnProperty;

  var _require = __webpack_require__(/*! ./Utility */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/Utility.js");

  assign = _require.assign;
  NodeType = __webpack_require__(/*! ./NodeType */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/NodeType.js");
  XMLDeclaration = __webpack_require__(/*! ./XMLDeclaration */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDeclaration.js");
  XMLDocType = __webpack_require__(/*! ./XMLDocType */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDocType.js");
  XMLCData = __webpack_require__(/*! ./XMLCData */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLCData.js");
  XMLComment = __webpack_require__(/*! ./XMLComment */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLComment.js");
  XMLElement = __webpack_require__(/*! ./XMLElement */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLElement.js");
  XMLRaw = __webpack_require__(/*! ./XMLRaw */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLRaw.js");
  XMLText = __webpack_require__(/*! ./XMLText */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLText.js");
  XMLProcessingInstruction = __webpack_require__(/*! ./XMLProcessingInstruction */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLProcessingInstruction.js");
  XMLDummy = __webpack_require__(/*! ./XMLDummy */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDummy.js");
  XMLDTDAttList = __webpack_require__(/*! ./XMLDTDAttList */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDTDAttList.js");
  XMLDTDElement = __webpack_require__(/*! ./XMLDTDElement */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDTDElement.js");
  XMLDTDEntity = __webpack_require__(/*! ./XMLDTDEntity */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDTDEntity.js");
  XMLDTDNotation = __webpack_require__(/*! ./XMLDTDNotation */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDTDNotation.js");
  WriterState = __webpack_require__(/*! ./WriterState */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/WriterState.js"); // Base class for XML writers

  module.exports = XMLWriterBase =
  /*#__PURE__*/
  function () {
    // Initializes a new instance of `XMLWriterBase`
    // `options.pretty` pretty prints the result
    // `options.indent` indentation string
    // `options.newline` newline sequence
    // `options.offset` a fixed number of indentations to add to every line
    // `options.width` maximum column width
    // `options.allowEmpty` do not self close empty element tags
    // 'options.dontPrettyTextNodes' if any text is present in node, don't indent or LF
    // `options.spaceBeforeSlash` add a space before the closing slash of empty elements
    function XMLWriterBase(options) {
      _classCallCheck(this, XMLWriterBase);

      var key, ref, value;
      options || (options = {});
      this.options = options;
      ref = options.writer || {};

      for (key in ref) {
        if (!hasProp.call(ref, key)) continue;
        value = ref[key];
        this["_" + key] = this[key];
        this[key] = value;
      }
    } // Filters writer options and provides defaults
    // `options` writer options


    _createClass(XMLWriterBase, [{
      key: "filterOptions",
      value: function filterOptions(options) {
        var filteredOptions, ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7;
        options || (options = {});
        options = assign({}, this.options, options);
        filteredOptions = {
          writer: this
        };
        filteredOptions.pretty = options.pretty || false;
        filteredOptions.allowEmpty = options.allowEmpty || false;
        filteredOptions.indent = (ref = options.indent) != null ? ref : '  ';
        filteredOptions.newline = (ref1 = options.newline) != null ? ref1 : '\n';
        filteredOptions.offset = (ref2 = options.offset) != null ? ref2 : 0;
        filteredOptions.width = (ref3 = options.width) != null ? ref3 : 0;
        filteredOptions.dontPrettyTextNodes = (ref4 = (ref5 = options.dontPrettyTextNodes) != null ? ref5 : options.dontprettytextnodes) != null ? ref4 : 0;
        filteredOptions.spaceBeforeSlash = (ref6 = (ref7 = options.spaceBeforeSlash) != null ? ref7 : options.spacebeforeslash) != null ? ref6 : '';

        if (filteredOptions.spaceBeforeSlash === true) {
          filteredOptions.spaceBeforeSlash = ' ';
        }

        filteredOptions.suppressPrettyCount = 0;
        filteredOptions.user = {};
        filteredOptions.state = WriterState.None;
        return filteredOptions;
      } // Returns the indentation string for the current level
      // `node` current node
      // `options` writer options
      // `level` current indentation level

    }, {
      key: "indent",
      value: function indent(node, options, level) {
        var indentLevel;

        if (!options.pretty || options.suppressPrettyCount) {
          return '';
        } else if (options.pretty) {
          indentLevel = (level || 0) + options.offset + 1;

          if (indentLevel > 0) {
            return new Array(indentLevel).join(options.indent);
          }
        }

        return '';
      } // Returns the newline string
      // `node` current node
      // `options` writer options
      // `level` current indentation level

    }, {
      key: "endline",
      value: function endline(node, options, level) {
        if (!options.pretty || options.suppressPrettyCount) {
          return '';
        } else {
          return options.newline;
        }
      }
    }, {
      key: "attribute",
      value: function attribute(att, options, level) {
        var r;
        this.openAttribute(att, options, level);

        if (options.pretty && options.width > 0) {
          r = att.name + '="' + att.value + '"';
        } else {
          r = ' ' + att.name + '="' + att.value + '"';
        }

        this.closeAttribute(att, options, level);
        return r;
      }
    }, {
      key: "cdata",
      value: function cdata(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        r = this.indent(node, options, level) + '<![CDATA[';
        options.state = WriterState.InsideTag;
        r += node.value;
        options.state = WriterState.CloseTag;
        r += ']]>' + this.endline(node, options, level);
        options.state = WriterState.None;
        this.closeNode(node, options, level);
        return r;
      }
    }, {
      key: "comment",
      value: function comment(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        r = this.indent(node, options, level) + '<!-- ';
        options.state = WriterState.InsideTag;
        r += node.value;
        options.state = WriterState.CloseTag;
        r += ' -->' + this.endline(node, options, level);
        options.state = WriterState.None;
        this.closeNode(node, options, level);
        return r;
      }
    }, {
      key: "declaration",
      value: function declaration(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        r = this.indent(node, options, level) + '<?xml';
        options.state = WriterState.InsideTag;
        r += ' version="' + node.version + '"';

        if (node.encoding != null) {
          r += ' encoding="' + node.encoding + '"';
        }

        if (node.standalone != null) {
          r += ' standalone="' + node.standalone + '"';
        }

        options.state = WriterState.CloseTag;
        r += options.spaceBeforeSlash + '?>';
        r += this.endline(node, options, level);
        options.state = WriterState.None;
        this.closeNode(node, options, level);
        return r;
      }
    }, {
      key: "docType",
      value: function docType(node, options, level) {
        var child, i, len1, r, ref;
        level || (level = 0);
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        r = this.indent(node, options, level);
        r += '<!DOCTYPE ' + node.root().name; // external identifier

        if (node.pubID && node.sysID) {
          r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
        } else if (node.sysID) {
          r += ' SYSTEM "' + node.sysID + '"';
        } // internal subset


        if (node.children.length > 0) {
          r += ' [';
          r += this.endline(node, options, level);
          options.state = WriterState.InsideTag;
          ref = node.children;

          for (i = 0, len1 = ref.length; i < len1; i++) {
            child = ref[i];
            r += this.writeChildNode(child, options, level + 1);
          }

          options.state = WriterState.CloseTag;
          r += ']';
        } // close tag


        options.state = WriterState.CloseTag;
        r += options.spaceBeforeSlash + '>';
        r += this.endline(node, options, level);
        options.state = WriterState.None;
        this.closeNode(node, options, level);
        return r;
      }
    }, {
      key: "element",
      value: function element(node, options, level) {
        var att, attLen, child, childNodeCount, firstChildNode, i, j, len, len1, len2, name, prettySuppressed, r, ratt, ref, ref1, ref2, ref3, rline;
        level || (level = 0);
        prettySuppressed = false; // open tag

        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        r = this.indent(node, options, level) + '<' + node.name; // attributes

        if (options.pretty && options.width > 0) {
          len = r.length;
          ref = node.attribs;

          for (name in ref) {
            if (!hasProp.call(ref, name)) continue;
            att = ref[name];
            ratt = this.attribute(att, options, level);
            attLen = ratt.length;

            if (len + attLen > options.width) {
              rline = this.indent(node, options, level + 1) + ratt;
              r += this.endline(node, options, level) + rline;
              len = rline.length;
            } else {
              rline = ' ' + ratt;
              r += rline;
              len += rline.length;
            }
          }
        } else {
          ref1 = node.attribs;

          for (name in ref1) {
            if (!hasProp.call(ref1, name)) continue;
            att = ref1[name];
            r += this.attribute(att, options, level);
          }
        }

        childNodeCount = node.children.length;
        firstChildNode = childNodeCount === 0 ? null : node.children[0];

        if (childNodeCount === 0 || node.children.every(function (e) {
          return (e.type === NodeType.Text || e.type === NodeType.Raw) && e.value === '';
        })) {
          // empty element
          if (options.allowEmpty) {
            r += '>';
            options.state = WriterState.CloseTag;
            r += '</' + node.name + '>' + this.endline(node, options, level);
          } else {
            options.state = WriterState.CloseTag;
            r += options.spaceBeforeSlash + '/>' + this.endline(node, options, level);
          }
        } else if (options.pretty && childNodeCount === 1 && (firstChildNode.type === NodeType.Text || firstChildNode.type === NodeType.Raw) && firstChildNode.value != null) {
          // do not indent text-only nodes
          r += '>';
          options.state = WriterState.InsideTag;
          options.suppressPrettyCount++;
          prettySuppressed = true;
          r += this.writeChildNode(firstChildNode, options, level + 1);
          options.suppressPrettyCount--;
          prettySuppressed = false;
          options.state = WriterState.CloseTag;
          r += '</' + node.name + '>' + this.endline(node, options, level);
        } else {
          // if ANY are a text node, then suppress pretty now
          if (options.dontPrettyTextNodes) {
            ref2 = node.children;

            for (i = 0, len1 = ref2.length; i < len1; i++) {
              child = ref2[i];

              if ((child.type === NodeType.Text || child.type === NodeType.Raw) && child.value != null) {
                options.suppressPrettyCount++;
                prettySuppressed = true;
                break;
              }
            }
          } // close the opening tag, after dealing with newline


          r += '>' + this.endline(node, options, level);
          options.state = WriterState.InsideTag;
          ref3 = node.children; // inner tags

          for (j = 0, len2 = ref3.length; j < len2; j++) {
            child = ref3[j];
            r += this.writeChildNode(child, options, level + 1);
          } // close tag


          options.state = WriterState.CloseTag;
          r += this.indent(node, options, level) + '</' + node.name + '>';

          if (prettySuppressed) {
            options.suppressPrettyCount--;
          }

          r += this.endline(node, options, level);
          options.state = WriterState.None;
        }

        this.closeNode(node, options, level);
        return r;
      }
    }, {
      key: "writeChildNode",
      value: function writeChildNode(node, options, level) {
        switch (node.type) {
          case NodeType.CData:
            return this.cdata(node, options, level);

          case NodeType.Comment:
            return this.comment(node, options, level);

          case NodeType.Element:
            return this.element(node, options, level);

          case NodeType.Raw:
            return this.raw(node, options, level);

          case NodeType.Text:
            return this.text(node, options, level);

          case NodeType.ProcessingInstruction:
            return this.processingInstruction(node, options, level);

          case NodeType.Dummy:
            return '';

          case NodeType.Declaration:
            return this.declaration(node, options, level);

          case NodeType.DocType:
            return this.docType(node, options, level);

          case NodeType.AttributeDeclaration:
            return this.dtdAttList(node, options, level);

          case NodeType.ElementDeclaration:
            return this.dtdElement(node, options, level);

          case NodeType.EntityDeclaration:
            return this.dtdEntity(node, options, level);

          case NodeType.NotationDeclaration:
            return this.dtdNotation(node, options, level);

          default:
            throw new Error("Unknown XML node type: " + node.constructor.name);
        }
      }
    }, {
      key: "processingInstruction",
      value: function processingInstruction(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        r = this.indent(node, options, level) + '<?';
        options.state = WriterState.InsideTag;
        r += node.target;

        if (node.value) {
          r += ' ' + node.value;
        }

        options.state = WriterState.CloseTag;
        r += options.spaceBeforeSlash + '?>';
        r += this.endline(node, options, level);
        options.state = WriterState.None;
        this.closeNode(node, options, level);
        return r;
      }
    }, {
      key: "raw",
      value: function raw(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        r = this.indent(node, options, level);
        options.state = WriterState.InsideTag;
        r += node.value;
        options.state = WriterState.CloseTag;
        r += this.endline(node, options, level);
        options.state = WriterState.None;
        this.closeNode(node, options, level);
        return r;
      }
    }, {
      key: "text",
      value: function text(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        r = this.indent(node, options, level);
        options.state = WriterState.InsideTag;
        r += node.value;
        options.state = WriterState.CloseTag;
        r += this.endline(node, options, level);
        options.state = WriterState.None;
        this.closeNode(node, options, level);
        return r;
      }
    }, {
      key: "dtdAttList",
      value: function dtdAttList(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        r = this.indent(node, options, level) + '<!ATTLIST';
        options.state = WriterState.InsideTag;
        r += ' ' + node.elementName + ' ' + node.attributeName + ' ' + node.attributeType;

        if (node.defaultValueType !== '#DEFAULT') {
          r += ' ' + node.defaultValueType;
        }

        if (node.defaultValue) {
          r += ' "' + node.defaultValue + '"';
        }

        options.state = WriterState.CloseTag;
        r += options.spaceBeforeSlash + '>' + this.endline(node, options, level);
        options.state = WriterState.None;
        this.closeNode(node, options, level);
        return r;
      }
    }, {
      key: "dtdElement",
      value: function dtdElement(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        r = this.indent(node, options, level) + '<!ELEMENT';
        options.state = WriterState.InsideTag;
        r += ' ' + node.name + ' ' + node.value;
        options.state = WriterState.CloseTag;
        r += options.spaceBeforeSlash + '>' + this.endline(node, options, level);
        options.state = WriterState.None;
        this.closeNode(node, options, level);
        return r;
      }
    }, {
      key: "dtdEntity",
      value: function dtdEntity(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        r = this.indent(node, options, level) + '<!ENTITY';
        options.state = WriterState.InsideTag;

        if (node.pe) {
          r += ' %';
        }

        r += ' ' + node.name;

        if (node.value) {
          r += ' "' + node.value + '"';
        } else {
          if (node.pubID && node.sysID) {
            r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
          } else if (node.sysID) {
            r += ' SYSTEM "' + node.sysID + '"';
          }

          if (node.nData) {
            r += ' NDATA ' + node.nData;
          }
        }

        options.state = WriterState.CloseTag;
        r += options.spaceBeforeSlash + '>' + this.endline(node, options, level);
        options.state = WriterState.None;
        this.closeNode(node, options, level);
        return r;
      }
    }, {
      key: "dtdNotation",
      value: function dtdNotation(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        r = this.indent(node, options, level) + '<!NOTATION';
        options.state = WriterState.InsideTag;
        r += ' ' + node.name;

        if (node.pubID && node.sysID) {
          r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
        } else if (node.pubID) {
          r += ' PUBLIC "' + node.pubID + '"';
        } else if (node.sysID) {
          r += ' SYSTEM "' + node.sysID + '"';
        }

        options.state = WriterState.CloseTag;
        r += options.spaceBeforeSlash + '>' + this.endline(node, options, level);
        options.state = WriterState.None;
        this.closeNode(node, options, level);
        return r;
      }
    }, {
      key: "openNode",
      value: function openNode(node, options, level) {}
    }, {
      key: "closeNode",
      value: function closeNode(node, options, level) {}
    }, {
      key: "openAttribute",
      value: function openAttribute(att, options, level) {}
    }, {
      key: "closeAttribute",
      value: function closeAttribute(att, options, level) {}
    }]);

    return XMLWriterBase;
  }();
}).call(void 0);

/***/ }),

/***/ "../core-ui/core-ui/node_modules/xmlbuilder/lib/index.js":
/*!***************************************************************!*\
  !*** ../core-ui/core-ui/node_modules/xmlbuilder/lib/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Generated by CoffeeScript 2.4.1
(function () {
  var NodeType, WriterState, XMLDOMImplementation, XMLDocument, XMLDocumentCB, XMLStreamWriter, XMLStringWriter, assign, isFunction;

  var _require = __webpack_require__(/*! ./Utility */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/Utility.js");

  assign = _require.assign;
  isFunction = _require.isFunction;
  XMLDOMImplementation = __webpack_require__(/*! ./XMLDOMImplementation */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDOMImplementation.js");
  XMLDocument = __webpack_require__(/*! ./XMLDocument */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDocument.js");
  XMLDocumentCB = __webpack_require__(/*! ./XMLDocumentCB */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLDocumentCB.js");
  XMLStringWriter = __webpack_require__(/*! ./XMLStringWriter */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLStringWriter.js");
  XMLStreamWriter = __webpack_require__(/*! ./XMLStreamWriter */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/XMLStreamWriter.js");
  NodeType = __webpack_require__(/*! ./NodeType */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/NodeType.js");
  WriterState = __webpack_require__(/*! ./WriterState */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/WriterState.js"); // Creates a new document and returns the root node for
  // chain-building the document tree
  // `name` name of the root element
  // `xmldec.version` A version number string, e.g. 1.0
  // `xmldec.encoding` Encoding declaration, e.g. UTF-8
  // `xmldec.standalone` standalone document declaration: true or false
  // `doctype.pubID` public identifier of the external subset
  // `doctype.sysID` system identifier of the external subset
  // `options.headless` whether XML declaration and doctype will be included:
  //     true or false
  // `options.keepNullNodes` whether nodes with null values will be kept
  //     or ignored: true or false
  // `options.keepNullAttributes` whether attributes with null values will be
  //     kept or ignored: true or false
  // `options.ignoreDecorators` whether decorator strings will be ignored when
  //     converting JS objects: true or false
  // `options.separateArrayItems` whether array items are created as separate
  //     nodes when passed as an object value: true or false
  // `options.noDoubleEncoding` whether existing html entities are encoded:
  //     true or false
  // `options.stringify` a set of functions to use for converting values to
  //     strings
  // `options.writer` the default XML writer to use for converting nodes to
  //     string. If the default writer is not set, the built-in XMLStringWriter
  //     will be used instead.

  module.exports.create = function (name, xmldec, doctype, options) {
    var doc, root;

    if (name == null) {
      throw new Error("Root element needs a name.");
    }

    options = assign({}, xmldec, doctype, options); // create the document node

    doc = new XMLDocument(options); // add the root node

    root = doc.element(name); // prolog

    if (!options.headless) {
      doc.declaration(options);

      if (options.pubID != null || options.sysID != null) {
        doc.dtd(options);
      }
    }

    return root;
  }; // Creates a new document and returns the document node for
  // chain-building the document tree
  // `options.keepNullNodes` whether nodes with null values will be kept
  //     or ignored: true or false
  // `options.keepNullAttributes` whether attributes with null values will be
  //     kept or ignored: true or false
  // `options.ignoreDecorators` whether decorator strings will be ignored when
  //     converting JS objects: true or false
  // `options.separateArrayItems` whether array items are created as separate
  //     nodes when passed as an object value: true or false
  // `options.noDoubleEncoding` whether existing html entities are encoded:
  //     true or false
  // `options.stringify` a set of functions to use for converting values to
  //     strings
  // `options.writer` the default XML writer to use for converting nodes to
  //     string. If the default writer is not set, the built-in XMLStringWriter
  //     will be used instead.
  // `onData` the function to be called when a new chunk of XML is output. The
  //          string containing the XML chunk is passed to `onData` as its single
  //          argument.
  // `onEnd`  the function to be called when the XML document is completed with
  //          `end`. `onEnd` does not receive any arguments.


  module.exports.begin = function (options, onData, onEnd) {
    if (isFunction(options)) {
      var _ref = [options, onData];
      onData = _ref[0];
      onEnd = _ref[1];
      options = {};
    }

    if (onData) {
      return new XMLDocumentCB(options, onData, onEnd);
    } else {
      return new XMLDocument(options);
    }
  };

  module.exports.stringWriter = function (options) {
    return new XMLStringWriter(options);
  };

  module.exports.streamWriter = function (stream, options) {
    return new XMLStreamWriter(stream, options);
  };

  module.exports.implementation = new XMLDOMImplementation();
  module.exports.nodeType = NodeType;
  module.exports.writerState = WriterState;
}).call(void 0);

/***/ }),

/***/ "./node_modules/ng-annotate-loader/loader.js?ngAnnotate=ng-annotate-patched!./node_modules/babel-loader/lib/index.js?!./node_modules/source-map-loader/index.js!../core-ui/core-ui/app/data-services/analytics/analytics-worker.js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ng-annotate-loader/loader.js?ngAnnotate=ng-annotate-patched!./node_modules/babel-loader/lib??ref--4-1!./node_modules/source-map-loader!../core-ui/core-ui/app/data-services/analytics/analytics-worker.js ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _xmlbuilder = __webpack_require__(/*! xmlbuilder */ "../core-ui/core-ui/node_modules/xmlbuilder/lib/index.js");

__webpack_require__(/*! promise-polyfill/src/polyfill */ "../core-ui/core-ui/node_modules/promise-polyfill/src/polyfill.js");

var _superagent = __webpack_require__(/*! superagent */ "../core-ui/core-ui/node_modules/superagent/lib/client.js");

// Respond to message from parent thread
self.addEventListener('message', function (event) {
  var eventData = event.data || {};
  var requestBody = eventData.contentType === 'text/xml' ? buildXMLData(eventData.data) : eventData.data().toString();
  (0, _superagent.post)(eventData.url).set('Content-Type', eventData.contentType).send(requestBody.toString()).then(function (response) {
    return self.postMessage({
      response: JSON.stringify(response.status)
    });
  })["catch"](function (error) {
    return self.postMessage({
      error: error.message
    });
  });
});

function buildXMLData(data) {
  return (0, _xmlbuilder.create)(data).end({
    pretty: true
  });
}

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=fd422e323332e91fd3f7.worker.js.map