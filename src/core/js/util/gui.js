

const default_options = {
    OKBtn = true,
    CancelBtn = false,
    Title = "Window",
    isPrompt = false,
    pinputs = {},

};
const default_window = {
    draggable = false,
    sizable = false,
    minlength = 50,
    minwidth = 50,
    window_title = "Window"
}
const retro_themes = {
    GREEN = 0,
    BLUE = 1,
    RED = 2
}
const msg_box_colors = {
    green = { bg = "", fg="" },
    red= { bg = "", fg="" },
    blue= { bg = "", fg="" },
}
const def_msg_type = {

    ERROR = 0,
    INFO = 1,
    PROMPT = 2,
    DEBUGGING = 3,
}
/**
 * for gui object
 * @class gui
 * @method popup_box
 * */
class gui {



}
/**
 * creates a new div box with the specified theme
 * @param {number} theme
 */
const new_box = function (theme) {
    console.log("gui - new_box: TO BE IMPLEMENTED");
}
/**
   * Creates a Gui Popup box
   * Message box (1) appears Green
   * Error Box (2) appears Red
   * Prompt Box (3) appears Blue
   * @param {number} status
   * @param {string} message
   * @param {any} options
   */
function popup_box(status, message, options) {
    console.log("gui - popup_box: TO BE IMPLEMENTED");

    if (status == def_msg_type.ERROR) {
        //TODO: Generate an Error Box
    } else if (status === def_msg_type.INFO) {
        //TODO: GENERATE INFO BOX
    } else if (status === def_msg_type.PROMPT) {
        //TODO: Generate prompt Box
    }
}
/**
     * 
     * @param {string} title
     * @param {boolean} draggable
     * @param {boolean} sizable
     */
function appWindow(title, options) {
    console.log("gui - appWindow: TO BE IMPLEMENTED");

    var app_window = null;

    return app_window
}
export { popup_box, AppWindow, new_box };