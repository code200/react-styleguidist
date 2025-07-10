"use strict";

exports.__esModule = true;
exports.default = highlightCode;
var _glogg = _interopRequireDefault(require("glogg"));
var Prism = _interopRequireWildcard(require("prismjs"));
require("prismjs/components/prism-clike");
require("prismjs/components/prism-markup");
require("prismjs/components/prism-markdown");
require("prismjs/components/prism-css");
require("prismjs/components/prism-css-extras");
require("prismjs/components/prism-scss");
require("prismjs/components/prism-less");
require("prismjs/components/prism-javascript");
require("prismjs/components/prism-flow");
require("prismjs/components/prism-typescript");
require("prismjs/components/prism-jsx");
require("prismjs/components/prism-tsx");
require("prismjs/components/prism-graphql");
require("prismjs/components/prism-json");
require("prismjs/components/prism-bash");
require("prismjs/components/prism-diff");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const logger = (0, _glogg.default)('rsg');
const IGNORED_LANGUAGES = ['extend', 'insertBefore', 'DFS'];
const getLanguages = () => Object.keys(Prism.languages).filter(x => !IGNORED_LANGUAGES.includes(x));

/**
 * Highlight code.
 *
 * @param {string} code
 * @param {string} lang
 * @returns {string}
 */
function highlightCode(code, lang) {
  if (!lang) {
    return code;
  }
  const grammar = Prism.languages[lang];
  if (!grammar) {
    logger.warn(`Syntax highlighting for “${lang}” isn’t supported. Supported languages are: ${getLanguages().join(', ')}.`);
    return code;
  }
  return Prism.highlight(code, grammar, lang);
}