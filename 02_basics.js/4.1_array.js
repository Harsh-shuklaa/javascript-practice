const marvel_heroes = ['spiderman','ironman','hulk']
const dc_heroes = ['batman','flash','superman']
//   marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

  let heroes = marvel_heroes.concat(dc_heroes)
// console.log(heroes);

let all_heroes = [ ...marvel_heroes,...dc_heroes]
// console.log(all_heroes);


let new_array = [1,1,2,3,4,[3,4,5],[4,5,[5,6,7]]]
let my_real_array =new_array.flat(Infinity)

// console.log(my_real_array);

// console.log(Array.isArray('harsh'))
// console.log(Array.from({name: 'harsh'}))

let score1=1000
let score2=1238
let score3=6097

console.log (Array.of(score1,score2,score3))
