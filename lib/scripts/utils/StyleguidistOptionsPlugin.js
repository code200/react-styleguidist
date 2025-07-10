"use strict";

require("core-js/modules/es.symbol.description");
exports.__esModule = true;
exports.default = void 0;
var _webpack = _interopRequireDefault(require("webpack"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Webpack plugin that makes Styleguidist config available for Styleguidist webpack loaders.
// It will be available as `this._styleguidist`.
//
// Other working in webpack 2 way is to use LoaderOptionsPlugin, but it has problems.
// See this issue for details: https://github.com/styleguidist/react-styleguidist/issues/328

class StyleguidistOptionsPlugin {
  constructor(options) {
    _defineProperty(this, "options", void 0);
    _defineProperty(this, "pluginFunc", (context, module) => {
      if (!module.resource) {
        return;
      }
      context._styleguidist = this.options;
    });
    _defineProperty(this, "plugin", compil => {
      _webpack.default.NormalModule.getCompilationHooks(compil).loader.tap('StyleguidistOptionsPlugin', this.pluginFunc);
    });
    this.options = options;
  }

  /**
   *
   * @param compil Compilation
   */

  apply(compiler) {
    compiler.hooks.compilation.tap('StyleguidistOptionsPlugin', this.plugin);
  }
}
exports.default = StyleguidistOptionsPlugin;