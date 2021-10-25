const _ = require('lodash').default;

const defaultRuleSet = {
  minLength(val, param1) {
    const condition = val.length >= param1;
    const msg = `${val} must be at least ${param1} chars long`;

    return { condition, msg };
  },
  maxLength(val, param1) {
    const condition = val.length <= param1;
    const msg = `${val} must be at most ${param1} chars long`;

    return { condition, msg };
  },
  minMaxLength(val, param1, param2) {
    const condition = val.length >= param1 && val.length <= param2;
    const msg = `${val} must be ${param1} - ${param2} chars long`;

    return { condition, msg };
  },
  moreThan(val, param1) {
    const condition = parseFloat(val) > parseFloat(param1);
    const msg = 'someMsg';
    return { condition, msg };
  },

  lessThan(val, param1) {
    const condition = parseFloat(val) < parseFloat(param1);
    const msg = 'someMsg';
    return { condition, msg };
  },

  maxChars(val, param1) {
    const condition = val.length <= param1;
    const msg = 'someMsg';
    return { condition, msg };
  },

  minChars(val, param1) {
    const condition = val.length >= param1;
    const msg = 'someMsg';
    return { condition, msg };
  },

  doesNotEqual(val, param1) {
    const paramArr = Array.isArray(param1) ? param1 : [param1];
    const condition = paramArr.every((x) => val !== x);
    const msg = 'someMsg';
    return { condition, msg };
  },

  isNotBlank(val) {
    const condition = !val;
    const msg = 'someMsg';
    return { condition, msg };
  },
  isNumber(val) {
    const condition = _.isNumber(val);
    const msg = 'someMsg';
    return { condition, msg };
  },
  isInt(val) {
    const condition = _.isInteger(val);
    const msg = 'someMsg';
    return { condition, msg };
  },
};

module.exports = defaultRuleSet;
