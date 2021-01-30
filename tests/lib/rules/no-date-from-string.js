/**
 * @fileoverview This rule won&#39;t allow to use Date with short string
 * @author Mateusz Sobas
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-date-from-string"),
  RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
});

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
    "Date('2020-01-01')", // does not check CallExpression
  ],

  invalid: [
    {
      code: 'new Date("2020-01-01")',
      errors: [
        {
          message: "Please don't use Date with string values",
          type: "NewExpression",
        },
      ],
    },
    {
      code: 'new Date("2020-01-01T00:00:00")',
      errors: [
        {
          message: "Please don't use Date with string values",
          type: "NewExpression",
        },
      ],
    },
    {
      code: 'const localisedDate = new Date("2020-01-01");',
      errors: [
        {
          message: "Please don't use Date with string values",
          type: "NewExpression",
        },
      ],
    },
  ],
});
