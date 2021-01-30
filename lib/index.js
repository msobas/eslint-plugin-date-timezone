/**
 * @fileoverview This plugin allows to validate usage of Date to work appriopriatly with timezones
 * @author Mateusz Sobas
 */
"use strict";

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = {
  "no-date-from-string": require("./rules/no-date-from-string"),
};

module.exports.configs = {
  recommended: {
    rules: {
      "date-timezone/no-date-from-string": 2,
    },
  },
};
