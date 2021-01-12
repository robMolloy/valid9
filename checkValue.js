const checkValue = (check, value) => {
  let checkArray = check.split("_");
  check = checkArray[0];
  let checkInfo = checkArray[1] === undefined ? "" : checkArray[1];

  switch (checkArray[0]) {
    case "":
      return true;

    case "moreThan":
      return parseFloat(value) > parseFloat(checkArray[1]);

    case "lessThan":
      return parseFloat(value) < parseFloat(checkArray[1]);

    case "maxChars":
      return value.length <= checkArray[1];

    case "minChars":
      return value.length >= checkArray[1];

    case "doesNotEqual":
      return value != checkArray[1];

    case "isTimestamp":
      return value == parseInt(value);

    case "isTimeString":
      return new Date(`1970-01-01 ${value}`) != "Invalid Date";

    case "isTimeString":
      return new Date(`${value}`) != "Invalid Date";

    case "isNotBlank":
      return value != "";

    case "isNumber":
      return value == parseFloat(value);

    case "isInt":
      if (checkInfo == "positive" && parseInt(value) <= 0) {
        return false;
      }
      if (checkInfo == "negative" && parseInt(value) >= 0) {
        return false;
      }
      return value == parseInt(value);

    case "isFloat":
      return value == parseFloat(value);

    case "isPrice":
      return value == parseFloat(value);
  }
  console.error(`The function checkValue() does not have a test for ${check}`);
};

export default checkValue;
