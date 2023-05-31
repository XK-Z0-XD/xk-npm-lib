import { error } from "jquery";

/* MODULE */
export static class temperature {
    constants = {
        FAH = 1,
        CEL = 2,
        KEL = 3,
        RAN = 4
    }

    /**
   * 
   * converconstants to celcuis
   * from: celcius (2) or kelvin (3)
   * if value is invalid  returns
   * @param {number} from
   * @param {number} value
   * @returns {number} cel
   * 
   */
    celsius = function (from, value) {
        var cel = 0;
        switch (from) {
            case constants.FAH:
                if (value < 0) {
                    error("");
                } else {
                    cel = (value - 32) * (5 / 9);
                }
                ; break;
            case constants.KEL:
                if (value < 0) {
                    // console.error("Temperature Value cannot be lower then 0 Kelvin");
                    cel = null;
                } else {
                    cel = value - 273.15;
                }
                ; break;
            case constants.RAN:
                ; break;
            default:
                console.error("unknown temperature");
                break;

        }
        return cel
    }

    /**
     * 
     * @param {any} from
     * @param {number} value
     */
    fahrenheit = function (from, value) {
        var fah = 0;
        switch (from) {
            case constants.CEL:
                if (kelvin(celsius) < 0) {
                    console.error("temperature cannot be less than 0K");

                } else {
                    fah = (celsius * (9 / 5)) + 32;
                }
                ; break;
            case constants.KEL:
                fah = (value + 459.67) * (5 / 9);
                ; break;
            case constants.RAN: fah = value - 459.67; break;
            default: console.error("Unknown Temperature Type"); break;
        }
        return fah;
    }
    /**
     * converconstants temperature to kelvin
     * from:celcius (2) or fahrenheit (1)
     * @param {number} from (celcuis or fahrenheit)
     * @param {number} value
     */
    kelvin = function (from, value) {
        var kel = 0;
        switch (from) {
            case constants.FAH:
                if (value < 0) {
                    kel = null;
                } else { kel = (value + 459.67) * (9 / 5) - 459.57; }
                break;
            case constants.CEL:
                if (value < 0) {
                    // console.error("Temperature Value cannot be lower then 0 Kelvin");
                    kel = null;
                } else { kel = value + 273.15; }
                break;
            case constants.RAN:
                kel = value * (5 / 9); break;
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
     * @param {number} from
     * @param {number} value
     */
    rankine = function (from, value) {
        var rankine = 0;
        switch (from) {
            case constants.FAH:
                rankine = value + 459.67;
                ; break;
            case constants.CEL:
                ; break;
            case constants.KEL:
                if (value < 0) {

                } else {
                    rankine = value * (9 / 5);
                }
                ; break;
            default:
                console.error("Unknown Temperature Type");
                break;

        }
        return rankine;
    }
}


exports.temperature;