//set variables for inputs on menu page
let deposit = parseFloat(document.getElementById("deposit").value);
let withdrawl = parseFloat(document.getElementById("withdrawl").value);
let showBalance = parseFloat(document.getElementById("showBalance").value);
let changePin = parseInt(document.getElementById("changePin").value); 

//establish bank acc. with PIN and balance
function Account(pin){

  this.pin = pin;
  this.balance= 0;

}
let bankAccounts = [
    {
      pin : 1023,
      balance: 0.00 
    },
    {
      pin: 3023, 
      balance: 100.00
    }, 
  ]
  


  
//function to get pin and check against existing accounts
  function getAccount(pin){
    let enterPin = parseInt(document.getElementById("enterPin").value);
    let disp = document.getElementById("balance");
    
    

      for(let i = 0; i < bankAccounts.length; i++) {

        if(bankAccounts[i].pin === enterPin) {
            
            //open new page to menu page
            window.open ("atm_menu.html");
            //if pin matches display balance
            disp.innerHTML+= bankAccounts [i].balance; 
            
             
            return;  
           }
        } 
        
        //alert("Invalid Pin!")
        return;
      }
      function newAccount(pin){
        let newAccount = new Account(pin);
        bankAccounts.push(newAccount);
        document.getElementById("enterPin").innerHTML += "balance: " + newAccount.balance + newAccount.pin + "<br>";
      }  
      
      function atmMath(){
        let deposit = parseFloat(document.getElementById("deposit").value);
        
        let withdrawl = parseFloat(document.getElementById("withdrawl").value);

        let showBalance = parseFloat(document.getElementById("balance").value);

        //let showBalance = parseFloat(document.getElementById("balance").value);

        if (deposit != ""){

          showBalance = parseFloat(bankAccounts[i].balance + "deposit"); Push???

        } else (withdrawl != "")
        
        {
          showBalance = parseFloat(bankAccounts[i].balance - "withdrawl"); push??
          
      
        }
      }
      //call to retun number
      document.getElementById("balance").value = parseFloat(deposit).toFixed(2);

      document.getElementById("balance").value = parseFloat (withdrawl).toFixed(2);