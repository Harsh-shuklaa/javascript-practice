const user ={
    username : 'harsh',
    price:999,

    welcomemessage: function (){
        console.log(`${this.username} , Welcome to the website`);
        
    }
}


// user.welcomemessage()

//  user.username='sam';
// user.welcomemessage()
// console.log(this);

// function chai (){
//     let username="harsh"
//     console.log(this.username);
// }


//  const chai =  () => {
//     let username="harsh"
//     console.log(this.username);
// }
// chai()

// const AddTwoNumbers= (num1,num2)=> (num1+num2)
   
const AddTwoNumbers= (num1,num2)=>( {username:'harsh'})
console.log(AddTwoNumbers(5,4));