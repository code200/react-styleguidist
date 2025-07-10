import "core-js/modules/es.array.map";
import "core-js/modules/es.function.name";
import "core-js/modules/es.object.assign";
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) { ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import Styled from 'rsg-components/Styled';
import Argument from 'rsg-components/Argument';
import Heading from 'rsg-components/Heading';
export var styles = function styles(_ref) {
  var space = _ref.space;
  return {
    root: {
      marginBottom: space[2],
      fontSize: 'inherit'
    },
    headingWrapper: {
      marginBottom: space[0]
    }
  };
};
export var ArgumentsRenderer = function ArgumentsRenderer(_ref2) {
  var classes = _ref2.classes,
    args = _ref2.args,
    heading = _ref2.heading;
  if (args.length === 0) {
    return null;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: classes.root
  }, heading && /*#__PURE__*/React.createElement("div", {
    className: classes.headingWrapper
  }, /*#__PURE__*/React.createElement(Heading, {
    level: 5
  }, "Arguments")), args.map(function (arg) {
    return /*#__PURE__*/React.createElement(Argument, _extends({
      key: arg.name
    }, arg));
  }));
};
export default Styled(styles)(ArgumentsRenderer);