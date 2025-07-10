import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.to-primitive";
import "core-js/modules/es.array.concat";
import "core-js/modules/es.date.to-primitive";
import "core-js/modules/es.number.constructor";
import "core-js/modules/es.object.assign";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.string.link";
import "core-js/modules/es.string.small";
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
import Styled from 'rsg-components/Styled';
import SimpleEditor from 'react-simple-code-editor';
import { highlight as prismHighlight, languages } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import { space } from '../../styles/theme';
import prismTheme from '../../styles/prismTheme';
var highlight = function highlight(code) {
  return prismHighlight(code, languages.jsx, 'jsx');
};
var styles = function styles(_ref) {
  var fontFamily = _ref.fontFamily,
    fontSize = _ref.fontSize,
    color = _ref.color,
    borderRadius = _ref.borderRadius;
  return {
    root: Object.assign({
      fontFamily: fontFamily.monospace,
      fontSize: fontSize.small,
      background: color.codeBackground,
      borderRadius: borderRadius,
      '& textarea': {
        isolate: false,
        transition: 'all ease-in-out .1s',
        // important to override inline styles in react-simple-code-editor
        border: "1px " + color.border + " solid !important",
        borderRadius: borderRadius
      },
      '& textarea:focus': {
        isolate: false,
        outline: 0,
        borderColor: color.link + " !important",
        boxShadow: [[0, 0, 0, 2, color.focus]]
      }
    }, prismTheme({
      color: color
    }))
  };
};
export var Editor = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Editor, _Component);
  var _super = _createSuper(Editor);
  function Editor() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _defineProperty(_assertThisInitialized(_this), "state", {
      code: _this.props.code,
      prevCode: _this.props.code
    });
    _defineProperty(_assertThisInitialized(_this), "handleChange", function (code) {
      _this.setState({
        code: code
      });
      _this.props.onChange(code);
    });
    return _this;
  }
  Editor.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var code = nextProps.code;
    if (prevState.prevCode !== code) {
      return {
        prevCode: code,
        code: code
      };
    }
    return null;
  };
  var _proto = Editor.prototype;
  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    return nextState.code !== this.state.code;
  };
  _proto.render = function render() {
    return /*#__PURE__*/React.createElement(SimpleEditor, {
      className: this.props.classes.root,
      value: this.state.code,
      onValueChange: this.handleChange,
      highlight: highlight
      // Padding should be passed via a prop (not CSS) for a proper
      // cursor position calculation
      ,
      padding: space[2]
    });
  };
  return Editor;
}(Component);
_defineProperty(Editor, "propTypes", {
  code: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired
});
export default Styled(styles)(Editor);