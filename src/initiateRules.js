const Valid9 = require('./Valid9');

const initiateRules = (ruleSet = {}, incDefaultRuleSet = true) => {
  const valid9Obj = new Valid9(ruleSet, incDefaultRuleSet);

  return valid9Obj.rules;
};

module.exports = initiateRules;
