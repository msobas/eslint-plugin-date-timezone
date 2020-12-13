/**
 * @fileoverview This plugin won&#39;t allow to use Date with short string
 * @author Mateusz Sobas
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");

module.exports.configs = {
  recommended: {
    rules: {
      "date-timezone/eslint-plugin-date-timezone": 2,
    },
  },
};
