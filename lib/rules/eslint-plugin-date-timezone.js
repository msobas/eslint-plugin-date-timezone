/**
 * @fileoverview This rule won't allow to use Date with short string
 * @author Mateusz Sobas
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function (context) {
  return {
    ExpressionStatement: function (node) {
      var argument = node.expression.arguments[0];
      if (
        node.expression.type === "NewExpression" &&
        node.expression.callee.name === "Date" &&
        argument &&
        typeof argument.value === "string" // &&
        // node.expression.arguments[0].value.length <= 10 // 2020-01-01
      ) {
        context.report(
          node,
          "Please provide full date string with time included."
        );
      }
    },
  };
};
