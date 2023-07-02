function createAccount(pin, amount) {
    
    function account(pin, amount) {
        this.pin = pin;
        this.amount = amount || 0;
    };

    account.prototype.checkBalance = function(currPin){
        console.log(this.pin)
        console.log(currPin)
        if(this.pin !== currPin) return "Invalid PIN.";
        return `$${this.amount}`;
    }
        
    account.prototype.deposit = function(currPin, depoAmnt){
        if(this.pin !== currPin) return "Invalid PIN.";
        this.amount += depoAmnt;
        return `Succesfully deposited $${depoAmnt}. Current balance: $${this.amount}.`;
    }
    
    account.prototype.withdraw = function(currPin, withdrawAmnt){
        if(this.pin !== currPin) return "Invalid PIN.";
        if(withdrawAmnt > this.amount) return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        this.amount -= withdrawAmnt;
        return `Succesfully withdrew $${withdrawAmnt}. Current balance: $${this.amount}.`;
    }
    
    account.prototype.changePin = function(currPin, newPin){
        if(this.pin !== currPin) return "Invalid PIN.";
        this.pin = newPin;
        return `PIN successfully changed!`;
    }
    
    return new account(pin, amount);

}





module.exports = { createAccount };
