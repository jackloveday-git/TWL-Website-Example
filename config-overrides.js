const { removeModuleScopePlugin } = require("customize-cra");

module.exports = function override(config, env) {
  if (!config.plugins) {
    config.plugins = [];
  }
  removeModuleScopePlugin()(config);

  return config;
};

// const express = require('express');
// const path = require('path');
// const app = express();

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.listen(9000);