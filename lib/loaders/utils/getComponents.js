"use strict";

exports.__esModule = true;
exports.default = getComponents;
var _processComponent = _interopRequireDefault(require("./processComponent"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Process each component in a list.
 *
 * @param {Array} components File names of components.
 * @param {object} config
 * @returns {object|null}
 */
function getComponents(components, config) {
  return components.map(filepath => (0, _processComponent.default)(filepath, config));
}