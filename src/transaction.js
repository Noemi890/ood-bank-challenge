class Transaction {

    static deposit(date, type, amount, balance) {
        const transaction = {
            date: date,
            type: type,
            amount: amount,
            balance: balance
        }
        return transaction
    }

    static withdrawal(date, type, amount, balance) {
        const transaction = {
            date: date,
            type: type,
            amount: amount,
            balance: balance
        }
        return transaction
    }
}

module.exports = Transaction