import "core-js/modules/es.array.index-of";
import "core-js/modules/es.string.link";
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) { ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) { if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } } return t; }
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import Styled from 'rsg-components/Styled';
var styles = function styles(_ref) {
  var color = _ref.color;
  return {
    link: {
      '&, &:link, &:visited': {
        fontSize: 'inherit',
        color: color.link,
        textDecoration: 'none'
      },
      '&:hover, &:active': {
        isolate: false,
        color: color.linkHover,
        cursor: 'pointer'
      }
    }
  };
};
export var LinkRenderer = function LinkRenderer(_ref2) {
  var classes = _ref2.classes,
    children = _ref2.children,
    props = _objectWithoutPropertiesLoose(_ref2, ["classes", "children"]);
  return /*#__PURE__*/React.createElement("a", _extends({}, props, {
    className: cx(classes.link, props.className)
  }), children);
};
LinkRenderer.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  children: PropTypes.any,
  className: PropTypes.string,
  href: PropTypes.string
};
export default Styled(styles)(LinkRenderer);