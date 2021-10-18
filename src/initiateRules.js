import { Valid9 } from './Valid9';

export const initiateRules = (ruleSet = {}, incDefaultRuleSet = true) => {
  const valid9Obj = new Valid9(ruleSet, incDefaultRuleSet);

  return valid9Obj.rules;
};
