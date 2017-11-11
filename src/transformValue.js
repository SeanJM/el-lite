import propertyUnit from "./propertyUnit";

function transformValue(name, value) {
  var result = [];

  if (typeof value === "object") {
    if (value.x) {
      result.push(
        propertyUnit(name, value.x)
      );
    }

    if (value.y) {
      result.push(
        propertyUnit(name, value.y)
      );
    }

    if (value.z) {
      result.push(
        propertyUnit(name, value.z)
      );
    }
  } else {
    result.push(
      propertyUnit(name, value)
    );
  }

  return name + "(" + result.join(", ") + ")";
}

export default transformValue;