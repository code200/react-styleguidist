import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.to-primitive";
import "core-js/modules/es.date.to-primitive";
import "core-js/modules/es.number.constructor";
import "core-js/modules/es.object.to-string";
function _createSuper(t) { var r = _isNativeReflectConstruct(); return function () { var e, o = _getPrototypeOf(t); if (r) { var s = _getPrototypeOf(this).constructor; e = Reflect.construct(o, arguments, s); } else e = o.apply(this, arguments); return _possibleConstructorReturn(this, e); }; }
function _possibleConstructorReturn(t, e) { if (e && ("object" == typeof e || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Wrapper from 'rsg-components/Wrapper';
import compileCode from '../../utils/compileCode';
import splitExampleCode from '../../utils/splitExampleCode';

/* eslint-disable react/no-multi-comp */
var ReactExample = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ReactExample, _Component);
  var _super = _createSuper(ReactExample);
  function ReactExample() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = ReactExample.prototype;
  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return this.props.code !== nextProps.code;
  }

  // Run example code and return the last top-level expression
  ;
  _proto.getExampleComponent = function getExampleComponent(compiledCode) {
    return this.props.evalInContext("\n\t\t\t" + compiledCode + "\n\t\t");
  };
  _proto.render = function render() {
    var _this$props = this.props,
      code = _this$props.code,
      _this$props$compilerC = _this$props.compilerConfig,
      compilerConfig = _this$props$compilerC === void 0 ? {} : _this$props$compilerC,
      onError = _this$props.onError;
    var compiledCode = compileCode(code, compilerConfig, onError);
    if (!compiledCode) {
      return null;
    }
    var _splitExampleCode = splitExampleCode(compiledCode),
      example = _splitExampleCode.example;
    var ExampleComponent = this.getExampleComponent(example);
    var wrappedComponent = /*#__PURE__*/React.createElement(Wrapper, {
      onError: onError
    }, /*#__PURE__*/React.createElement(ExampleComponent, null));
    return wrappedComponent;
  };
  return ReactExample;
}(Component);
_defineProperty(ReactExample, "propTypes", {
  code: PropTypes.string.isRequired,
  evalInContext: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
  compilerConfig: PropTypes.object
});
export { ReactExample as default };