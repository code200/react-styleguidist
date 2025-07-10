"use strict";

var _getWebpackVersion = _interopRequireDefault(require("./getWebpackVersion"));
var _error = _interopRequireDefault(require("./error"));
var consts = _interopRequireWildcard(require("../consts"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Check webpack availability and version at run time instead of using peerDependencies to allow
 * usage of build tools that contains webpack as their own dependency, like Create React App.
 */

const MIN_WEBPACK_VERSION = 4;
const webpackVersion = (0, _getWebpackVersion.default)();
if (!webpackVersion) {
  throw new _error.default('Webpack is required for Styleguidist, please add it to your project:\n\n' + '    npm install --save-dev webpack\n\n' + 'See how to configure webpack for your style guide:\n' + consts.DOCS_WEBPACK);
} else if (webpackVersion < MIN_WEBPACK_VERSION) {
  throw new _error.default(`Webpack ${webpackVersion} is not supported by Styleguidist, the minimum supported version is ${MIN_WEBPACK_VERSION}`);
}