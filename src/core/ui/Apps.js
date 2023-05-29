/***
 * This file is for gui app appearances
 * functions:
 * App
 *
 *
 *
 */
/*Default options */
const opt = {
    width = 25,
    height = 25,
    back_color = '#000',
    border = { color = '', thickness= 5 }

};
class App {
    constructor(title) {
        this.appWindow = null;
    }
    get_window() {
        return this.appWindow;
    }

}

var gui_app = {
    new_window = function (title, options) {

    },

};
export { App, gui_app };