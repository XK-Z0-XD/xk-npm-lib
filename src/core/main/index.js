/**
 module: classes module.
 
 */

/**
 * 
 * */
class tty {

}
/**
 * This Class is for info about a Realworld location
 * @class Location
 * @classdesc {this class }
 * 
 * */
class Location {
    /**
     * 
     * @param {any} name
     * @param {string} street_addr
     * @param {string} street_addr_2
     * @param {string} city
     * @param {string} state
     * @param {number} zip
     */
    constructor(name, street_addr, street_addr_2, city, state, zip) {
        this.name = name; this.street_addr = street_addr;
        this.street_addr_2 = street_addr_2; this.city = city; this.state = state; this.zip = zip;
    }
}
class User {
    constructor(username, password) {

    }
}
class Person {
    constructor() {
        this.pid = 0;
        this.fname = "";
        this.lname = "";
        this.mid_init = "";
        this.dob = "";

    }
}
class Journal {

}
class JournalPage {

}
module.id = "my_classes";
export { Location, User, Person };