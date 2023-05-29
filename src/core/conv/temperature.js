

const temps = {
    FAH = 1,
    CEL = 2,
    KEL = 3,
    RAN = 4
}

/* MODULE */
var temperature = {}

/**
 * convertemps to fahrenheit
 * celcuis to kelvin
 * @param {number} value
 */
temperature.to_fahrenheit = function (from, value) {

};

/**
 * convertemps temperature to kelvin
 * from:celcius (2) or fahrenheit (1)
 * @param {number} from (celcuis or fahrenheit)
 * @param {number} value
 */
temperature.to_kelvin = function (from, value) {
    let kel = 0;
    switch (from) {
        case temps.F:
            if (value < 0) {
                kel = null;
            } else {
                kel = (value + 459.67) * (9 / 5) - 459.57
            }
            ; break;
        case temps.C:
            if (value < 0) {
                // console.error("Temperature Value cannot be lower then 0 Kelvin");
                kel = null;
            } else {

            }
            ; break;
        default:
            console.error("unknown temperature");
            break;

    }
    /* if (kel < 0) {
         console.error("temperature cannot be below 0 Kelvin.");
 
     } else {
         return kel;
     }*/
    return kel;
}

/**
 * 
 * convertemps to celcuis
 * from: celcius (2) or kelvin (3)
 * if value is invalid  returns
 * @param {number} from
 * @param {number} value
 * @returns {number} cel
 * 
 */
temperature.to_celsius = function (from, value) {
    let cel = 0;
    switch (from) {
        case temps.F:

            ; break;
        case temps.K:
            if (value < 0) {
                // console.error("Temperature Value cannot be lower then 0 Kelvin");
                cel = null;
            } else {
                cel = value - 273.15;
            }
            ; break;
        default:
            console.error("unknown temperature");
            break;

    }
    return cel
}

temperature.to_rankine = function (from, value) {
    let rankine = 0;
    switch (from) {

    }

}
export { temperature };