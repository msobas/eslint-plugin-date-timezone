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
      var argument;
      try {
        argument = node.expression.arguments[0];
      } catch (e) {}

      if (
        node.expression.type === "NewExpression" &&
        node.expression.callee.name === "Date" &&
        argument &&
        typeof argument.value === "string"
      ) {
        context.report(
          node,
          "Please provide full date string with time included."
        );
      }
    },
  };
};

module.exports.schema = [];
