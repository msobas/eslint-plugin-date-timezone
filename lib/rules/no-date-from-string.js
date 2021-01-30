/**
 * @fileoverview This rule will not allow to create new Date with string argument
 * @author Mateusz Sobas
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function (context) {
  return {
    NewExpression: function (node) {
      var argument;
      try {
        argument = node.arguments[0];
      } catch (e) {}

      if (
        node.callee.name === "Date" &&
        argument &&
        typeof argument.value === "string"
      ) {
        context.report(node, "Please don't use Date with string values");
      }
    },
  };
};

module.exports.schema = [];
