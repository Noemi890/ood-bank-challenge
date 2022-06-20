const BankAccount = require('./bank_account')

class Statement {

    printStatement(transactions) {

        const upperRow = '    Date    |  Amount  |   Type   |  Balance |\n----------------------------------------------'
        
        // console.log(upperRow)
        // console.log(transactions, balance)
        let statement = ''

        for (let i = 0; i < transactions.length; i++) {
            if (transactions[i].type === 'debit') {
                statement += `\n ${transactions[i].date} |    £${transactions[i].amount}  |  ${transactions[i].type}   |   £${transactions[i].balance}  |`
            }
            else {
            statement += `\n ${transactions[i].date} |   £${transactions[i].amount}  |  ${transactions[i].type}  |   £${transactions[i].balance}  |`
            }
        }

        console.log(upperRow + statement)
        return upperRow + statement
    } 
}

module.exports = Statement