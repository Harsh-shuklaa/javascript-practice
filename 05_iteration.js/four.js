const myobject ={
    js: "javascript",
    cpp: "c++",
    rb:"ruby",
    swift:"swift by apple"
}
for (const key in myobject) {
//  console.log(key,":-",myobject[key]);
}

const programming =["js","cpp","ruby","python","java"]
for (const key in programming) {
   // console.log(programming[key]);
}

const map = new Map
map.set("In", "India")
map.set("USA", "Unites states of America")
map.set("fr", "france")

for (const key in map) {
   console.log(map[key]);
}

