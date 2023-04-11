// Celsius para Fahrenheit = (0 °C × 9/5) + 32 = 32 °F
// Fahrenheit para Celsius = (32 °F − 32) × 5/9 = 0 °C

function toFahrenheit(celsius){
    const result = (celsius * 9/5) + 32;
    return result;
}

function toCelsius(fahrenheit){
    const result = (fahrenheit - 32) * (5/9);
    return result;
}

module.exports = { toFahrenheit, toCelsius };