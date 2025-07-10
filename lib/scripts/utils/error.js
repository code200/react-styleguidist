"use strict";

require("core-js/modules/es.symbol.description");
exports.__esModule = true;
exports.default = void 0;
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
class StyleguidistError extends Error {
  constructor(message, extra) {
    super(message);
    _defineProperty(this, "extra", void 0);
    Error.captureStackTrace(this, this.constructor);
    Object.defineProperty(this, 'name', {
      value: this.constructor.name
    });
    Object.defineProperty(this, 'extra', {
      value: extra
    });
  }
}
var _default = exports.default = StyleguidistError;