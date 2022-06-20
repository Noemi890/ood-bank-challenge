| Class | Method | Scenario | Output
| ----- | ------ | -------- | ------
|**BankAccount** | deposit(date, type, amount(@String, @String, @Num)) | | money added, returns the current balance
|**BankAccount** | withdrawal(date, type, amount (@String, @String, @Num)) | enough money in balance | money taken away, returns the current balance
| | | not enough money | returns an error