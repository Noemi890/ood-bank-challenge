const Transaction = require('./transaction')

class BankAccount {

    constructor() {
        this.balance = 0
        this.transactions = [] 
    }

    getTransactions() {
        return this.transactions
    }

    getBalance() {
        return this.balance
    }

    credit(date, type, amount) {
        this.balance += amount
        this.transactions.unshift(Transaction.deposit(date, type, amount, this.balance)) 
        return this.balance
    }

    debit(date, type, amount) {
        if (amount < this.balance) {
            this.balance -= amount
            this.transactions.unshift(Transaction.withdrawal(date, type, amount, this.balance))
            return this.balance
        }

        throw new Error('Balance too low')
    }

}

module.exports = BankAccount