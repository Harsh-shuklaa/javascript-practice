const username = [234,44,53,54]

if (username) {
    console.log("we got your email");
    }
    else{
        console.log("you don't have email");
    }


     //  falsy values => false, 0, -0, BigInt 0n, "", null, undefined, NaN,

        

     //   truthy values  => "0", "false", " ", [], {}, function(){}




    if (username.length===0) {
        console.log("Array is empty");
        
    }else {
        console.log("array is not empty");
    }

    const emptyobj = {}
     if (Object.keys(emptyobj).length===0) {
        console.log("object is empty ");
        
     }


     // Nullish coalescing Operator (??):  Null Undefined

     const val1 = null ?? undefined;
     
     console.log(val1);


     //terniary operator

    //  condition ? true : false

     const iceTeaprice = 100;
     iceTeaprice  >=50 ? console.log("more than 50"): console.log("less than 50");



