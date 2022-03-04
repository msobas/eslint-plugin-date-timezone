/**
 * @fileoverview This rule will not allow to create new Date with string argument
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

var expectedErrors = [
  {
    message: "Please don't use Date with string values",
    type: "NewExpression",
  },
];

var ruleTester = new RuleTester();
ruleTester.run("eslint-plugin-date-timezone", rule, {
  valid: [
    // give me some code that won't trigger a warning
    "new Date()",
    "new Date(1577833200000)",
    "new Date(2020, 0, 1)",
    "const number = 1577833200000; const date = new Date(number);",
    "Date('2020-01-01')", // does not check CallExpression
  ],

  invalid: [
    {
      code: "new Date('2020-01-01')",
      errors: expectedErrors,
    },
    {
      code: "new Date('2020-01-01T00:00:00')",
      errors: expectedErrors,
    },
    {
      code: "const localisedDate = new Date('2020-01-01');",
      errors: expectedErrors,
    },
    {
      code: "const str = '2020-01-01'; const date = new Date(str);", //
      errors: expectedErrors,
    },
  ],
});
