import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.to-primitive";
import "core-js/modules/es.array.concat";
import "core-js/modules/es.date.to-primitive";
import "core-js/modules/es.function.name";
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
import Styled from 'rsg-components/Styled';
import Markdown from 'rsg-components/Markdown';
import { DOCS_DOCUMENTING } from '../../../scripts/consts';
var styles = function styles(_ref) {
  var fontFamily = _ref.fontFamily,
    fontSize = _ref.fontSize,
    color = _ref.color;
  return {
    button: {
      padding: 0,
      fontSize: fontSize.base,
      fontFamily: fontFamily.base,
      textDecoration: 'underline',
      color: color.light,
      border: 0,
      cursor: 'pointer',
      background: 'transparent',
      '&:hover, &:active': {
        isolate: false,
        color: color.lightest
      }
    }
  };
};
export var ExamplePlaceholderRenderer = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ExamplePlaceholderRenderer, _Component);
  var _super = _createSuper(ExamplePlaceholderRenderer);
  function ExamplePlaceholderRenderer() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _defineProperty(_assertThisInitialized(_this), "state", {
      isVisible: false
    });
    _defineProperty(_assertThisInitialized(_this), "handleOpen", function () {
      _this.setState({
        isVisible: true
      });
    });
    return _this;
  }
  var _proto = ExamplePlaceholderRenderer.prototype;
  _proto.render = function render() {
    var _this$props = this.props,
      classes = _this$props.classes,
      name = _this$props.name;
    var isVisible = this.state.isVisible;
    if (isVisible) {
      return /*#__PURE__*/React.createElement(Markdown, {
        text: "\nCreate **Readme.md** or **" + name + ".md** file in the component\u2019s folder like this:\n\n    " + name + " example:\n\n    ```js\n    <" + name + " pizza=\"\uD83C\uDF55\" />\n\t```\n\nYou may need to **restart** the style guide server after adding an example file.\n\nRead more in the [documenting components guide](" + DOCS_DOCUMENTING + ").\n\t\t\t\t\t"
      });
    }
    return /*#__PURE__*/React.createElement("button", {
      className: classes.button,
      onClick: this.handleOpen
    }, "Add examples to this component");
  };
  return ExamplePlaceholderRenderer;
}(Component);
_defineProperty(ExamplePlaceholderRenderer, "propTypes", {
  classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  name: PropTypes.string
});
export default Styled(styles)(ExamplePlaceholderRenderer);