const getChecks = (input) => {
  let checkString = input.getAttribute("checks");
  return checkString === null ? [] : checkString.split(",");
};

export default getChecks;
