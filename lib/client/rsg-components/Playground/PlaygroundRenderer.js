import "core-js/modules/es.array.index-of";
import "core-js/modules/es.function.name";
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) { ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) { if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } } return t; }
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import Styled from 'rsg-components/Styled';
export var styles = function styles(_ref) {
  var space = _ref.space,
    color = _ref.color,
    borderRadius = _ref.borderRadius;
  return {
    root: {
      marginBottom: space[4]
    },
    preview: {
      padding: space[2],
      border: [[1, color.border, 'solid']],
      borderRadius: borderRadius,
      // the next 2 lines are required to contain floated components
      width: '100%',
      display: 'inline-block'
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: space[1]
    },
    toolbar: {
      marginLeft: 'auto'
    },
    tab: {},
    // expose className to allow using it in 'styles' settings
    padded: {
      // add padding between each example element rendered
      '& > *': {
        isolate: false,
        marginLeft: -space[1],
        marginRight: -space[1],
        '& > *': {
          isolate: false,
          marginRight: space[1],
          marginLeft: space[1]
        }
      }
    }
  };
};
export var PlaygroundRenderer = function PlaygroundRenderer(_ref2) {
  var _cx;
  var classes = _ref2.classes,
    exampleIndex = _ref2.exampleIndex,
    name = _ref2.name,
    padded = _ref2.padded,
    preview = _ref2.preview,
    previewProps = _ref2.previewProps,
    tabButtons = _ref2.tabButtons,
    tabBody = _ref2.tabBody,
    toolbar = _ref2.toolbar;
  var className = previewProps.className,
    props = _objectWithoutPropertiesLoose(previewProps, ["className"]);
  var previewClasses = cx(classes.preview, className, (_cx = {}, _cx[classes.padded] = padded, _cx));
  return /*#__PURE__*/React.createElement("div", {
    className: classes.root,
    "data-testid": name + "-example-" + exampleIndex
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: previewClasses
  }, props, {
    "data-preview": name,
    "data-testid": "preview-wrapper"
  }), preview), /*#__PURE__*/React.createElement("div", {
    className: classes.controls
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.tabs
  }, tabButtons), /*#__PURE__*/React.createElement("div", {
    className: classes.toolbar
  }, toolbar)), /*#__PURE__*/React.createElement("div", {
    className: classes.tab
  }, tabBody));
};
PlaygroundRenderer.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  exampleIndex: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  padded: PropTypes.bool.isRequired,
  preview: PropTypes.any.isRequired,
  previewProps: PropTypes.object.isRequired,
  tabButtons: PropTypes.any.isRequired,
  tabBody: PropTypes.any.isRequired,
  toolbar: PropTypes.any.isRequired
};
export default Styled(styles)(PlaygroundRenderer);