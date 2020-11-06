'use strict'
//ATM constructor
let atm = new Atm();
atm.createAccount (1313, 2200);
atm.createAccount (4242, 125);
atm.createAccount (1013, 1900);

function Atm() {

    this.accounts = []; //empty array for acct
    this.currentAccount = null; //set new account ammount to empty

    this.createAccount = function(pin, balance) {
        let newAccount = new Account(pin, balance);
        this.accounts.push(newAccount);
        this.currentAccount = newAccount;
        return newAccount;
    };

    this.getAccount = function (pin) {
        for (let i = 0; i <this.accounts.length; i++){
            if (this.accounts[i].pin === pin){
                //loops through accounts returns one if PIN matches
                this.currentAccount = this.accounts[i];
                return this.accounts[i];
            }
        }
        return null;
    };
    
    this.configuration = {};
}

function Account(pin, balance) {
    this.pin = pin;
    this.balance = balance;
    

    this.getBalance = function() {
        return(this.balance);
    }

    this.withdrawl = function(amount) {
        console.log( typeof balance);
        this.balance -= amount;
        console.log (typeof balance);

    }

    this.deposit = function(amount) {
        console.log(amount);
        this.balance = Number(this.balance)+= amount;
        console.log(amount);

    }
}

function returnToLogIn() {

    document.getElementById("intro").style.display= "block";
    //shows menu
    document.getElementById("menu").style.display= "none";

}

function showBalance() {

    document.getElementById("showBalance").value=atm.currentAccount.balance;
}

function confirmAccount() {

    let pin = parseInt(document.getElementById("enterPin").value); 
    atm.getAccount(pin);

    if (atm.currentAccount === null){

        alert ('Invalid PIN, create a new account');
        
    } else{
        displayMenu();
    }
    return;
}
function newAccount() {

    let pin = parseInt(document.getElementById("enterPin").value);
    
    let balance = document.getElementById("initialDeposit").value;
    atm.createAccount(pin,balance);
    console.log (typeof balance)
    //shows menu upon successful entry
    displayMenu(); 

}
 function displayMenu (){
    //hides PIN entry menu
    document.getElementById("intro").style.display= "none";
    //shows menu
    document.getElementById("menu").style.display= "block";
 }
 
function atmMath() {

    let withdrawl = document.getElementById("withdrawl").value;
    let deposit = document.getElementById("deposit").value;
    let showBalance = document.getElementById("showBalance").value;
    
    console.log(typeof deposit)
    console.log (withdrawl)
    console.log (atm.currentAccount.pin)
    console.log (atm.createAccount.balance)

    if (withdrawl != ""){
        atm.currentAccount.withdrawl(parseFloat(withdrawl))
        document.getElementById("showBalance").value = atm.currentAccount.balance;
    
    } else if (deposit != "") {
        atm.currentAccount.deposit(parseFloat(deposit))
        document.getElementById("showBalance").value = atm.currentAccount.balance;

    } else {
        document.getElementById("showBalance").value=atm.currentAccount.balance;
    }


} 
    
 

    
   