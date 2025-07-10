import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.to-primitive";
import "core-js/modules/es.array.concat";
import "core-js/modules/es.date.to-primitive";
import "core-js/modules/es.function.name";
import "core-js/modules/es.number.constructor";
import "core-js/modules/es.object.assign";
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
import Examples from 'rsg-components/Examples';
import SectionHeading from 'rsg-components/SectionHeading';
import JsDoc from 'rsg-components/JsDoc';
import Markdown from 'rsg-components/Markdown';
import Slot from 'rsg-components/Slot';
import ReactComponentRenderer from 'rsg-components/ReactComponent/ReactComponentRenderer';
import Context from 'rsg-components/Context';
import ExamplePlaceholderDefault from 'rsg-components/ExamplePlaceholder';
import { DOCS_TAB_USAGE } from '../slots';
import { DisplayModes, UsageModes } from '../../consts';
var ExamplePlaceholder = process.env.STYLEGUIDIST_ENV !== 'production' ? ExamplePlaceholderDefault : function () {
  return /*#__PURE__*/React.createElement("div", null);
};
var ReactComponent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ReactComponent, _Component);
  var _super = _createSuper(ReactComponent);
  function ReactComponent() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _defineProperty(_assertThisInitialized(_this), "state", {
      activeTab: _this.props.usageMode === UsageModes.expand ? DOCS_TAB_USAGE : undefined
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
  var _proto = ReactComponent.prototype;
  _proto.render = function render() {
    var activeTab = this.state.activeTab;
    var _ref = this.context,
      displayMode = _ref.displayMode,
      pagePerSection = _ref.config.pagePerSection;
    var _this$props = this.props,
      component = _this$props.component,
      depth = _this$props.depth,
      usageMode = _this$props.usageMode,
      exampleMode = _this$props.exampleMode;
    var name = component.name,
      visibleName = component.visibleName,
      _component$slug = component.slug,
      slug = _component$slug === void 0 ? '-' : _component$slug,
      filepath = component.filepath,
      pathLine = component.pathLine,
      href = component.href;
    var _ref2 = component.props || {},
      _ref2$description = _ref2.description,
      description = _ref2$description === void 0 ? '' : _ref2$description,
      _ref2$examples = _ref2.examples,
      examples = _ref2$examples === void 0 ? [] : _ref2$examples,
      _ref2$tags = _ref2.tags,
      tags = _ref2$tags === void 0 ? {} : _ref2$tags;
    if (!name) {
      return null;
    }
    var showUsage = usageMode !== UsageModes.hide;
    return /*#__PURE__*/React.createElement(ReactComponentRenderer, {
      name: name,
      slug: slug,
      filepath: filepath,
      pathLine: pathLine,
      docs: /*#__PURE__*/React.createElement(JsDoc, tags),
      description: description && /*#__PURE__*/React.createElement(Markdown, {
        text: description
      }),
      heading: /*#__PURE__*/React.createElement(SectionHeading, {
        id: slug,
        pagePerSection: pagePerSection,
        deprecated: !!tags.deprecated,
        slotName: "componentToolbar",
        slotProps: Object.assign({}, component, {
          isolated: displayMode !== DisplayModes.all
        }),
        href: href,
        depth: depth
      }, visibleName),
      examples: examples.length > 0 ? /*#__PURE__*/React.createElement(Examples, {
        examples: examples,
        name: name,
        exampleMode: exampleMode
      }) : /*#__PURE__*/React.createElement(ExamplePlaceholder, {
        name: name
      }),
      tabButtons: showUsage && /*#__PURE__*/React.createElement(Slot, {
        name: "docsTabButtons",
        active: activeTab,
        props: Object.assign({}, component, {
          onClick: this.handleTabChange
        })
      }),
      tabBody: /*#__PURE__*/React.createElement(Slot, {
        name: "docsTabs",
        active: activeTab,
        onlyActive: true,
        props: component
      })
    });
  };
  return ReactComponent;
}(Component);
_defineProperty(ReactComponent, "propTypes", {
  component: PropTypes.object.isRequired,
  depth: PropTypes.number.isRequired,
  exampleMode: PropTypes.string.isRequired,
  usageMode: PropTypes.string.isRequired
});
_defineProperty(ReactComponent, "contextType", Context);
export { ReactComponent as default };