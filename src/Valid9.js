import { defaultRuleSet } from './ruleSets/defaultRuleSet';

export class Valid9 {
  constructor(ruleSets = {}, incDefaultRuleSet = true) {
    const addRuleSet = incDefaultRuleSet ? defaultRuleSet : {};
    this.ruleSets = { ...ruleSets, ...addRuleSet };

    this.createRules();
  }

  createRules() {
    this.rules = {};
    const ruleSetEntries = Object.entries(this.ruleSets);

    ruleSetEntries.forEach(([ruleName, ruleCreator]) => {
      this.rules[ruleName] = function fn(...props) {
        return (val) => {
          const { condition, msg } = ruleCreator(val, ...props);
          return condition || msg;
        };
      };
    });
  }
}
