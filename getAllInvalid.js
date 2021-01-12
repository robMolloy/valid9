import isValid from "./isValid";

const getAllInvalid = (inputs) => {
  inputs = typeof inputs === "object" ? inputs : [inputs];

  let invalidInputs = [];
  for (let input of inputs) {
    if (!isValid(input)) {
      invalidInputs.push(input);
    }
  }
  return invalidInputs;
};

export default getAllInvalid;
