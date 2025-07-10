import "core-js/modules/es.array.index-of";
import "core-js/modules/es.string.small";
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) { ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) { if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } } return t; }
import React from 'react';
import cx from 'clsx';
import Styled from 'rsg-components/Styled';
export var styles = function styles(_ref) {
  var fontFamily = _ref.fontFamily,
    fontSize = _ref.fontSize,
    color = _ref.color;
  return {
    text: {
      fontFamily: fontFamily.base
    },
    inheritSize: {
      fontSize: 'inherit'
    },
    smallSize: {
      fontSize: fontSize.small
    },
    baseSize: {
      fontSize: fontSize.base
    },
    textSize: {
      fontSize: fontSize.text
    },
    baseColor: {
      color: color.base
    },
    lightColor: {
      color: color.light
    },
    em: {
      fontStyle: 'italic'
    },
    strong: {
      fontWeight: 'bold'
    },
    isUnderlined: {
      borderBottom: [[1, 'dotted', color.lightest]]
    }
  };
};
export var TextRenderer = function TextRenderer(_ref2) {
  var _cx;
  var classes = _ref2.classes,
    semantic = _ref2.semantic,
    _ref2$size = _ref2.size,
    size = _ref2$size === void 0 ? 'inherit' : _ref2$size,
    _ref2$color = _ref2.color,
    color = _ref2$color === void 0 ? 'base' : _ref2$color,
    _ref2$underlined = _ref2.underlined,
    underlined = _ref2$underlined === void 0 ? false : _ref2$underlined,
    children = _ref2.children,
    props = _objectWithoutPropertiesLoose(_ref2, ["classes", "semantic", "size", "color", "underlined", "children"]);
  var Tag = semantic || 'span';
  var classNames = cx(classes.text, classes[size + "Size"], classes[color + "Color"], (_cx = {}, _cx[classes[Tag]] = !!semantic, _cx[classes.isUnderlined] = underlined, _cx));
  return /*#__PURE__*/React.createElement(Tag, _extends({}, props, {
    className: classNames
  }), children);
};
export default Styled(styles)(TextRenderer);