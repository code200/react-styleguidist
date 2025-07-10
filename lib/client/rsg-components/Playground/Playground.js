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
import debounce from 'lodash/debounce';
import Preview from 'rsg-components/Preview';
import Para from 'rsg-components/Para';
import Slot from 'rsg-components/Slot';
import PlaygroundRenderer from 'rsg-components/Playground/PlaygroundRenderer';
import Context from 'rsg-components/Context';
import { EXAMPLE_TAB_CODE_EDITOR } from '../slots';
import { DisplayModes, ExampleModes } from '../../consts';
var Playground = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Playground, _Component);
  var _super = _createSuper(Playground);
  function Playground() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _defineProperty(_assertThisInitialized(_this), "handleChange", debounce(function (code) {
      _this.setState({
        code: code
      });
    }, _this.context.config.previewDelay));
    _defineProperty(_assertThisInitialized(_this), "state", {
      code: _this.props.code,
      prevCode: _this.props.code,
      activeTab: _this.getInitialActiveTab() ? EXAMPLE_TAB_CODE_EDITOR : undefined
    });
    _defineProperty(_assertThisInitialized(_this), "handleTabChange", function (name) {
      _this.setState(function (state) {
        return {
          activeTab: state.activeTab !== name ? name : undefined
        };
      });
    });
    return _this;
  }
  Playground.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var code = nextProps.code;
    if (prevState.prevCode !== code) {
      return {
        prevCode: code,
        code: code
      };
    }
    return null;
  };
  var _proto = Playground.prototype;
  _proto.componentWillUnmount = function componentWillUnmount() {
    // Clear pending changes
    this.handleChange.cancel();
  };
  _proto.getInitialActiveTab = function getInitialActiveTab() {
    var expandCode = this.props.exampleMode === ExampleModes.expand;
    return this.props.settings.showcode !== undefined ? this.props.settings.showcode : expandCode;
  };
  _proto.render = function render() {
    var _this$state = this.state,
      code = _this$state.code,
      activeTab = _this$state.activeTab;
    var _this$props = this.props,
      evalInContext = _this$props.evalInContext,
      index = _this$props.index,
      name = _this$props.name,
      settings = _this$props.settings,
      exampleMode = _this$props.exampleMode;
    var _ref = this.context,
      displayMode = _ref.displayMode;
    var isExampleHidden = exampleMode === ExampleModes.hide;
    var isEditorHidden = settings.noeditor || isExampleHidden;
    var preview = /*#__PURE__*/React.createElement(Preview, {
      code: code,
      evalInContext: evalInContext
    });
    return isEditorHidden ? /*#__PURE__*/React.createElement(Para, null, preview) : /*#__PURE__*/React.createElement(PlaygroundRenderer, {
      name: name,
      exampleIndex: index,
      padded: !!settings.padded,
      preview: preview,
      previewProps: settings.props || {},
      tabButtons: /*#__PURE__*/React.createElement(Slot, {
        name: "exampleTabButtons",
        active: activeTab,
        props: {
          onClick: this.handleTabChange
        }
      }),
      tabBody: /*#__PURE__*/React.createElement(Slot, {
        name: "exampleTabs",
        active: activeTab,
        onlyActive: true
        // evalInContext passed through to support custom slots that eval code
        ,
        props: {
          code: code,
          onChange: this.handleChange,
          evalInContext: evalInContext
        }
      }),
      toolbar: /*#__PURE__*/React.createElement(Slot, {
        name: "exampleToolbar",
        props: {
          name: name,
          isolated: displayMode === DisplayModes.example,
          example: index
        }
      })
    });
  };
  return Playground;
}(Component);
_defineProperty(Playground, "contextType", Context);
export default Playground;