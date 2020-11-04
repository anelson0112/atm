'use strict'

//open asking for input for name account and pin

function haveAccount (){
  
  prompt("Have account?",Yes, No){
    //do you have an account?
    if Yes /*True?*/ AcctHolder()
    //create new account
  } else  No /*false??*/newUser(){

  };
  };


function Calculator (){
    //set variables for deposit or withdrawl amount
    this.deposit= 0;
    this.withdrawl=0;
  
    this.read = function() {
      //get input of deposit
      this.deposit = Number(prompt ("Enter deposit amount", 0)); //prompt placeholder until input is set
      //get input of witdrawl
      this.withdrawl = Number(prompt ("Enter withdrawl amount", 0));
    }
  //add deposit amount to balance
    this.sum = function(){
      //function to add deposit to balance
      return(this.BALANCE + this.deposit);
    }
  //subtract deposit from balance
    this.sub = function(){
      //function to subtract W/D from balance
      return(this.BALANCE - this.withdrawl);
  
    }
  
  }
  //variable for balance
  let balance =0;

  //need to have a function for the balance that will record the amount and associate it with account holder

  //Make account holder object
  function AcctHolder (name, acct, pin, bal){

    this.name = name;
    this.acct = 0;
    this.pin = 0; //need to test if true
    this.bal = 0;
  
    this.user = function(){ //get new user info
      //user name
      this.name = prompt ("Enter name" + "");
      //user account number
      this.acct = Number(prompt ("Enter name account", 0));//prompt placeholder until input is set
      //user pin number
      this.pin = Number(prompt ("Enter PIN", 0 ));
      //user beginning balance??
      this.bal = Number (prompt ("Enter beginning balance??", 0));
  
  
    }
  
  }

  //variable for account holder info
  let user;

  //access with pin exsisitng acct

  //Create new account with PIN

  // Deposit, print balance

  //Withdrawl, pring balance


  //change pin


  //get balance and print

  //local storage......
