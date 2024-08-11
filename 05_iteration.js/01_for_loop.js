   //  for loop

//    for (let i = 0; i <=10; i++) {
//     const element = i;
//     if (element==5) {
//         console.log(`5 is middle number` );
        
//     }
    // console.log(element);

//    }

   for (let i = 2; i <=20; i++) {
    //console.log(`Table of  ${i} is `);
    for (let j = 1; j <=10; j++) {
        // console.log(`Inner loop value ${j} and inner loop is ${i}`);
       // console.log(` ${i} * ${j} = ${i*j}`);
        
    }
    
   }
const myArray = ["apple","mango","Banana"]
// console.log(myArray.length);
   for (let index = 0; index <= myArray.length; index++) {
    const element = myArray[index];
    
    // console.log(element);
      }
                // Break and Continue

//    for (let index = 1; index <=20; index++) {
//     if (index==5) {
//         console.log("5 Detected");
//         break;
        
//     }
//     console.log(`value of index is ${index}`);
    
//    }
   for (let index = 1; index <=20; index++) {
    if (index==5) {
        console.log("5 Detected");
        continue;
        
    }
    console.log(`value of index is ${index}`);
    
   }
   