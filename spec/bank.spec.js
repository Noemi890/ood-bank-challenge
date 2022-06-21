const BankAccount = require('../src/bank_account')
const Statement = require('../src/statement')
const Transaction = require('../src/transaction')

describe('Bank Account', () => {
    let bank_account

    beforeEach(() => {
        bank_account = new BankAccount()
    })

    it('Deposit money on bank account', () => {
        const expected = 1000
        const result = bank_account.transaction('10.01.2012', 'credit', 1000)
        expect(result).toEqual(expected)
    })

    it('Withdraw money succesfully', () => {
        bank_account.transaction('10.01.2012', 'credit', 1000)
        bank_account.transaction('13.01.2012', 'credit', 2000)
        const expected = 2500
        const result = bank_account.transaction('14.01.2012', 'debit', 500)
        expect(result).toEqual(expected)
    })

    it('throw an error if balance is too low', () => {
        expect(() => bank_account.transaction('20.05.2022', 'debit', 2000)).toThrow(new Error('Balance too low'))
    })

    it('gets all the transactions', () => {
        bank_account.transaction('10.01.2012', 'credit', 1000)
        bank_account.transaction('13.01.2012', 'credit', 2000)
        const expected = [
            {
                date: '13.01.2012',
                type: 'credit',
                amount: 2000,
                balance: 3000
            },
            {
                date: '10.01.2012',
                type: 'credit',
                amount: 1000,
                balance: 1000
            }
        ]
        const result = bank_account.getTransactions()
        expect(result).toEqual(expected)
    })

    it('get a bank statement', () => {
        bank_account.transaction('10.01.2012', 'credit', 1000)
        bank_account.transaction('13.01.2012', 'credit', 2000)
        bank_account.transaction('14.01.2012', 'debit', 500)
        const expected = `    Date    || Credit  ||  Debit  || Balance \n 14.01.2012 ||         ||  £500   ||  £2500  \n 13.01.2012 ||  £2000  ||         ||  £3000  \n 10.01.2012 ||  £1000  ||         ||  £1000  ` 
        const result = bank_account.getStatement()
        expect(result).toEqual(expected)
    })
})