import "core-js/modules/es.array.index-of";
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) { ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) { if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } } return t; }
import React from 'react';
import PropTypes from 'prop-types';
import Slot from 'rsg-components/Slot';
import SectionHeadingRenderer from 'rsg-components/SectionHeading/SectionHeadingRenderer';
var SectionHeading = function SectionHeading(_ref) {
  var slotName = _ref.slotName,
    slotProps = _ref.slotProps,
    children = _ref.children,
    id = _ref.id,
    href = _ref.href,
    rest = _objectWithoutPropertiesLoose(_ref, ["slotName", "slotProps", "children", "id", "href"]);
  return /*#__PURE__*/React.createElement(SectionHeadingRenderer, _extends({
    toolbar: /*#__PURE__*/React.createElement(Slot, {
      name: slotName,
      props: slotProps
    }),
    id: id,
    href: href
  }, rest), children);
};
SectionHeading.propTypes = {
  children: PropTypes.any,
  id: PropTypes.string.isRequired,
  slotName: PropTypes.string.isRequired,
  slotProps: PropTypes.any.isRequired,
  depth: PropTypes.number.isRequired,
  deprecated: PropTypes.bool,
  pagePerSection: PropTypes.bool
};
export default SectionHeading;