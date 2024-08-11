                // if,else-if, STATEMENT

        const userloggedin= true
        const DebitCard = true

         if (userloggedin && DebitCard && 2==2) {
            console.log("you can buy a caurse" );
            
         }
         else if (!userloggedin&& DebitCard) {  
            console.log("please logged In");
        
        } else if (userloggedin && !DebitCard){  
            console.log("please Enter your Debit Card");
         }

         else if (!userloggedin && !DebitCard){
            console.log("please fill the information");
         }
         else {
            console.log("Thanks for giving attention to us");
        
        }
        const tempreture =40

        if (tempreture>30) {
            console.log("executed");
            
        }