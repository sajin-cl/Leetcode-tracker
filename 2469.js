
var convertTemperature = function (celsius) {

  let result = []
  const kelvin = (celsius + 273.15).toFixed(5)

  const Fahrenheit = (celsius * 1.80 + 32.00).toFixed(5)

  calc = `${kelvin},${Fahrenheit}`;

  result.push(calc);
  return result;
};

console.log(convertTemperature(122.11));