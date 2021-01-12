import checkValue from "./checkValue";
import getChecks from "./getChecks";
import getValue from "./getValue";

const isValid = (input) => {
  let checks = getChecks(input);
  let value = getValue(input);
  let valid = true;

  checks.forEach((check) => {
    valid = checkValue(check, value) ? valid : false;
  });

  return valid;
};

export default isValid;
