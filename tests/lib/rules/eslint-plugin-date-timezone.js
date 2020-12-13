/**
 * @fileoverview This rule won&#39;t allow to use Date with short string
 * @author Mateusz Sobas
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/eslint-plugin-date-timezone"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("eslint-plugin-date-timezone", rule, {
  valid: [
    // give me some code that won't trigger a warning
    "new Date()",
    "Date(1577833200000)",
    "new Date(2020, 0, 1)",
  ],

  invalid: [
    {
      code: 'new Date("2020-01-01")',
      errors: [
        {
          message: "Please provide full date string with time included.",
          type: "ExpressionStatement",
        },
      ],
    },
    {
      code: 'new Date("2020-01-01T00:00:00")',
      errors: [
        {
          message: "Please provide full date string with time included.",
          type: "ExpressionStatement",
        },
      ],
    },
  ],
});
