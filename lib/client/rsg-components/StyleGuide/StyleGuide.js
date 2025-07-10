import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.to-primitive";
import "core-js/modules/es.array.concat";
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
import TableOfContents from 'rsg-components/TableOfContents';
import StyleGuideRenderer from 'rsg-components/StyleGuide/StyleGuideRenderer';
import Sections from 'rsg-components/Sections';
import Welcome from 'rsg-components/Welcome';
import Error from 'rsg-components/Error';
import NotFound from 'rsg-components/NotFound';
import Context from 'rsg-components/Context';
import { HOMEPAGE } from '../../../scripts/consts';
import { DisplayModes } from '../../consts';
/**
 * This function will return true, if the sidebar should be visible and false otherwise.
 *
 * These sorted conditions (highest precedence first) define the visibility
 * state of the sidebar.
 *
 * - Sidebar is hidden for isolated example views
 * - Sidebar is always visible when pagePerSection
 * - Sidebar is hidden when showSidebar is set to false
 * - Sidebar is visible when showSidebar is set to true for non-isolated views
 *
 * @param {string} displayMode
 * @param {boolean} showSidebar
 * @param {boolean} pagePerSection
 * @returns {boolean}
 */
function hasSidebar(displayMode, showSidebar) {
  return displayMode === DisplayModes.notFound || showSidebar && displayMode === DisplayModes.all;
}
var StyleGuide = /*#__PURE__*/function (_Component) {
  _inheritsLoose(StyleGuide, _Component);
  var _super = _createSuper(StyleGuide);
  function StyleGuide() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _defineProperty(_assertThisInitialized(_this), "state", {
      error: false,
      info: null
    });
    return _this;
  }
  var _proto = StyleGuide.prototype;
  _proto.componentDidCatch = function componentDidCatch(error, info) {
    this.setState({
      error: error,
      info: info
    });
  };
  _proto.render = function render() {
    var _this$state = this.state,
      error = _this$state.error,
      info = _this$state.info;
    var _this$props = this.props,
      config = _this$props.config,
      sections = _this$props.sections,
      welcomeScreen = _this$props.welcomeScreen,
      patterns = _this$props.patterns,
      _this$props$displayMo = _this$props.displayMode,
      displayMode = _this$props$displayMo === void 0 ? DisplayModes.all : _this$props$displayMo,
      allSections = _this$props.allSections,
      pagePerSection = _this$props.pagePerSection,
      codeRevision = _this$props.codeRevision,
      cssRevision = _this$props.cssRevision,
      slots = _this$props.slots;
    if (error && info) {
      return /*#__PURE__*/React.createElement(Error, {
        error: error,
        info: info
      });
    }
    if (welcomeScreen && patterns) {
      return /*#__PURE__*/React.createElement(Welcome, {
        patterns: patterns
      });
    }
    return /*#__PURE__*/React.createElement(Context.Provider, {
      value: {
        codeRevision: codeRevision,
        config: config,
        slots: slots,
        displayMode: displayMode || DisplayModes.all,
        cssRevision: cssRevision
      }
    }, /*#__PURE__*/React.createElement(StyleGuideRenderer, {
      key: cssRevision,
      title: config.title,
      version: config.version,
      homepageUrl: HOMEPAGE,
      toc: allSections ? /*#__PURE__*/React.createElement(TableOfContents, {
        sections: allSections,
        useRouterLinks: pagePerSection,
        tocMode: config.tocMode
      }) : null,
      hasSidebar: hasSidebar(displayMode, config.showSidebar)
    }, sections.length ? /*#__PURE__*/React.createElement(Sections, {
      sections: sections,
      depth: 1
    }) : /*#__PURE__*/React.createElement(NotFound, null)));
  };
  return StyleGuide;
}(Component);
export { StyleGuide as default };