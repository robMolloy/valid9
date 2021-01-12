import getChecks from "./getChecks";
import getValue from "./getValue";
import checkValue from "./checkValue";

const getPassedChecks = (input) => {
  let checks = getChecks(input);
  let value = getValue(input);
  let passedChecks = [];

  checks.forEach((check) => {
    if (checkValue(check, value)) {
      passedChecks.push(check);
    }
  });

  return passedChecks;
};
export default getPassedChecks;
