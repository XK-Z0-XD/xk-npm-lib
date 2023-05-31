
const stats = { ERROR = 0, NORMAL=1, INFO=2, };

const titles = ["ERROR", "MESSAGE", "INFO"]
/**
 * Displays a Message Box 
 * (0) error message
 * (1) normal message
 * (2) info message
 * @param {any} msg
 * @param {any} container
 * @param {any} options
 */
async function message(message, container = document.getElementById("message"), options) {
    var msg_title, msg_content, msg_status, msg_display_time;
    let {
        status = 1,
        title = titles[1],
        buttons = { ok = false, cancel = false },
        content = "",
        div = container,
    } = msg_options;
    if (!options) {
        options = msg_options;
    }
    if (title.length > 0) {

    } else {
        msg_title = 
    }
};

export { message };