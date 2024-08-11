// for of 


const Arr = [1,2,3,4,5,6]
 for (const num of Arr) {
    // console.log(num);
 }
    
const greetings = "helllo world"
// for (const greet of greetings) {
//     console.log(` each character ${greet}`);
// }

//maps = knowmn for the unique value & sequence

const map = new Map
map.set("In", "India")
map.set("USA", "Unites states of America")
map.set("fr", "france")
// console.log(map);

for (const [key,value] of map) {
    console.log(key,':-',value);
}

