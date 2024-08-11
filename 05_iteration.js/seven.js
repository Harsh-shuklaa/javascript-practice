  const  myarr =[1,2,3,4,5,6,7,8]

//  const number= myarr.map((num)=> num+10)
//   console.log(number);

const mynumers = myarr.map( (num)=> num*10)
                      .map((num)=> num+1)
                      .filter ((num)=> num>52)
     console.log(mynumers);
                      
  
  