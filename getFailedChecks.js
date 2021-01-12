import getChecks from "./getChecks";
import getValue from "./getValue";
import checkValue from "./checkValue";

const getFailedChecks = (input) => {
  let checks = getChecks(input);
  let value = getValue(input);
  let failedChecks = [];

  checks.forEach((check) => {
    if (!checkValue(check, value)) {
      failedChecks.push(check);
    }
  });

  return failedChecks;
};
export default getFailedChecks;
