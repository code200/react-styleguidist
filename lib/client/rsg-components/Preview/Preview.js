import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.to-primitive";
import "core-js/modules/es.array.concat";
import "core-js/modules/es.date.to-primitive";
import "core-js/modules/es.number.constructor";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.string.replace";
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
import PlaygroundError from 'rsg-components/PlaygroundError';
import ReactExample from 'rsg-components/ReactExample';
import Context from 'rsg-components/Context';
import { createRoot } from 'react-dom/client';
var improveErrorMessage = function improveErrorMessage(message) {
  return message.replace('Check the render method of `StateHolder`.', 'Check the code of your example in a Markdown file or in the editor below.');
};
var Preview = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Preview, _Component);
  var _super = _createSuper(Preview);
  function Preview() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _defineProperty(_assertThisInitialized(_this), "mountNode", null);
    _defineProperty(_assertThisInitialized(_this), "reactRoot", null);
    _defineProperty(_assertThisInitialized(_this), "timeoutId", null);
    _defineProperty(_assertThisInitialized(_this), "state", {
      error: null
    });
    _defineProperty(_assertThisInitialized(_this), "handleError", function (err) {
      _this.unmountPreview();
      _this.setState({
        error: improveErrorMessage(err.toString())
      });
      console.error(err); // eslint-disable-line no-console
    });
    _defineProperty(_assertThisInitialized(_this), "callbackRef", function (ref) {
      _this.mountNode = ref;
      if (!_this.reactRoot && ref) {
        _this.reactRoot = createRoot(ref);
      }
    });
    return _this;
  }
  var _proto = Preview.prototype;
  _proto.componentDidMount = function componentDidMount() {
    // Clear console after hot reload, do not clear on the first load
    // to keep any warnings
    if (this.context.codeRevision > 0) {
      // eslint-disable-next-line no-console
      console.clear();
    }
    this.executeCode();
  };
  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    return this.state.error !== nextState.error || this.props.code !== nextProps.code;
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.code !== prevProps.code) {
      this.executeCode();
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unmountPreview();
  };
  _proto.unmountPreview = function unmountPreview() {
    var self = this;
    if (self.timeoutId) {
      clearTimeout(self.timeoutId);
    }
    var id = setTimeout(function () {
      if (self.reactRoot) {
        self.reactRoot.unmount();
        self.reactRoot = null;
      }
    });
    self.timeoutId = id;
  };
  _proto.executeCode = function executeCode() {
    var _this2 = this;
    this.setState({
      error: null
    });
    var code = this.props.code;
    if (!code) {
      return;
    }
    var wrappedComponent = /*#__PURE__*/React.createElement(ReactExample, {
      code: code,
      evalInContext: this.props.evalInContext,
      onError: this.handleError,
      compilerConfig: this.context.config.compilerConfig
    });

    /* istanbul ignore next */
    window.requestAnimationFrame(function () {
      if (!_this2.mountNode) {
        return;
      }
      try {
        if (_this2.reactRoot === null) {
          _this2.reactRoot = createRoot(_this2.mountNode);
          _this2.reactRoot.render(wrappedComponent);
        } else {
          _this2.reactRoot.render(wrappedComponent);
        }
      } catch (err) {
        if (err instanceof Error) {
          _this2.handleError(err);
        }
      }
    });
  };
  _proto.render = function render() {
    var error = this.state.error;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      "data-testid": "mountNode",
      ref: this.callbackRef
    }), error && /*#__PURE__*/React.createElement(PlaygroundError, {
      message: error
    }));
  };
  return Preview;
}(Component);
_defineProperty(Preview, "propTypes", {
  code: PropTypes.string.isRequired,
  evalInContext: PropTypes.func.isRequired
});
_defineProperty(Preview, "contextType", Context);
export { Preview as default };