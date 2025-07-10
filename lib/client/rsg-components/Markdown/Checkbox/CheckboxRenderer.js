import "core-js/modules/es.array.index-of";
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) { ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) { if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } } return t; }
import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';
var styles = function styles() {
  return {
    input: {
      isolate: false,
      display: 'inline-block',
      verticalAlign: 'middle'
    }
  };
};
export var CheckboxRenderer = function CheckboxRenderer(_ref) {
  var classes = _ref.classes,
    rest = _objectWithoutPropertiesLoose(_ref, ["classes"]);
  return /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    type: "checkbox",
    className: classes.input
  }));
};
CheckboxRenderer.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired
};
export default Styled(styles)(CheckboxRenderer);