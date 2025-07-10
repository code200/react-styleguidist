"use strict";

exports.__esModule = true;
exports.ACORN_OPTIONS = void 0;
exports.default = getAst;
var _acorn = require("acorn");
var _glogg = _interopRequireDefault(require("glogg"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const logger = (0, _glogg.default)('rsg');
const ACORN_OPTIONS = exports.ACORN_OPTIONS = {
  ecmaVersion: 2019,
  sourceType: 'module'
};

/**
 * Parse source code with Acorn and return AST, returns undefined in case of errors
 */
function getAst(code, plugins = []) {
  const parser = _acorn.Parser.extend(...plugins);
  try {
    return parser.parse(code, ACORN_OPTIONS);
  } catch (err) {
    if (err instanceof Error) {
      logger.debug(`Acorn cannot parse example code: ${err.message}\n\nCode:\n${code}`);
      return undefined;
    }
    return undefined;
  }
}