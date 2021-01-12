import isValid from "./isValid";

const getAllValid = (inputs) => {
  inputs = typeof inputs === "object" ? inputs : [inputs];

  let validInputs = [];
  for (let input of inputs) {
    if (isValid(input)) {
      validInputs.push(input);
    }
  }
  return validInputs;
};

export default getAllValid;
