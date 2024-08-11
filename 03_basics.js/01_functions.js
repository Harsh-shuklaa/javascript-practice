function myname(){
console.log('h');
console.log('a');
console.log('r');
console.log('s');
console.log('h');
}

console.log(myname); 


// function AddTwoNumbers (number1,number2){
//     console.log(number1+number2);
// }

function AddTwoNumbers (number1,number2){
    //  let Result = number1+number2;
     return number1+number2;

}

const Result=  AddTwoNumbers(54,654)
// console.log('Result:',Result);

 function LogginUserMessage(username='sam'){
    if (!username){
        console.log("Please enter your name");

    }
           return `${username} just logged In`
 }



//  console.log( LogginUserMessage('harsh'));



 function calculateCartPrice (val1,val2,...num1) {
    return num1
 }

//  console.log(calculateCartPrice(234,345534,535,244));


// const user= {
//     Username:'harsh',
//     price:999

// }
function handleObject(anyObject){
    console.log(`Username is ${anyObject.Username} & price is ${anyObject.price}`);
    
}

handleObject({
    Username :'sahil',
    price:455
})


 const myArr =[200,300,400,500]

function returnSecondValue (getArr){

    return getArr[1];

}

console.log(returnSecondValue(myArr));
console.log(returnSecondValue([100,200,300,400]));







