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
      var value;
      try {
        argument = node.arguments[0];
      } catch (e) {}

      if (node.callee.name === "Date" && argument) {
        if (argument.type === "Literal") {
          value = argument.value;
        }
        if (argument.type === "Identifier") {
          const { set } = context.getScope();
          try {
            value = set.get(argument.name).defs[0].node.init.value;
          } catch (e) {}
        }
      }

      if (typeof value === "string") {
        context.report(node, "Please don't use Date with string values");
      }
    },
  };
};

module.exports.schema = [];
