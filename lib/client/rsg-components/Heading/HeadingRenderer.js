import "core-js/modules/es.array.index-of";
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) { ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) { if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } } return t; }
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import Styled from 'rsg-components/Styled';
var styles = function styles(_ref) {
  var color = _ref.color,
    fontFamily = _ref.fontFamily,
    fontSize = _ref.fontSize;
  return {
    heading: {
      margin: 0,
      color: color.base,
      fontFamily: fontFamily.base,
      fontWeight: 'normal'
    },
    heading1: {
      fontSize: fontSize.h1
    },
    heading2: {
      fontSize: fontSize.h2
    },
    heading3: {
      fontSize: fontSize.h3
    },
    heading4: {
      fontSize: fontSize.h4
    },
    heading5: {
      fontSize: fontSize.h5,
      fontWeight: 'bold'
    },
    heading6: {
      fontSize: fontSize.h6,
      fontStyle: 'italic'
    }
  };
};
var HeadingRenderer = function HeadingRenderer(_ref2) {
  var classes = _ref2.classes,
    level = _ref2.level,
    children = _ref2.children,
    props = _objectWithoutPropertiesLoose(_ref2, ["classes", "level", "children"]);
  var Tag = "h" + level;
  var headingClasses = cx(classes.heading, classes["heading" + level]);
  return /*#__PURE__*/React.createElement(Tag, _extends({}, props, {
    className: headingClasses
  }), children);
};
HeadingRenderer.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.any
};
export default Styled(styles)(HeadingRenderer);