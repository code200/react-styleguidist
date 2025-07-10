"use strict";

exports.__esModule = true;
exports.default = void 0;
var _githubSlugger = _interopRequireDefault(require("github-slugger"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Export the singleton instance of GithubSlugger
var _default = exports.default = new _githubSlugger.default();