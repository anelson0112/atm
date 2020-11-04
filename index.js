//establish bank acc. with PIN and balance

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
    //gather info from input
    let FU = parseInt(document.getElementById("enterPin").value);
    //output 
    let disp = document.getElementById("balance");

      for(let i = 0; i < bankAccounts.length; i++) {

        if(bankAccounts[i].pin === FU) {
            //if pin matches display balance
            
            
            disp.innerHTML+= bankAccounts [i].balance ;   
            return;  
        
            } 
        }   //make new account
        let newAcct = new Account(pin);

        bankAccounts.push(newAccount);

        
           
    }  
