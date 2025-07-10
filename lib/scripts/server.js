"use strict";

exports.__esModule = true;
exports.default = server;
var _createServer = _interopRequireDefault(require("./create-server"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function server(config, callback) {
  const env = 'development';
  const serverInfo = (0, _createServer.default)(config, env);
  serverInfo.app.startCallback(callback);
  return serverInfo;
}