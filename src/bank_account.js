const Transaction = require('./transaction')
const Statement = require('./statement')

class BankAccount {

    constructor() {
        this.balance = 0
        this.transactions = [] 
    }

    getTransactions() {
        return this.transactions
    }

    getStatement() {
        const statement = new Statement()
        return statement.printStatement(this.getTransactions())
    }

    transaction(date, type, amount) {
        if (type === 'credit') {
        const transaction = new Transaction()
        this.balance += amount
        this.transactions.unshift(transaction.deposit(date, type, amount, this.balance)) 
        return this.balance
        }
        if (type === 'debit' && amount < this.balance) {
            const transaction = new Transaction()
            this.balance -= amount
            this.transactions.unshift(transaction.withdrawal(date, type, amount, this.balance))
            return this.balance
        }

        throw new Error('Balance too low')
    }

}

module.exports = BankAccount