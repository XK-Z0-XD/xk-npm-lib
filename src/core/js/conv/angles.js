
/**
 * angles.js
 * TODO: add functions:
 *
 * 
 */
const values = { DEG = 180 };
var angles = {};
/**
 * converts degrees to radians
 * @param {number} degrees
 */
export const Radians = function (degrees) {
    let rad = 0;
    rad = degrees * (1 / 180);
    return rad;
}
/**
 * converts radians to degrees
 * @param {number} radians
 */
export const Degrees = function (radians) {
    let deg = 0;
    deg = radians * 180;
    return deg;
}
exports.Coterminal = function (x) {

}
