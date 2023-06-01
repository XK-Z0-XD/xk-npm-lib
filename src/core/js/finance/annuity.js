const { error } = require("jquery");


export class Annuity {
    constructor(amount, rate, term) {
        this.amount = 0;
        this.rate = 0;
        this.term = 0;
        this._error = "";
    }

    getAmount() { return this.amount; }
    getRate() { return this.rate; }
    getTerm() { return this.term; }

    setAmount(_amount) { this.amount = this.amount; }
    setRate(rate) { this.rate = rate; }
    setTerm(_term) { this.term = _term; }

    isValid() {
        let valid = true;
        if (this.amount <= 0) { valid = false; this._error += "amount cannot be less than 0 \n"; }
        if (this.rate <= 0) { valid = false; this._error += "rate cannot be less than 0 \n"; }
        if (this.term <= 0) { valid = false; this._error += "term cannot be less than 0 \n"; }
        return valid;
    }
    build() {
        //TODO: BUILD ANNUITY
        log("Build: TO BE IMPLEMENTED");
    }

}