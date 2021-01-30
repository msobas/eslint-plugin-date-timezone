/**
 * @fileoverview This plugin won&#39;t allow to use Date with short string
 * @author Mateusz Sobas
 */
"use strict";

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules

module.exports.rules = {
  "no-full-fp-lib": require("./rules/no-date-from-string"),
};

module.exports.configs = {
  recommended: {
    rules: {
      "date-timezone/no-date-from-string": 2,
    },
  },
};
