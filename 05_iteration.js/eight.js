const myNums = [1,2,3,4]

const myTotal = myNums.reduce( function (acc,currval) {
//    console.log(`accumulator: ${acc} & current value: ${currval}`);
   
    return acc +   currval

     },0
 )

 const mytotal = myNums.reduce( (acc,currval)=> acc+currval,0)
//  console.log(myTotal);
//  console.log(mytotal);


 const shoppingCart = [
   {
    Caursename:"js",
    price:2999
   },
   {
    Caursename:"Ruby",
    price:3599
   },
   {
    Caursename:"Node js",
    price:3999
   },
   {
    Caursename:"html",
    price:199
   },
]

const totalShoppingPrice = shoppingCart.reduce( (acc,caurse)=> acc+caurse.price ,0 )
console.log(totalShoppingPrice);




 