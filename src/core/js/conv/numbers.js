const { func } = require("prop-types")
module.id = "numsconv";
module.filename = 'numbers.js';
/**
 * Number Conversions
 * ASCII -> DECIMAL
 * ASCII -> BIN
 * ASCII -> HEX
 * ASCII -> OCTAL
 * 
 */
const default_values = {
    BIN = 2,
    HEX = 6,
    DEC = 0,
    OCT = 8
}
export static class num_conv {
    /**@type const  */
    from_vals = { ASCII = 0, BIN=1, DEC=2, HEX=3, OCT=4 }
    /**
     * 
     * @param {number} from
     * @param {number} value
     */
    to_bin = function (from, value) {
        let output = null;
        //TODO: Code Here
        return output;
    }
    /**
     * converts [ASCII/BIN/HEX/OCTAL] to Decimal
     * @access public
     * @param {number} from
     * @param {number} value
     */
    to_dec = function (from, value) {
        let output = null;
        //TODO: Code Here
        return output;
    }
    to_hex = function (from, value) {
        let output = null;

        //TODO: Code Here
        return output;
    }
    to_octal = function (from, value) {
        let output = null;
        //TODO: Code Here
        return output;
    }

    to_ascii = function (from, value) {
        let output = null;
        //TODO: Code Here
        return output;
    }

}
