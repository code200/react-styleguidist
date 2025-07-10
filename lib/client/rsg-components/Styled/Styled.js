import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.to-primitive";
import "core-js/modules/es.date.to-primitive";
import "core-js/modules/es.function.name";
import "core-js/modules/es.number.constructor";
import "core-js/modules/es.object.assign";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.exec";
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
import Context from 'rsg-components/Context';
import createStyleSheet from '../../styles/createStyleSheet';
export default function StyleHOC(styles) {
  return function (WrappedComponent) {
    var _class;
    var componentName = WrappedComponent.name.replace(/Renderer$/, '');
    return _class = /*#__PURE__*/function (_Component) {
      _inheritsLoose(_class, _Component);
      var _super = _createSuper(_class);
      function _class(props, context) {
        var _this;
        _this = _Component.call(this, props, context) || this;
        _defineProperty(_assertThisInitialized(_this), "sheet", void 0);
        _this.sheet = createStyleSheet(styles,
        // the protection here is useful for tests
        context.config || {}, componentName, context.cssRevision);
        _this.sheet.update(props).attach();
        return _this;
      }
      var _proto = _class.prototype;
      _proto.componentDidUpdate = function componentDidUpdate(nextProps) {
        this.sheet.update(nextProps);
      };
      _proto.render = function render() {
        return /*#__PURE__*/React.createElement(WrappedComponent, Object.assign({}, this.props, {
          classes: this.sheet.classes
        }));
      };
      return _class;
    }(Component), _defineProperty(_class, "displayName", "Styled(" + componentName + ")"), _defineProperty(_class, "contextType", Context), _class;
  };
}