'use strict'
//ATM constructor
let atm = new Atm();

function Atm() {

    this.accounts = []; //empty array for acct
    this.currentAccount = null; //set new account ammount to empty

    this.createAccount = function(pin){
        let newAccount = new Account(pin);
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

function Account(pin) {
    this.pin = pin;
    this.balance = 0;

    this.getBalance = function() {
        return(this.balance);
    }

    this.withdrawl = function() {

    }

    this.deposit = function() {


    }
}

function returnToLogIn() {

    document.getElementById("intro").style.display= "block";
    //shows menu
    document.getElementById("menu").style.display= "none";

}

function showBalance() {

    document.getElementById("showBalance").innerHTML=atm.currentAccount.balance;
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
    atm.createAccount(pin);
    //shows menu upon successful entry
    displayMenu(); 

}
 function displayMenu (){
    //hides PIN entry menu
    document.getElementById("intro").style.display= "none";
    //shows menu
    document.getElementById("menu").style.display= "block";
 }
 
 
 let accounts = [
    {
      pin : 1023,
      balance: 0.00 
    },
    {
      pin: 3023, 
      balance: 100.00
    }, 
  ]