//   var c =300;

  if(true) {

  let a = 30;
  const b =40;
//   var c = 50;
//   console.log(a);
}
// console.log(a);
//  node 03_basics.js/02_scopes.js
let a=300;
// console.log(a);


function one(){
    const username='harsh';
    function two(){
        const website ='youtube';
         console.log(username);
    }
    // console.log(website);
    // two()

}
one()

if(true){
    const username = 'harsh';
    if(username==='harsh'){
        const website =' youtube';
        // console.log(username+website);
    }
// console.log(website);

}
// console.log(username);

console.log( addone(5));
function addone(num1){
    return num1+1
}

console.log(addtwo(5));
const addtwo = function  (num2){
    
    return num2+2;
}








