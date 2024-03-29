class Valid9 {
  constructor(ruleSets) {
    if (ruleSets === undefined) throw new Error('Valid 9 requires arguments');

    this.ruleSets = ruleSets;

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

module.exports = Valid9;
