

exports.Annuity = class {
    constructor(amount, rate, term) {
        this.amount = 0;
        this.rate = 0;
        this.term = 0;

    }
    getAmount() { return this.amount; }
    getRate() { return this.rate; }
    getTerm() { return this.term; }

    setAmount(_amount) { this.amount = this.amount; }
    setRate(rate) { this.rate = rate; }
    setTerm(_term) { this.term = _term; }

    build() {
        //TODO: BUILD ANNUITY
    }
}