import isValid from "./isValid";

const toggleClassIfInvalid = (input) => {
  if (isValid(input)) {
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
  }
};

export default toggleClassIfInvalid;
