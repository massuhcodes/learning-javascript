/**
 * Simulate a bank account supporting opening/closing, withdrawals, and
 * deposits of money. Watch out for concurrent transactions!
 */

export class BankAccount {
    constructor() {
        this.account_closed = true;
    }

    open() {
        // throws if already open
        if (this.account_closed === false) {
            throw new ValueError();
        }
        this.current_amount = 0;
        this.account_closed = false;
    }

    close() {
        this.check_if_closed();
        this.account_closed = true;
    }

    deposit(amount) {
        this.check_if_closed();
        if (amount < 0) {
            throw new ValueError();
        }
        this.current_amount += amount;
    }

    withdraw(amount) {
        this.check_if_closed();
        if (amount > this.current_amount || amount < 0) {
            throw new ValueError();
        }
        this.current_amount -= amount;
    }

    get balance() {
        this.check_if_closed();
        return this.current_amount;
    }

    check_if_closed() {
        if (this.account_closed === true) {
            throw new ValueError();
        }
    }
}

export class ValueError extends Error {
    constructor() {
        super("Bank account error");
    }
}
