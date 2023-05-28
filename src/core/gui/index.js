
const INFO_MSG = 1;
const default_options = {
    OKBtn = true,
    CancelBtn = false,
    Title = "Window",
    isPrompt = false,
    pinputs = {},

};
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
 * Msg-box
 * 
 * */
class GuiWindow {
    constructor(window_type, options) {

    }
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
var Popupbox = function (status, message, options) {
    if (status == def_msg_type.ERROR) {
        //TODO: Generate an Error Box
    } else if (status === def_msg_type.INFO) {
        //TODO: GENERATE INFO BOX
    } else if (status === def_msg_type.PROMPT) {
        //TODO: Generate prompt Box
    }
}
export { Popupbox, GuiWindow };