//Loan
/**
 * @class Loan
 * 
 * 
 */
exports.Loan = class {
    constructor() {
        this.amount = 0;
        this.rate = 0;
        this.term = 0;
    }
    /**
     * overload constructor
     * for loan class
     * @param {number} amount
     * @param {number} rate
     * @param {number} term
     */
    constructor(amount, rate, term) {
        this.amount = amount;
        this.rate = rate; this.term = term;

    }

    getAmount() { return this.amount; }
    getRate() { return this.rate; }
    getTerm() { return this.term; }

    setAmount(_amount) { this.amount = this.amount; }
    setRate(rate) { this.rate = rate; }
    setTerm(_term) { this.term = _term; }

    isValid() {
        valid = true;
        if () {

        }
        return true;
    }
    buildLoan() {

    }
}